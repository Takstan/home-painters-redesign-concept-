import React from 'react';
import { ClipboardList, FileCheck2, Paintbrush, Smile, ArrowRight, ShieldCheck } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenEstimateModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenEstimateModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us About Your Project',
      description: "Share what you'd like to paint, your location, and the results you're hoping to achieve.",
      icon: <ClipboardList className="w-6 h-6 text-[#EC282D]" />,
      actionText: 'Quick 2-minute form or phone call'
    },
    {
      step: '02',
      title: 'Get Your Free Estimate',
      description: 'Our team reviews your requirements and outlines the recommended work, pricing, and schedule.',
      icon: <FileCheck2 className="w-6 h-6 text-[#EC282D]" />,
      actionText: 'Delivered in 24 hrs with fixed pricing'
    },
    {
      step: '03',
      title: 'Watch Your Home Transform',
      description: 'Our painters prepare the surfaces, protect the work area, and carefully complete the painting.',
      icon: <Paintbrush className="w-6 h-6 text-[#EC282D]" />,
      actionText: 'Daily HEPA clean & expert coats'
    },
    {
      step: '04',
      title: 'Enjoy Your Beautiful Space',
      description: 'Review the finished project with our team and enjoy your refreshed home.',
      icon: <Smile className="w-6 h-6 text-[#6DBE45]" />,
      actionText: 'Walkthrough + 3-year warranty'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EC282D]" />
            Clear, Stress-Free Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            A Beautiful Home in Four Simple Steps.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From your first consultation to the final walkthrough, we make every step clear and straightforward.
          </p>
        </div>

        {/* Steps: Horizontal on desktop with connecting tracker, vertical on mobile */}
        <div className="relative mb-14">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-stone-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F6F2] lg:bg-transparent rounded-2xl p-6 lg:p-2 border border-stone-200 lg:border-none flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-stone-200 group-hover:border-[#EC282D] shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#1E242B] text-white text-[11px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {item.step}
                  </span>
                </div>

                {/* Step content */}
                <h3 className="text-lg font-extrabold text-[#1E242B] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Action / Detail Pill */}
                <div className="mt-auto inline-flex items-center gap-1 text-[11px] font-bold text-[#EC282D] bg-red-50/80 px-2.5 py-1 rounded-full border border-red-100">
                  <span>{item.actionText}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout & Action */}
        <div className="bg-[#F8F6F2] rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-extrabold text-stone-900 mb-1">
              Ready to take step 1?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              It takes less than 60 seconds to request your free, itemized estimate with zero pressure.
            </p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="bg-[#EC282D] hover:bg-[#D62025] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start Step 1: Request Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
