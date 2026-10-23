import React from 'react';
import { SERVICES, ServiceItem } from '../data/landingData';
import { Check, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceType } from '../utils/estimate';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8F6F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#EC282D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Residential Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            Every Space Deserves a Beautiful Finish.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Whether you're refreshing your interiors, protecting your home's exterior, or upgrading tired surfaces, we have the expertise to bring your vision to life.
          </p>
        </div>

        {/* 4 Image-Led Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/90 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-[#EC282D] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {service.tag}
                </div>

                {/* Duration indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-medium bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-[#6DBE45]" />
                  <span>Est: {service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1E242B] mb-1 group-hover:text-[#EC282D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mb-3 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-stone-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                        <Check className="w-4 h-4 text-[#6DBE45] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full bg-stone-50 hover:bg-[#EC282D] text-stone-800 hover:text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border border-stone-200 hover:border-[#EC282D] transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>Get Estimate For {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note on Specialized Services */}
        <div className="mt-12 text-center bg-white rounded-xl p-5 border border-stone-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-[#EC282D] uppercase tracking-wider block">Specialty Services</span>
            <p className="text-xs sm:text-sm text-stone-600">
              Also offering brick staining, popcorn ceiling removal, wallpaper installation & commercial spray painting.
            </p>
          </div>
          <button
            onClick={() => onSelectService('carpentry')}
            className="text-xs sm:text-sm font-bold text-[#1E242B] hover:text-[#EC282D] underline whitespace-nowrap cursor-pointer"
          >
            Ask About Custom Services →
          </button>
        </div>

      </div>
    </section>
  );
};
