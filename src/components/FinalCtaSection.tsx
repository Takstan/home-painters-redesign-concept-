import React, { useState } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Sparkles, Send } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../data/landingData';
import { validateLeadForm, LeadFormData, ServiceType } from '../utils/estimate';

export const FinalCtaSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: 'interior',
    postalCode: '',
    propertyType: 'Detached Home',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Leave as is without submitting
  };

  return (
    <section id="estimate-form" className="py-16 sm:py-24 bg-gradient-to-b from-stone-900 via-[#1E242B] to-[#15191F] text-white relative overflow-hidden">
      {/* Subtle red & gold background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Urgency, Value Proposition, Guarantee Callouts */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch Today
            </div>

            {/* Suggested Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 text-white">
              Your Dream Home Starts With a Fresh Coat of Paint.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
              Whether it's a single room or a complete home transformation, our team is ready to help bring your vision to life.
            </p>

            {/* Trust points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EC282D]/20 text-[#EC282D] flex items-center justify-center shrink-0 border border-red-500/30">
                  <CheckCircle2 className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-sm sm:text-base text-stone-200">
                  <strong>Guaranteed 24-Hour Estimate:</strong> Transparent, itemized pricing without hidden fees.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 text-[#6DBE45] flex items-center justify-center shrink-0 border border-green-500/30">
                  <ShieldCheck className="w-5 h-5 text-[#6DBE45]" />
                </div>
                <span className="text-sm sm:text-base text-stone-200">
                  <strong>3-Year Written Warranty:</strong> Full coverage on peeling, blistering, and prep.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-sm sm:text-base text-stone-200">
                  <strong>Clean Workspace Guarantee:</strong> Clean drop cloths, HEPA vacuums, zero mess left behind.
                </span>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-400 block font-medium">Prefer to talk directly right now?</span>
                <div className="text-lg sm:text-xl font-black text-white flex items-center gap-2 mt-0.5 cursor-default">
                  <Phone className="w-5 h-5 text-[#EC282D]" />
                  <span>{COMPANY_PHONE}</span>
                </div>
              </div>
              <div className="text-right text-xs text-stone-400">
                <span className="block font-bold text-stone-300">Mon - Sat: 8am - 7pm</span>
                <span>Sundays by Appointment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Free Estimate Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-9 text-stone-900 shadow-2xl border border-stone-200">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-[11px] font-extrabold text-[#EC282D] uppercase tracking-wider block mb-1">
                      Step 1 of 2 • Fast & Free
                    </span>
                    <h3 className="text-2xl font-black text-[#1E242B]">
                      Get Your Free Painting Estimate
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      No spam, no aggressive sales calls. Just honest advice and exact pricing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John MacDonald"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                            : 'border-stone-300 focus:ring-red-100 focus:border-[#EC282D]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 font-semibold">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Contact Row: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(416) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                              : 'border-stone-300 focus:ring-red-100 focus:border-[#EC282D]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 font-semibold">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                              : 'border-stone-300 focus:ring-red-100 focus:border-[#EC282D]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 font-semibold">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Service & Postal Code */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Service Needed
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as ServiceType })}
                          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D] bg-white cursor-pointer"
                        >
                          <option value="interior">Interior House Painting</option>
                          <option value="exterior">Exterior House Painting</option>
                          <option value="cabinets">Kitchen Cabinet Painting</option>
                          <option value="condo">Condo / Apartment Painting</option>
                          <option value="commercial">Commercial / Carpentry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1">
                          Toronto / GTA Postal Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. M4E 2V1 or North York"
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.postalCode
                              ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                              : 'border-stone-300 focus:ring-red-100 focus:border-[#EC282D]'
                          }`}
                        />
                        {errors.postalCode && (
                          <p className="text-xs text-red-600 mt-1 font-semibold">{errors.postalCode}</p>
                        )}
                      </div>
                    </div>

                    {/* Optional Notes */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Brief Project Details <span className="text-stone-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g., 3 bedrooms + hallway, hoping to start mid-next month..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#EC282D] hover:bg-[#D62025] disabled:bg-red-400 text-white py-4 rounded-xl font-black text-base shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Estimate...</span>
                      ) : (
                        <>
                          <span>Get My Free Painting Estimate</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-center text-[11px] text-stone-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#6DBE45]" />
                      <span>Privacy guaranteed. Your information is never shared or sold.</span>
                    </div>

                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-[#6DBE45] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <span className="inline-block bg-stone-100 text-stone-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Estimate Request #{confirmationCode}
                  </span>
                  <h3 className="text-2xl font-black text-[#1E242B] mb-2">
                    Thank You, {formData.fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-sm text-stone-600 mb-6 max-w-md mx-auto">
                    We have received your details for <strong>{formData.postalCode}</strong>. Our Toronto estimating team will review your project and contact you at <strong>{formData.phone}</strong> within 24 business hours.
                  </p>
                  
                  <div className="bg-[#F8F6F2] p-4 rounded-xl text-xs text-stone-600 text-left max-w-md mx-auto mb-6 space-y-1.5 border border-stone-200">
                    <div className="font-bold text-stone-900">What happens next?</div>
                    <div>1. We calculate your paint specifications & schedule options.</div>
                    <div>2. You receive an itemized, transparent PDF quotation.</div>
                    <div>3. You decide on your own timeline — zero pressure.</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceType: 'interior',
                        postalCode: '',
                        notes: ''
                      });
                    }}
                    className="text-xs font-bold text-[#EC282D] hover:underline"
                  >
                    Submit another project request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
