import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_PHONE } from '../data/landingData';

interface MobileStickyBarProps {
  onOpenEstimateModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEstimateModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 lg:hidden shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 font-bold text-xs"
        >
          <Phone className="w-4 h-4 text-[#EC282D]" />
          <span>Call (416) 494-9095</span>
        </a>

        <button
          onClick={onOpenEstimateModal}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#EC282D] text-white font-extrabold text-xs shadow-md shadow-red-500/25 active:scale-95 transition-transform"
        >
          <span>Free Estimate</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
