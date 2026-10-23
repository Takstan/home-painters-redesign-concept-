import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, CheckCircle2, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { calculateEstimate, validateLeadForm, ServiceType, LeadFormData } from '../utils/estimate';
import { COMPANY_PHONE } from '../data/landingData';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, initialService = 'interior' }) => {
  const [serviceType, setServiceType] = useState<ServiceType>(initialService);
  const [rooms, setRooms] = useState<number>(3);
  const [step, setStep] = useState<'details' | 'contact' | 'confirmed'>('details');

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: initialService,
    postalCode: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const estimate = calculateEstimate({
    serviceType,
    rooms
  });

  const handleNextStep = () => {
    setFormData(prev => ({ ...prev, serviceType }));
    setStep('contact');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Leave as is without submitting
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 text-stone-900 max-h-[92vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-[#EC282D] flex items-center justify-center font-bold text-xs">
            HP
          </div>
          <span className="text-xs font-bold text-[#EC282D] uppercase tracking-wider">
            Home Painters Toronto • Free Estimate
          </span>
        </div>

        {step === 'details' && (
          <div>
            <h3 className="text-2xl font-black text-[#1E242B] mb-2">
              Select Your Project Scope
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Get an instant preliminary estimate and schedule your free on-site or virtual consultation.
            </p>

            {/* Service selector */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">Service Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'interior', label: 'Interior Painting' },
                    { id: 'exterior', label: 'Exterior House' },
                    { id: 'cabinets', label: 'Kitchen Cabinets' },
                    { id: 'condo', label: 'Condo / Loft' },
                    { id: 'commercial', label: 'Commercial' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setServiceType(item.id as ServiceType)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all text-left ${
                        serviceType === item.id
                          ? 'bg-[#EC282D] text-white border-[#EC282D] shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Slider */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                  <span>{serviceType === 'cabinets' ? 'Approx. Cabinet Doors:' : 'Number of Rooms / Spaces:'}</span>
                  <span className="text-[#EC282D] font-extrabold text-sm">
                    {serviceType === 'cabinets' ? `${rooms * 8} Doors` : `${rooms} Rooms`}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={8}
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>Small scope (1-2)</span>
                  <span>Whole home (5+)</span>
                </div>
              </div>

              {/* Calculation Preview */}
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-600">Estimated Project Bracket:</span>
                  <span className="text-xl font-black text-[#EC282D]">
                    ${estimate.minPrice.toLocaleString()} – ${estimate.maxPrice.toLocaleString()} CAD
                  </span>
                </div>
                <div className="text-xs text-stone-500 flex items-center justify-between">
                  <span>Estimated completion: <strong>{estimate.estimatedDays} Days</strong></span>
                  <span className="text-[#6DBE45] font-bold">✓ 3-Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-bold text-stone-600 flex items-center gap-1.5 cursor-default">
                <Phone className="w-3.5 h-3.5 text-[#EC282D]" />
                <span>Call {COMPANY_PHONE}</span>
              </div>

              <button
                type="button"
                onClick={handleNextStep}
                className="bg-[#EC282D] hover:bg-[#D62025] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 'contact' && (
          <div>
            <h3 className="text-2xl font-black text-[#1E242B] mb-1">
              Where Should We Send Your Estimate?
            </h3>
            <p className="text-xs text-stone-500 mb-5">
              We need a few details to calculate accurate paint quantities and travel logistics in Toronto/GTA.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Christine Clark"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="(416) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Toronto / GTA Postal Code *</label>
                <input
                  type="text"
                  placeholder="e.g. M4C 1B5 or Etobicoke"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                />
                {errors.postalCode && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.postalCode}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Project Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Preferred dates, color thoughts, drywall repairs needed..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#EC282D]"
                />
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-xs font-bold text-stone-500 hover:text-stone-800"
                >
                  ← Back to Scope
                </button>

                <button
                  type="submit"
                  className="bg-[#EC282D] hover:bg-[#D62025] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Submit Estimate Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'confirmed' && (
          <div className="py-6 text-center animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-green-100 text-[#6DBE45] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="inline-block bg-stone-100 text-stone-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Confirmation Code: {confirmationCode}
            </span>
            <h3 className="text-2xl font-black text-stone-900 mb-2">
              Estimate Request Received!
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              Our team will review your project details and contact you via phone or email at <strong>{formData.email}</strong> within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-[#1E242B] text-white px-6 py-2.5 rounded-xl font-bold text-sm"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
