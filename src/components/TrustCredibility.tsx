import React from 'react';
import { Award, ShieldCheck, Star, CheckCircle, ThumbsUp } from 'lucide-react';

export const TrustCredibility: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#EC282D]" />
            Trusted by Toronto Homeowners for Decades
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E242B] tracking-tight mb-3">
            A Reputation Built on Beautiful Results.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Thousands of homeowners across Toronto and the GTA have trusted Home Painters Toronto to refresh, protect, and transform their properties.
          </p>
        </div>

        {/* 3 Core Published Figures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          <div className="bg-[#F8F6F2] rounded-2xl p-6 sm:p-8 text-center border border-stone-200/80 shadow-xs hover:border-red-200 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-100 flex items-center justify-center text-[#EC282D]">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#1E242B] tracking-tight mb-2">
              20,000<span className="text-[#EC282D]">+</span>
            </div>
            <div className="text-base font-bold text-stone-800 mb-1">Homes Painted</div>
            <p className="text-xs sm:text-sm text-stone-500">
              Transforming houses, lofts, condos, and heritage estates across all 25 Toronto boroughs and GTA regions.
            </p>
          </div>

          <div className="bg-[#F8F6F2] rounded-2xl p-6 sm:p-8 text-center border border-stone-200/80 shadow-xs hover:border-red-200 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 flex items-center justify-center text-amber-500">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#1E242B] tracking-tight mb-2">
              1,200<span className="text-[#EC282D]">+</span>
            </div>
            <div className="text-base font-bold text-stone-800 mb-1">Positive Reviews</div>
            <p className="text-xs sm:text-sm text-stone-500">
              Consistent 4.9-star average across HomeStars, Google Reviews, Houzz, and Facebook ratings.
            </p>
          </div>

          <div className="bg-[#F8F6F2] rounded-2xl p-6 sm:p-8 text-center border border-stone-200/80 shadow-xs hover:border-red-200 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-100 flex items-center justify-center text-[#6DBE45]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-[#1E242B] tracking-tight mb-2">
              Since 1991
            </div>
            <div className="text-base font-bold text-stone-800 mb-1">Serving Toronto & GTA</div>
            <p className="text-xs sm:text-sm text-stone-500">
              Over 35 continuous years of local ownership, licensed trade craftsmanship, and customer trust.
            </p>
          </div>

        </div>

        {/* Authentic Recognition & Verification Badges */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">
            Recognized & Certified by Leading Industry Authorities
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-center">
            
            {/* HomeStars Badge */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#EC282D] text-white flex items-center justify-center font-black text-xs">
                HS
              </div>
              <div className="text-left leading-none">
                <span className="block text-xs font-extrabold text-stone-900">HomeStars</span>
                <span className="text-[10px] font-bold text-[#EC282D]">Best Of 2015-2026</span>
              </div>
            </div>

            {/* Houzz Badge */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-full bg-[#6DBE45] text-white flex items-center justify-center font-black text-xs">
                HZ
              </div>
              <div className="text-left leading-none">
                <span className="block text-xs font-extrabold text-stone-900">Best of Houzz</span>
                <span className="text-[10px] font-bold text-stone-600">Client Satisfaction</span>
              </div>
            </div>

            {/* BBB Accredited */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-full bg-blue-700 text-white flex items-center justify-center font-black text-xs">
                A+
              </div>
              <div className="text-left leading-none">
                <span className="block text-xs font-extrabold text-stone-900">BBB Accredited</span>
                <span className="text-[10px] font-bold text-stone-600">A+ Highest Rating</span>
              </div>
            </div>

            {/* Google Guaranteed */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs">
                <Star className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="text-left leading-none">
                <span className="block text-xs font-extrabold text-stone-900">Google Verified</span>
                <span className="text-[10px] font-bold text-stone-600">4.9 Star Average</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
