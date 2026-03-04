import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { ServiceDetail } from './components/ServiceDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { FAQ } from './components/FAQ';
import { TermsOfService } from './components/TermsOfService';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { BlogPostDetail } from './components/BlogPostDetail';
import { SERVICES, GUIDES, BLOG_POSTS } from './constants';
import { Twitter, ChevronRight, Globe, BookOpen, Layers, Info } from 'lucide-react';
import { cn } from './utils';
import { Service, BlogPost } from './types';

export default function App() {
  const [activePage, setActivePage] = React.useState<string>('Home');
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = React.useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>('AI Tools');
  const [activePill, setActivePill] = React.useState<string>("Editor's Pick");

  const pills = ['Today', 'New', 'Top Rated', 'Best Value', 'Free Tier', "Editor's Pick"];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const renderContent = () => {
    if (selectedService) {
      return (
        <ServiceDetail
          service={selectedService}
          onBack={() => setSelectedService(null)}
        />
      );
    }

    if (selectedBlogPost) {
      return (
        <BlogPostDetail
          post={selectedBlogPost}
          onBack={() => setSelectedBlogPost(null)}
          onPostSelect={(post) => {
            setSelectedBlogPost(post);
            window.scrollTo(0, 0);
          }}
        />
      );
    }

    switch (activePage) {
      case 'Privacy':
        return <PrivacyPolicy />;
      case 'FAQ':
        return <FAQ />;
      case 'Terms':
        return <TermsOfService />;
      case 'Blog':
        return <Blog onPostSelect={(post) => {
          setSelectedBlogPost(post);
          window.scrollTo(0, 0);
        }} />;
      case 'Categories':
        const categories = Array.from(new Set(SERVICES.map(s => s.category)));
        return (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-display font-extrabold mb-12 flex items-center gap-3">
              <Layers className="w-8 h-8 text-tunna-blue" />
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActivePage('Home');
                  }}
                  className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-tunna-blue transition-all text-left group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-tunna-blue transition-colors">{cat}</h3>
                  <p className="text-gray-500 text-sm">
                    Discover the top-rated {cat.toLowerCase()} reviewed by our experts.
                  </p>
                </button>
              ))}
            </div>
          </div>
        );
      case 'Guide':
        return (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-display font-extrabold mb-12 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-tunna-blue" />
              Expert Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {GUIDES.map(guide => (
                <div key={guide.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-xs font-bold text-tunna-blue uppercase tracking-widest mb-4 block">{guide.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{guide.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <span className="text-xs text-gray-400 font-medium">{guide.date}</span>
                    <button className="text-tunna-blue font-bold text-sm hover:underline">Read Full Guide</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'About':
        return <About />;
      default:
        return (
          <>
            <Hero activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Reviewed by our team</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>Updated: Oct 1, 2025</span>
                </div>
                <a 
                  href="https://twitter.com/WikiAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm hover:border-tunna-blue transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-tunna-blue" />
                  <span className="text-[11px] font-bold text-gray-600">@WikiAI</span>
                </a>
              </div>

              <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar">
                {pills.map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setActivePill(pill)}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-[12px] font-bold transition-all border",
                      activePill === pill 
                        ? "bg-tunna-blue border-tunna-blue text-white shadow-sm" 
                        : "bg-white border-gray-100 text-gray-500 hover:border-gray-200"
                    )}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    onClick={() => setSelectedService(service)}
                  />
                ))}
              </div>

              <div className="mt-16 text-center">
                <button className="px-8 py-3 bg-white border border-gray-200 rounded-xl font-bold text-sm text-tunna-text hover:border-tunna-blue transition-all inline-flex items-center gap-2">
                  Load More Services
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Blog Preview Section */}
              <div className="mt-24 pt-24 border-t border-gray-100">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-tunna-text mb-2">Latest from the Blog</h2>
                    <p className="text-gray-500 text-sm">Expert insights and tutorials.</p>
                  </div>
                  <button 
                    onClick={() => setActivePage('Blog')}
                    className="text-tunna-blue font-bold text-sm hover:underline flex items-center gap-1"
                  >
                    View All Posts
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "The Future of AI in 2026",
                      excerpt: "How artificial intelligence is reshaping the digital landscape...",
                      image: "https://picsum.photos/seed/ai-future/400/300"
                    },
                    {
                      title: "Top 10 Productivity Hacks",
                      excerpt: "Boost your efficiency with these simple yet powerful techniques...",
                      image: "https://picsum.photos/seed/productivity/400/300"
                    },
                    {
                      title: "Securing Your Digital Life",
                      excerpt: "A comprehensive guide to protecting your personal data...",
                      image: "https://picsum.photos/seed/security/400/300"
                    }
                  ].map((post, i) => (
                    <div 
                      key={i} 
                      className="group cursor-pointer" 
                      onClick={() => {
                        const fullPost = BLOG_POSTS.find(p => p.title === post.title);
                        if (fullPost) {
                          setSelectedBlogPost(fullPost);
                          window.scrollTo(0, 0);
                        } else {
                          setActivePage('Blog');
                        }
                      }}
                    >
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      </div>
                      <h3 className="font-bold text-tunna-text mb-2 group-hover:text-tunna-blue transition-colors">{post.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-tunna-bg">
      <Header 
        activePage={activePage} 
        onPageChange={(page) => {
          setActivePage(page);
          setSelectedService(null);
          setSelectedBlogPost(null);
        }} 
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-tunna-text text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-tunna-blue rounded-md flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight">tunna</span>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => {
                  setActivePage('Privacy');
                  setSelectedService(null);
                  window.scrollTo(0, 0);
                }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  setActivePage('Terms');
                  setSelectedService(null);
                  window.scrollTo(0, 0);
                }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Terms of Use
              </button>
              <button 
                onClick={() => {
                  setActivePage('Blog');
                  setSelectedService(null);
                  window.scrollTo(0, 0);
                }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                Blog
              </button>
              <button 
                onClick={() => {
                  setActivePage('FAQ');
                  setSelectedService(null);
                  window.scrollTo(0, 0);
                }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => {
                  setActivePage('About');
                  setSelectedService(null);
                  window.scrollTo(0, 0);
                }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                About
              </button>
              <a href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="text-sm font-medium text-white/50">
              © 2025 tunna. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


