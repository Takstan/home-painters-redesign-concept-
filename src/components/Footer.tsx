import React from 'react';
import { Phone, Mail, MapPin, Award, Shield, Heart } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL, SERVICE_AREAS, FOUNDED_YEAR } from '../data/landingData';

interface FooterProps {
  onOpenEstimateModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal }) => {
  return (
    <footer className="bg-[#12161B] text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EC282D] flex items-center justify-center text-white shadow-md">
                <span className="text-base font-extrabold tracking-tight">HP</span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight leading-tight block">
                  HOME PAINTERS <span className="text-[#EC282D]">TORONTO</span>
                </span>
                <span className="text-[10px] text-stone-400 font-medium tracking-wider uppercase">
                  Est. {FOUNDED_YEAR} • Toronto & GTA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Toronto's premier interior and exterior house painters. Founded by Brian Young in 1991, delivering over 20,000 residential transformations with zero-VOC paints, dustless preparation, and written warranties.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-stone-300">
              <a href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4 text-[#EC282D]" />
                <span className="font-bold text-white text-sm">{COMPANY_PHONE}</span>
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4 text-[#EC282D]" />
                <span>{COMPANY_EMAIL}</span>
              </a>
              <div className="flex items-center gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-[#EC282D]" />
                <span>Greater Toronto Area, Ontario, Canada</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Painting Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Interior House Painting</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Exterior Home Painting & Siding</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Kitchen Cabinet Spray Refinishing</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Condo & High-Rise Painting</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Popcorn Ceiling Removal</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Brick & Masonry Staining</button></li>
              <li><button onClick={onOpenEstimateModal} className="hover:text-white transition-colors cursor-pointer text-left">Drywall Repair & Finish Carpentry</button></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Serving All Toronto & GTA Neighborhoods
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {SERVICE_AREAS.map((area, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-stone-800/80 text-stone-300 border border-stone-700/60"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="pt-3">
              <span className="text-xs text-stone-400 block mb-1">
                Hours of Operation:
              </span>
              <p className="text-xs text-stone-300 font-medium">
                Monday – Saturday: 8:00 AM – 7:00 PM <br />
                Sunday: In-Home Consultations by Appointment
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Home Painters Toronto. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Fully Licensed & WSIB Insured</span>
            <span>$5M Commercial Liability</span>
            <span>EPA Lead-Safe Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
