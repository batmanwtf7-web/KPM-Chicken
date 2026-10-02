import React, { useState } from 'react';
import { Flame, Star, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface MenuSectionProps {
  onOpenImageModal: (imageSrc: string, title: string) => void;
  onEnquireClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenImageModal, onEnquireClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories = ['All', ...KPM_DATA.menuCategories];

  const filteredMenuItems = activeCategory === 'All'
    ? KPM_DATA.sampleMenuItems
    : KPM_DATA.sampleMenuItems.filter(item => item.category === activeCategory);

  // If not expanded, display first 4 items; if expanded, show all filtered items
  const displayedItems = isExpanded ? filteredMenuItems : filteredMenuItems.slice(0, 4);

  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>CULINARY IDENTITY</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            FOOD MENU
          </h2>

          <p className="mt-2 sm:mt-3 text-neutral-300 text-xs sm:text-base max-w-2xl mx-auto">
            The KPM Fried Chicken menu is optimized for high speed and high margins inside the 8 × 4 cart using the included dual fryers, momos steamer, and toaster.
          </p>
        </div>

        {/* Flagship Product Feature */}
        <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-neutral-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div
              className="lg:col-span-7 relative h-60 sm:h-80 w-full overflow-hidden cursor-pointer group"
              onClick={() => onOpenImageModal(KPM_DATA.images.heroChicken, "KPM Signature Fried Chicken Platter")}
            >
              <img
                src={KPM_DATA.images.heroChicken}
                alt="Signature KPM Fried Chicken Drumstick Platter"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-300" />
                <span>Proprietary Spice Blend</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-8 space-y-3 text-left">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400">
                Flagship Offering
              </span>
              <h3 className="text-xl sm:text-2xl font-royal font-bold text-white leading-tight">
                Authentic Secret Masala Crispy Chicken
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Marinated in KPM's authentic proprietary spice recipe and coated in our signature breading vessel. Every batch delivers unbeatable crunch that drives repeat street food patrons.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-neutral-300">
                <span className="flex items-center gap-1 text-amber-400 font-semibold text-[11px]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  3 kg Starter Masala Included
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-[11px] text-neutral-400">Fast 8-10 min Fry Cycle</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
              }}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 hover:bg-neutral-900 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium">
                    {item.category}
                  </span>
                  {item.isSignature && (
                    <span className="text-[10px] font-bold text-red-500 flex items-center gap-0.5">
                      <Flame className="w-3 h-3" /> Signature
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-royal font-bold text-white leading-snug">
                  {item.name}
                </h4>

                <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                <span>{item.priceNote}</span>
                <span className="font-semibold text-amber-400 flex items-center">
                  Stall Ready <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* In-Page Expand / Collapse Button (No page reload) */}
        {filteredMenuItems.length > 4 && (
          <div className="text-center pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="min-h-[42px] px-6 py-2 text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 border border-amber-500/50 hover:border-amber-400 hover:bg-neutral-800 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
            >
              {isExpanded ? (
                <>
                  <span>COLLAPSE MENU</span>
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                </>
              ) : (
                <>
                  <span>VIEW FULL MENU ({filteredMenuItems.length} ITEMS)</span>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
