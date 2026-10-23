import React, { useState } from 'react';
import { Phone, Shield, Award, Menu, X, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_PHONE } from '../data/landingData';

interface NavbarProps {
  onOpenEstimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Credibility Announcement Bar */}
      <div className="bg-[#1E242B] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              HomeStars "Best of Awards" Winner (2015–2026)
            </span>
            <span className="hidden md:inline-block text-stone-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6DBE45]" />
              20,000+ GTA Homes Painted Since 1991
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="hidden sm:flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#6DBE45]" />
              Same-Day Estimates Available
            </div>
            <a 
              href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-red-400 transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#EC282D]" />
              {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-lg bg-[#EC282D] flex items-center justify-center text-white shadow-md shadow-red-500/20">
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-base font-extrabold tracking-tight">HP</span>
                <span className="text-[9px] font-bold tracking-widest text-amber-200 uppercase">TO</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-[#1E242B] tracking-tight leading-tight">
                HOME PAINTERS <span className="text-[#EC282D]">TORONTO</span>
              </span>
              <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase">
                Premier Residential Painting Since 1991
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
            <button 
              onClick={() => scrollTo('services')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('benefits')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollTo('transformations')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              Transformations
            </button>
            <button 
              onClick={() => scrollTo('how-it-works')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              About Brian
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="hover:text-[#EC282D] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenEstimateModal}
              className="bg-[#EC282D] hover:bg-[#D62025] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md shadow-red-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Get Free Estimate</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEstimateModal}
              className="sm:hidden bg-[#EC282D] text-white px-3 py-1.5 rounded-md font-bold text-xs"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-semibold text-stone-700">
            <button 
              onClick={() => scrollTo('services')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollTo('benefits')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollTo('transformations')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              Before & After Gallery
            </button>
            <button 
              onClick={() => scrollTo('how-it-works')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              Our 4-Step Process
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              1,200+ Client Reviews
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              About Brian Young
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="text-left py-2 px-3 rounded hover:bg-stone-50"
            >
              Frequently Asked Questions
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-stone-300 font-bold text-stone-800"
            >
              <Phone className="w-4 h-4 text-[#EC282D]" />
              Call Now: {COMPANY_PHONE}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimateModal();
              }}
              className="w-full bg-[#EC282D] text-white py-3 rounded-lg font-bold text-center shadow-md"
            >
              Get My Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
