import React, { useState } from 'react';
import { Award, Heart, Check, Users, Shield, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { FOUNDED_YEAR } from '../data/landingData';

interface AboutUsSectionProps {
  onOpenEstimateModal: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onOpenEstimateModal }) => {
  const [showTeamModal, setShowTeamModal] = useState<boolean>(false);

  const teamMembers = [
    {
      name: 'Brian Young',
      role: 'Founder & President',
      experience: '35+ Years in Trade Painting',
      bio: 'Founded Home Painters Toronto in 1991 with one van, a commitment to immaculate prep work, and the belief that painters should be polite, punctual, and reliable.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Marcus Vance',
      role: 'Lead Project Operations Manager',
      experience: '16 Years Experience',
      bio: 'Coordinates on-site timelines, daily HEPA cleanliness standards, and leads pre-job walkthroughs across Toronto and York Region.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Elena Davies',
      role: 'Senior Architectural Color Consultant',
      experience: '12 Years Experience',
      bio: 'Helps homeowners navigate subtle undertones in natural Canadian lighting using Benjamin Moore and Sherwin-Williams palettes.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Founder Story & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Visual & Authentic Quote Card with Stock Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F6F2]">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=85"
                alt="Professional painting specialist at Home Painters Toronto"
                className="w-full h-[460px] sm:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  Founder & President
                </span>
                <h3 className="text-2xl font-black mb-1">Brian Young</h3>
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "When you invite someone into your home to paint, trust is everything. Our mission has always been simple: treat your home with even greater respect than our own."
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-amber-300">
                  <Award className="w-3.5 h-3.5" />
                  <span>Serving Toronto Homeowners Since {FOUNDED_YEAR}</span>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#EC282D] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <span className="text-2xl font-black">35+</span>
              <div className="text-xs font-bold leading-tight">
                Years of<br />Excellence
              </div>
            </div>
          </div>

          {/* About Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Heart className="w-3.5 h-3.5 text-[#EC282D]" />
              Our People & Philosophy
            </div>

            {/* Suggested Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight leading-tight mb-5">
              More Than Painting. We're Here to Bring Your Vision to Life.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-6">
              At Home Painters Toronto, every project is an opportunity to help homeowners fall in love with their spaces again. With decades of experience, our team combines craftsmanship, thoughtful preparation, and attention to detail to deliver results that feel personal.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
              We know that clients aren't just buying a finished coat of paint. They are choosing craftsmen who will be inside their personal sanctuaries, around their families, and handling their prized furnishings. That's why every member of our painting crew is fully vetted, background-checked, insured, and trained in our white-glove dustless process.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6F2] border border-stone-200/80">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-[#EC282D] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-stone-900">Meticulous Preparation</h4>
                  <p className="text-xs text-stone-600">80% of a lasting paint job is sanding, caulking, and priming.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6F2] border border-stone-200/80">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-[#6DBE45] shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-stone-900">Fully Licensed & Insured</h4>
                  <p className="text-xs text-stone-600">$5M liability and comprehensive WSIB coverage on all painters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6F2] border border-stone-200/80">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-stone-900">Color Design Assistance</h4>
                  <p className="text-xs text-stone-600">Complimentary color consultation to test samples on your walls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F6F2] border border-stone-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-stone-900">Dedicated Project Manager</h4>
                  <p className="text-xs text-stone-600">A single point of contact communicating every step each day.</p>
                </div>
              </div>
            </div>

            {/* CTA: Meet Our Team & Direct Consultation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setShowTeamModal(true)}
                className="bg-[#1E242B] hover:bg-stone-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-3 cursor-pointer group"
              >
                <div className="flex -space-x-2 overflow-hidden">
                  {teamMembers.map((m, i) => (
                    <img
                      key={i}
                      src={m.image}
                      alt={m.name}
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-stone-900 object-cover"
                    />
                  ))}
                </div>
                <span>Meet Our Team</span>
              </button>

              <button
                onClick={onOpenEstimateModal}
                className="bg-[#EC282D] hover:bg-[#D62025] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-red-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Team Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowTeamModal(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
            >
              ✕
            </button>
            <h3 className="text-2xl font-black text-stone-900 mb-1">
              The Leadership Team at Home Painters Toronto
            </h3>
            <p className="text-sm text-stone-600 mb-6">
              Experienced, background-checked trade professionals committed to your home's transformation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#EC282D]"
                  />
                  <h4 className="font-extrabold text-stone-900 text-base">{member.name}</h4>
                  <span className="text-xs font-bold text-[#EC282D] mb-1">{member.role}</span>
                  <span className="text-[11px] text-stone-500 mb-2">{member.experience}</span>
                  <p className="text-xs text-stone-600 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setShowTeamModal(false);
                  onOpenEstimateModal();
                }}
                className="bg-[#EC282D] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md"
              >
                Work With Our Team
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
