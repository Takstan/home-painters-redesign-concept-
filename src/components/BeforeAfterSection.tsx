import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, MapPin, Calendar, ArrowRight, Eye } from 'lucide-react';
import { FLAGSHIP_PROJECT, GALLERY_PROJECTS, TransformationItem } from '../data/landingData';

interface BeforeAfterSectionProps {
  onOpenEstimateModal: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenEstimateModal }) => {
  // Slider position (0 - 100 percentage)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'exterior' | 'cabinets'>('all');
  const [selectedGalleryModal, setSelectedGalleryModal] = useState<TransformationItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="transformations" className="py-16 sm:py-24 bg-[#F8F6F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#EC282D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Proof of Quality
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E242B] tracking-tight mb-4">
            Real Homes. Remarkable Transformations.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            A fresh coat of paint can completely change how a home looks and feels. Explore the difference our painting professionals have made for Toronto homeowners.
          </p>
        </div>

        {/* Flagship Interactive Before & After Slider */}
        <div className="bg-white rounded-3xl p-4 sm:p-7 shadow-xl border border-stone-200/90 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EC282D] bg-red-50 px-2.5 py-1 rounded-full mb-1">
                <MapPin className="w-3 h-3" />
                <span>{FLAGSHIP_PROJECT.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E242B]">
                {FLAGSHIP_PROJECT.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
                {FLAGSHIP_PROJECT.description}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-xl text-xs font-bold text-stone-700">
              <MoveHorizontal className="w-4 h-4 text-[#EC282D]" />
              <span>Drag slider to see Before & After</span>
            </div>
          </div>

          {/* Interactive Split Viewport */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-80 sm:h-[460px] lg:h-[520px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-stone-200 shadow-inner"
          >
            {/* After Image (Full width background) */}
            <img
              src={FLAGSHIP_PROJECT.afterImage}
              alt="After painting finished Toronto home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* After Tag */}
            <div className="absolute top-4 right-4 bg-[#6DBE45] text-white text-xs font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider z-10">
              AFTER (Finished)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={FLAGSHIP_PROJECT.beforeImage}
                alt="Before painting Toronto home"
                className="absolute inset-0 h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>

            {/* Before Tag */}
            <div className="absolute top-4 left-4 bg-[#1E242B]/85 text-white text-xs font-extrabold px-3 py-1 rounded-md shadow-md uppercase tracking-wider z-10">
              BEFORE
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-[#EC282D] text-white shadow-xl flex items-center justify-center border-2 border-white pointer-events-auto cursor-ew-resize">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Fallback Range Slider for Accessibility */}
          <div className="mt-4 px-2">
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after split slider control"
              className="w-full h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Category Filters for Gallery */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E242B]">
              Recent Toronto Neighborhood Projects
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Explore authentic results from all across the Greater Toronto Area.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('interior')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'interior'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setActiveCategory('exterior')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'exterior'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Exterior
            </button>
            <button
              onClick={() => setActiveCategory('cabinets')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'cabinets'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cabinets
            </button>
          </div>
        </div>

        {/* Gallery of 4 Genuine Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Project Before/After Split Preview */}
              <div className="relative h-48 overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative overflow-hidden border-r border-white/50">
                    <img
                      src={project.beforeImage}
                      alt={`Before: ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1.5 left-1.5 bg-black/70 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      BEFORE
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt={`After: ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1.5 right-1.5 bg-[#6DBE45] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      AFTER
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EC282D] mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#1E242B] mb-2 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{project.duration}</span>
                  </span>
                  <button
                    onClick={() => setSelectedGalleryModal(project)}
                    className="text-[#EC282D] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Detail</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: View More Transformations */}
        <div className="text-center">
          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center gap-2 bg-[#EC282D] hover:bg-[#D62025] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-md shadow-red-500/20 transition-all cursor-pointer group"
          >
            <span>View More Transformations & Get Estimate</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Detail Modal for Selected Project */}
      {selectedGalleryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedGalleryModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
            >
              ✕
            </button>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#EC282D] bg-red-50 px-2 py-0.5 rounded-full mb-2">
              <MapPin className="w-3 h-3" />
              <span>{selectedGalleryModal.location}</span>
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 mb-2">
              {selectedGalleryModal.title}
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              {selectedGalleryModal.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="relative rounded-xl overflow-hidden">
                <img src={selectedGalleryModal.beforeImage} alt="Before" className="w-full h-52 object-cover" />
                <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">Before Prep</span>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img src={selectedGalleryModal.afterImage} alt="After" className="w-full h-52 object-cover" />
                <span className="absolute bottom-2 left-2 bg-[#6DBE45] text-white text-xs font-bold px-2 py-1 rounded">Finished Result</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <span className="text-xs text-stone-500">Project timeline: <strong>{selectedGalleryModal.duration}</strong></span>
              <button
                onClick={() => {
                  setSelectedGalleryModal(null);
                  onOpenEstimateModal();
                }}
                className="bg-[#EC282D] text-white px-5 py-2 rounded-lg text-sm font-bold"
              >
                Get Similar Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
