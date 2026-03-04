import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '../utils';

interface HeroProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeCategory, onCategoryChange }) => {
  const categories = ['All', 'AI Tools', 'Web Hosting', 'VPN Services', 'Email Providers', 'Productivity', 'Deals'];

  return (
    <section className="bg-white pt-16 pb-0 border-b border-gray-100 bg-diamond">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Sponsored Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-full mb-8 shadow-sm">
            <span className="text-[11px] font-bold text-gray-400">Sponsored by</span>
            <span className="text-[11px] font-extrabold text-tunna-purple">EverMemOS</span>
          </div>

          <h1 className="text-[2.5rem] font-display font-bold text-black mb-6 leading-tight">
            Discover The Best <span className="bg-gradient-to-r from-[#2563EB] via-[#7E22CE] to-[#EC4899] bg-clip-text text-transparent">AI Tools, Hosting, VPN & Digital Services</span>
          </h1>
          
          <p className="text-[15px] text-gray-500 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            <span className="text-tunna-purple">28303</span> Als and <span className="text-tunna-purple">459</span> categories in the best AI tools directory. AI tools list & GPTs store are updated daily by ChatGPT.
          </p>
          
          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center">
              <input
                type="text"
                placeholder="Search by AI, e.g. Video Translation AI Tool"
                className="flex-grow h-14 pl-6 bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none text-lg"
              />
              <button className="px-8 h-12 bg-tunna-purple text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-tunna-purple/20">
                Search
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                "pb-4 text-[13px] font-bold whitespace-nowrap transition-all border-b-2 border-transparent",
                activeCategory === cat ? "border-tunna-blue text-tunna-blue" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};


