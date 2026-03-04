import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, User } from 'lucide-react';

import { BlogPost } from '../types';

interface BlogProps {
  onPostSelect: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onPostSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-display font-extrabold text-tunna-text mb-4">Latest from the Blog</h2>
        <p className="text-gray-500 max-w-2xl">
          Insights, tutorials, and expert analysis on the latest in AI, productivity, and digital security.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            onClick={() => onPostSelect(post)}
            className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-4 text-[11px] font-bold uppercase tracking-widest text-tunna-blue">
                <span>{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-tunna-text mb-3 line-clamp-2 group-hover:text-tunna-blue transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {post.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                <div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-tunna-blue font-bold text-sm hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
