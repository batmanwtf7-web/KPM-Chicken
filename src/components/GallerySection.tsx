import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface GallerySectionProps {
  onOpenImageModal: (imageSrc: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenImageModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Cart', 'Food', 'Equipment', 'Stall'];

  const filteredItems = activeFilter === 'All'
    ? KPM_DATA.galleryItems
    : KPM_DATA.galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>VISUAL PORTFOLIO</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            BRAND & CART GALLERY
          </h2>

          <p className="mt-2 sm:mt-3 text-neutral-300 text-xs sm:text-base max-w-2xl mx-auto">
            High-definition views of the 8 × 4 premium cart, kitchen equipment arrangement, signature fried chicken, and roadside stall presentation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Clean 2-column on mobile/tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImageModal(item.image, item.title)}
              className="group relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 bg-neutral-900/60 aspect-[16/10] cursor-pointer shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-neutral-300 group-hover:text-amber-400">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <h3 className="text-base sm:text-lg font-royal font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-300 mt-0.5 line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
