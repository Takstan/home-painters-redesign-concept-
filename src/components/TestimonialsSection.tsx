import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, ReviewItem } from '../data/landingData';

interface TestimonialsSectionProps {
  onOpenEstimateModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenEstimateModal }) => {
  const [selectedSource, setSelectedSource] = useState<'all' | 'HomeStars' | 'Google' | 'Houzz'>('all');
  const [expandedReviews, setExpandedReviews] = useState<boolean>(false);

  const filteredReviews = selectedSource === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(r => r.source === selectedSource);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F8F6F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            1,200+ Verified 5-Star Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            Loved by Homeowners Across Toronto.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Discover why homeowners continue to choose Home Painters Toronto for their painting and home improvement projects.
          </p>
        </div>

        {/* Aggregate Ratings Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
              4.9<span className="text-stone-400 text-2xl font-normal">/5</span>
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-stone-600 font-semibold">
                Average across 1,200+ independent Toronto reviews
              </span>
            </div>
          </div>

          {/* Platform breakdown */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSelectedSource('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedSource === 'all'
                  ? 'bg-[#1E242B] text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setSelectedSource('HomeStars')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSource === 'HomeStars'
                  ? 'bg-[#EC282D] text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <span>HomeStars</span>
              <span className="text-[10px] opacity-80">(9.9/10)</span>
            </button>
            <button
              onClick={() => setSelectedSource('Google')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSource === 'Google'
                  ? 'bg-blue-600 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <span>Google</span>
              <span className="text-[10px] opacity-80">(4.9★)</span>
            </button>
            <button
              onClick={() => setSelectedSource('Houzz')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedSource === 'Houzz'
                  ? 'bg-[#6DBE45] text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              <span>Houzz</span>
              <span className="text-[10px] opacity-80">(5.0★)</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Author, rating & source */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-stone-200 shadow-xs"
                    />
                    <div>
                      <h4 className="text-base font-extrabold text-[#1E242B] flex items-center gap-1.5">
                        {review.name}
                        {review.verified && (
                          <span title="Verified Toronto Homeowner">
                            <CheckCircle className="w-4 h-4 text-[#6DBE45]" />
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                        <MapPin className="w-3 h-3 text-[#EC282D]" />
                        <span>{review.neighborhood}</span>
                      </div>
                    </div>
                  </div>

                  {/* Review Source Badge */}
                  <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full ${
                    review.source === 'HomeStars'
                      ? 'bg-red-50 text-[#EC282D] border border-red-200'
                      : review.source === 'Google'
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'bg-green-50 text-[#6DBE45] border border-green-200'
                  }`}>
                    {review.source}
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-stone-800">• {review.service}</span>
                </div>

                {/* Comment quote */}
                <p className="text-sm text-stone-600 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Footer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span>Verified project • {review.date}</span>
                <span className="text-stone-500 font-medium">Home Painters Toronto Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Read More Customer Reviews */}
        <div className="text-center">
          <button
            onClick={() => {
              setExpandedReviews(!expandedReviews);
            }}
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 border-2 border-stone-300 text-stone-800 px-6 py-3 rounded-xl font-bold text-sm shadow-xs transition-colors cursor-pointer mr-3"
          >
            <span>{expandedReviews ? 'Show Fewer Reviews' : 'Read More Customer Reviews (1,200+)'}</span>
          </button>

          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center gap-2 bg-[#EC282D] hover:bg-[#D62025] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            <span>Experience The Difference</span>
          </button>
        </div>

        {/* Extra reviews expanded drawer */}
        {expandedReviews && (
          <div className="mt-8 p-6 bg-white rounded-2xl border border-stone-200 text-left">
            <h4 className="font-extrabold text-stone-900 text-base mb-4">Additional Verified Toronto Homeowner Reviews:</h4>
            <div className="space-y-4 text-xs sm:text-sm text-stone-600">
              <div className="p-3 bg-stone-50 rounded-xl">
                <span className="font-bold text-stone-900 block">Patricia L. — Lawrence Park (Whole Home Interior)</span>
                "Home Painters Toronto lived up to every promise. The project manager sent daily photo updates, they wrapped all our chandeliers, and finished right on time."
              </div>
              <div className="p-3 bg-stone-50 rounded-xl">
                <span className="font-bold text-stone-900 block">George S. — Mississauga (Exterior Staining & Doors)</span>
                "Our front door and cedar shake siding were weathered badly. Now they look pristine. Great color advice and zero drips on our landscaping."
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
