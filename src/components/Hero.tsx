import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Home, Sparkles, Clock, Calculator, PhoneCall } from 'lucide-react';
import { COMPANY_PHONE, FOUNDED_YEAR } from '../data/landingData';
import { calculateEstimate, ServiceType } from '../utils/estimate';

interface HeroProps {
  onOpenEstimateModal: () => void;
  onSelectServiceAndQuote?: (service: ServiceType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal, onSelectServiceAndQuote }) => {
  // Quick quote interactive widget inside Hero 40% column
  const [selectedService, setSelectedService] = useState<ServiceType>('interior');
  const [roomCount, setRoomCount] = useState<number>(3);
  const [showInstantPrice, setShowInstantPrice] = useState<boolean>(false);

  const estimate = calculateEstimate({
    serviceType: selectedService,
    rooms: roomCount
  });

  const handleQuickEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowInstantPrice(true);
    if (onSelectServiceAndQuote) {
      onSelectServiceAndQuote(selectedService);
    }
  };

  const scrollToTransformations = () => {
    const el = document.getElementById('transformations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#F8F6F2] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-stone-200">
      {/* Background Image with warm architectural overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Luxury painted home architectural background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft luminous gradient overlay for pristine text legibility and palette adherence */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/95 via-45% to-[#F8F6F2]/75 lg:to-[#F8F6F2]/55 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#F8F6F2]" />
      </div>

      {/* Decorative architectural ambient accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-100/30 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-amber-100/25 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 60% Column: Headline, Copy, Primary CTAs & Trust Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Subtle Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#EC282D] text-xs sm:text-sm font-bold w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#EC282D] animate-pulse" />
              <span>Toronto & GTA’s Premier Painters Since {FOUNDED_YEAR}</span>
            </div>

            {/* Suggested Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-[1.15] mb-5">
              Bring New Life to Your Home With{' '}
              <span className="text-[#EC282D] relative inline-block">
                Toronto's Trusted
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-red-300 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>{' '}
              Painting Professionals.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Transform your home with professional interior and exterior painting. From refreshing a single room to giving your entire property a new look, our experienced team delivers beautiful finishes with care and attention to detail.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <button
                onClick={onOpenEstimateModal}
                className="bg-[#EC282D] hover:bg-[#D62025] text-white px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Get My Free Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToTransformations}
                className="bg-white hover:bg-stone-50 border-2 border-stone-300 text-stone-800 px-6 py-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Indicators Underneath (Requested: review rating, homes painted, years serving Toronto) */}
            <div className="pt-6 border-t border-stone-300/80 grid grid-cols-3 gap-3 sm:gap-6">
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-extrabold text-stone-900 text-sm sm:text-base ml-1">4.9/5</span>
                </div>
                <span className="text-xs text-stone-500 font-medium">1,200+ Verified Reviews</span>
              </div>

              {/* Homes Painted */}
              <div className="flex flex-col border-l border-stone-200 pl-3 sm:pl-6">
                <span className="text-lg sm:text-xl font-extrabold text-[#1E242B] tracking-tight">20,000+</span>
                <span className="text-xs text-stone-500 font-medium">Homes Painted</span>
              </div>

              {/* Years Serving Toronto */}
              <div className="flex flex-col border-l border-stone-200 pl-3 sm:pl-6">
                <span className="text-lg sm:text-xl font-extrabold text-[#1E242B] tracking-tight">35+ Years</span>
                <span className="text-xs text-stone-500 font-medium">Serving Toronto & GTA</span>
              </div>
            </div>

            {/* Assurance Bullet Points */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-stone-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6DBE45]" />
                3-Year Written Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6DBE45]" />
                $5M Liability & WSIB Insured
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#6DBE45]" />
                Benjamin Moore & Sherwin-Williams
              </span>
            </div>

          </div>

          {/* 40% Column: Gorgeous Finished Project & Compact Quick-Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              
              {/* Photo Showcase */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Beautifully painted Toronto home living room with modern millwork and vaulted ceilings"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#6DBE45]" />
                  Rosedale Heritage Transformation
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-stone-200">Finished Project Highlight</p>
                  <p className="text-sm font-bold">Benjamin Moore Chantilly Lace & Charcoal Accent</p>
                </div>
              </div>

              {/* Compact Quick Quote Form Overlay (High conversion strategy recommended by designer) */}
              <div className="p-5 sm:p-6 bg-white border-t border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-red-100 rounded-lg text-[#EC282D]">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">Instant Project Estimator</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-[#6DBE45] bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                    Free • No Obligation
                  </span>
                </div>

                <form onSubmit={handleQuickEstimateSubmit} className="space-y-3.5">
                  {/* Service selector tabs */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">Select Service</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedService('interior')}
                        className={`text-xs py-2 px-1 rounded-lg font-bold border transition-all ${
                          selectedService === 'interior'
                            ? 'bg-[#EC282D] text-white border-[#EC282D] shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Interior
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedService('exterior')}
                        className={`text-xs py-2 px-1 rounded-lg font-bold border transition-all ${
                          selectedService === 'exterior'
                            ? 'bg-[#EC282D] text-white border-[#EC282D] shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Exterior
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedService('cabinets')}
                        className={`text-xs py-2 px-1 rounded-lg font-bold border transition-all ${
                          selectedService === 'cabinets'
                            ? 'bg-[#EC282D] text-white border-[#EC282D] shadow-xs'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        Cabinets
                      </button>
                    </div>
                  </div>

                  {/* Scope Selector */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-1">
                      <span>{selectedService === 'cabinets' ? 'Approx. Cabinet Doors:' : 'Estimated Rooms / Area:'}</span>
                      <span className="text-[#EC282D] font-extrabold">{selectedService === 'cabinets' ? `${roomCount * 8} Doors` : `${roomCount} Rooms`}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={roomCount}
                      onChange={(e) => setRoomCount(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>1 room / condo</span>
                      <span>Whole Home (5+ rooms)</span>
                    </div>
                  </div>

                  {/* Live Estimate Bracket Display */}
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider">Estimated Project Range</span>
                      <span className="text-lg font-extrabold text-[#1E242B]">
                        ${estimate.minPrice.toLocaleString()} – ${estimate.maxPrice.toLocaleString()} <span className="text-xs font-normal text-stone-500">CAD</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[11px] text-stone-500">Est. Duration</span>
                      <span className="text-xs font-bold text-[#6DBE45]">{estimate.estimatedDays} Day{estimate.estimatedDays > 1 ? 's' : ''} on site</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenEstimateModal}
                    className="w-full bg-[#EC282D] hover:bg-[#D62025] text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Lock In My Free Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Quote delivered to your email in under 24 hours</span>
                  </div>
                </form>
              </div>
            </div>

            {/* HomeStars Badge Floating Tag - Elevated so title on the image is fully visible */}
            <div className="hidden sm:flex absolute -top-10 sm:-top-11 -left-3 sm:-left-5 bg-white py-2.5 px-3.5 rounded-xl shadow-xl border border-stone-200 items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              </div>
              <div className="leading-tight text-left">
                <div className="text-xs font-extrabold text-stone-900">HomeStars Best Of Award</div>
                <div className="text-[10px] text-stone-500">12 Consecutive Years</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
