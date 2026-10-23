import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustCredibility } from './components/TrustCredibility';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceType } from './utils/estimate';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceType>('interior');

  const handleOpenEstimateModal = (service?: ServiceType) => {
    if (service) {
      setSelectedService(service);
    }
    setIsEstimateModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceId: string) => {
    let type: ServiceType = 'interior';
    if (serviceId === 'exterior') type = 'exterior';
    else if (serviceId === 'cabinets') type = 'cabinets';
    else if (serviceId === 'carpentry') type = 'commercial';
    handleOpenEstimateModal(type);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-red-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenEstimateModal={() => handleOpenEstimateModal()} />

      <main id="main-content">
        {/* 1. Hero Section (60/40 Split with photo and quote generator) */}
        <Hero
          onOpenEstimateModal={() => handleOpenEstimateModal()}
          onSelectServiceAndQuote={(serv) => handleOpenEstimateModal(serv)}
        />

        {/* 2. Trust and Credibility Section */}
        <TrustCredibility />

        {/* 3. Services Section (4 Image-Led Cards) */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 4. Benefits Section (Stress-free, fast estimates, warranty, multi-trade) */}
        <BenefitsSection />

        {/* 5. Before and After Section (Interactive Slider & 4 Projects) */}
        <BeforeAfterSection onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* 6. How It Works Section (4 Clear Steps) */}
        <HowItWorksSection onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* 7. Testimonials Section (1,200+ Reviews, verified Toronto quotes) */}
        <TestimonialsSection onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* 8. About Us Section (Brian Young spotlight & philosophy) */}
        <AboutUsSection onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* 9. FAQ Section (Accordion) */}
        <FaqSection />

        {/* 10. Final CTA Section (Free Estimate Form) */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Interactive Free Estimate Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
