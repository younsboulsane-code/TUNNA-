import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../utils';

interface HeaderProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onPageChange }) => {
  const navItems = ['Home', 'Categories', 'Guide', 'Blog', 'FAQ', 'About'];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onPageChange('Home')}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 bg-tunna-blue rounded-md flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-display font-extrabold tracking-tight text-tunna-text">tunna</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onPageChange(item)}
                className={cn(
                  "text-[14px] font-semibold transition-colors",
                  activePage === item ? "text-tunna-blue" : "text-gray-500 hover:text-tunna-blue"
                )}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 bg-tunna-blue text-white rounded-full text-[13px] font-bold hover:bg-blue-700 transition-colors shadow-sm">
            Resources
          </button>
        </div>
      </div>
    </header>
  );
};


