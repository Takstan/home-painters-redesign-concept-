import React from 'react';
import { Zap, ShieldCheck, Wrench, CreditCard, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-[#EC282D]" />,
      bg: "bg-red-50",
      title: "Fast, Convenient Estimates",
      description: "Get guidance on your project without unnecessary delays. We provide same-day digital and on-site consultations with clear, fixed pricing.",
      tag: "24-Hour Turnaround"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6DBE45]" />,
      bg: "bg-green-50",
      title: "Warranty-Backed Workmanship",
      description: "Enjoy added peace of mind with warranties tailored to the painting service. Backed by up to 3 years of comprehensive warranty coverage.",
      tag: "Up to 3-Year Warranty"
    },
    {
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      bg: "bg-amber-50",
      title: "Painting and Repairs in One Place",
      description: "Save time by coordinating painting, carpentry, and surface preparation with one company. No coordinating separate drywallers or carpenters.",
      tag: "All-in-One Service"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      title: "Flexible Payment Options",
      description: "Explore payment options that make planning your home project easier. Transparent schedules with zero aggressive upfront deposits.",
      tag: "Low Monthly Financing"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#EC282D]" />
            The Home Painters Toronto Promise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            Painting Your Home Should Feel Exciting, Not Stressful.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            We understand that inviting contractors into your home is a big decision. That's why we focus on making the experience as straightforward, comfortable, and rewarding as possible.
          </p>
        </div>

        {/* 4 Core Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-[#F8F6F2] rounded-2xl p-6 sm:p-7 border border-stone-200 hover:border-red-200 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${b.bg} flex items-center justify-center`}>
                    {b.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-stone-500 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                    {b.tag}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#1E242B] mb-2 group-hover:text-[#EC282D] transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-xs font-bold text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6DBE45]" />
                <span>Standard on every job</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="bg-[#1E242B] rounded-2xl p-6 sm:p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h4 className="text-lg sm:text-xl font-bold mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Complete Clean-Home Guarantee
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              We treat your home like our own. Our crews vacuum with HEPA filters daily, place clean drop cloths on every floor, and do a complete cleanup so you can sleep in your home comfortably every evening during the project.
            </p>
          </div>
          <div className="flex md:justify-end">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/20">
              <div className="w-3 h-3 rounded-full bg-[#6DBE45] animate-ping" />
              <div className="text-xs">
                <span className="block font-bold text-white">Daily Tidy-Up Protocol</span>
                <span className="text-stone-300">Cleaned & packed away by 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
