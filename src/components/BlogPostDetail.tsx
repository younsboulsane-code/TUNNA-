import React from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Search, ChevronRight, Share2, Bookmark } from 'lucide-react';
import { cn } from '../utils';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
  onPostSelect: (post: BlogPost) => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack, onPostSelect }) => {
  const categories = Array.from(new Set(BLOG_POSTS.map(p => p.category)));
  const recentPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-tunna-blue font-bold text-sm mb-12 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="flex-grow lg:max-w-[calc(100%-400px)]">
          <article>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tunna-blue/10 text-tunna-blue rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold text-tunna-text mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center flex-wrap gap-6 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-tunna-text">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <button className="hover:text-tunna-blue transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="hover:text-tunna-blue transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-12">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium italic">
                {post.description}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-2xl font-display font-bold text-tunna-text mt-12 mb-6">The Evolution of Digital Intelligence</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-disc pl-6 space-y-4 my-8">
                <li>Strategic automation for complex workflows</li>
                <li>Real-time data processing and analysis</li>
                <li>Seamless integration with existing ecosystems</li>
                <li>Privacy-first architecture by design</li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <blockquote className="border-l-4 border-tunna-blue pl-8 py-4 my-12 bg-gray-50 rounded-r-2xl italic text-xl text-tunna-text font-medium">
                "Intelligence is not just about processing power; it's about clarity of purpose and efficiency of action."
              </blockquote>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tags:</span>
                  <div className="flex items-center gap-2">
                    {['AI', 'Future', 'Tech', 'Innovation'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[350px] shrink-0 space-y-12">
          {/* Search */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-tunna-text mb-6">Search</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-tunna-blue outline-none transition-all text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-tunna-text mb-6">Categories</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-tunna-blue transition-all group"
                >
                  <span className="text-sm font-bold">{cat}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-tunna-text mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {recentPosts.map(p => (
                <button 
                  key={p.id}
                  onClick={() => onPostSelect(p)}
                  className="flex gap-4 text-left group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-tunna-text group-hover:text-tunna-blue transition-colors line-clamp-2 mb-1">
                      {p.title}
                    </h4>
                    <span className="text-[11px] text-gray-400 font-medium">{p.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-tunna-blue p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold mb-3">Stay Updated</h3>
              <p className="text-white/70 text-sm mb-6">Get the latest insights delivered to your inbox.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none placeholder:text-white/40 text-sm focus:bg-white/20 transition-all"
                />
                <button className="w-full py-3 bg-white text-tunna-blue rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
