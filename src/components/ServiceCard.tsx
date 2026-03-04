import React from 'react';
import { Star } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../utils';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative text-left w-full"
    >
      {service.isSponsored && (
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-gray-100 text-[9px] font-bold text-gray-400 rounded uppercase tracking-wider">
          Sponsored
        </span>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
          <img
            src={service.logo}
            alt={service.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="font-display font-bold text-tunna-text group-hover:text-tunna-blue transition-colors">
            {service.name}
          </h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold text-tunna-text">{service.rating}</span>
          </div>
        </div>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {service.badges.map((badge) => (
          <span
            key={badge}
            className={cn(
              "px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider",
              badge === "Editor's Pick" ? "bg-tunna-blue/10 text-tunna-blue" : "bg-gray-100 text-gray-500"
            )}
          >
            {badge}
          </span>
        ))}
      </div>
    </button>
  );
};

