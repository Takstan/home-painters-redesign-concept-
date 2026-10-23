import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { FAQS, COMPANY_PHONE, FaqItem } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Estimates', 'Paint & Process', 'Warranty & Insurance', 'Payment'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8F6F2] border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#EC282D]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            Everything You Need to Know Before We Start.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Have questions about how we paint, our warranties, or timelines? Here are clear, straightforward answers.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1E242B] text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-base sm:text-lg hover:text-[#EC282D] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-stone-100 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-red-100 text-[#EC282D]' : 'text-stone-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-stone-400">
                      <span className="bg-stone-100 px-2.5 py-0.5 rounded-md text-stone-600">Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-extrabold text-stone-900 mb-1">
              Have a custom or heritage question not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-stone-500">
              Our Toronto team is happy to discuss your specific property, paint requirements, or timelines.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#EC282D]" />
              <span>Call (416) 494-9095</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
