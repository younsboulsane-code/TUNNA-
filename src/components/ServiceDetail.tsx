import React from 'react';
import { ArrowLeft, Star, ExternalLink, Globe } from 'lucide-react';
import { Service } from '../types';
import { cn } from '../utils';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-tunna-blue transition-colors mb-8 font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Directory
      </button>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-24 h-24 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 shrink-0">
              <img
                src={service.logo}
                alt={service.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-4xl font-display font-extrabold text-tunna-text">
                  {service.name}
                </h1>
                {service.isSponsored && (
                  <span className="px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-400 rounded uppercase tracking-wider">
                    Sponsored
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold text-tunna-text">{service.rating}</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-sm font-semibold text-tunna-blue">{service.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.badges.map((badge) => (
                  <span
                    key={badge}
                    className={cn(
                      "px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider",
                      badge === "Editor's Pick" ? "bg-tunna-blue/10 text-tunna-blue" : "bg-gray-100 text-gray-500"
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-gray max-w-none mb-12">
            <h2 className="text-2xl font-display font-bold text-tunna-text mb-4">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.longDescription || service.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-gray-50">
            <a
              href={service.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-tunna-blue text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-tunna-blue/20"
            >
              Visit {service.name}
              <ExternalLink className="w-5 h-5" />
            </a>
            <button className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 text-tunna-text rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-tunna-blue transition-all">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
        <Globe className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">Verified by tunna experts</span>
      </div>
    </div>
  );
};
