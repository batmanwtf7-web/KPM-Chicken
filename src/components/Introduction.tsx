import React from 'react';
import { Store, ChefHat, Sparkles, Award, ArrowRight } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface IntroductionProps {
  onLearnMoreClick: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] border-t border-b border-neutral-800/80 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column: Brand Concept */}
          <div className="w-full lg:w-7/12 text-left space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.2em] uppercase text-amber-400">
              <span className="w-5 sm:w-6 h-[1.5px] bg-amber-400" />
              <span>ABOUT KPM</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-extrabold text-white tracking-tight leading-tight">
              MORE THAN FRIED CHICKEN.
            </h2>

            <p className="text-base sm:text-xl text-amber-200/90 font-medium">
              A compact food business concept built around the KPM Fried Chicken brand.
            </p>

            <p className="text-neutral-300 leading-relaxed text-xs sm:text-base">
              KPM Fried Chicken provides an agile, high-turnover food cart model. Instead of excessive restaurant rental overhead and prolonged construction, KPM empowers franchise partners with a turnkey, highly professional 8 × 4 food cart stall.
            </p>

            <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm">
              Equipped with commercial dual deep fryers, a dedicated momos steamer, proprietary secret starter masala, and hands-on first day manpower support. You own your stall, retain 100% of your earnings with zero royalty fees, and operate under a high-recognition fiery brand.
            </p>

            {/* 4 Quick Differentiation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Store className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">8 × 4 Compact Footprint</h3>
                    <p className="text-[11px] text-neutral-400">Roadside, marketplace & event mobility</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-neutral-800 hover:border-red-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Turnkey Equipment</h3>
                    <p className="text-[11px] text-neutral-400">18 official setup items included</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-neutral-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Unique Masala</h3>
                    <p className="text-[11px] text-neutral-400">Proprietary spice recipe & starter supply</p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-black/50 border border-neutral-800 hover:border-red-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Zero Royalty</h3>
                    <p className="text-[11px] text-neutral-400">Keep 100% of your business profits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <span>EXPLORE THE FRANCHISE OPPORTUNITY & CART</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={KPM_DATA.images.heroChicken}
                  alt="KPM Fried Chicken Signature Recipe"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Authentic Recipe
                  </span>
                  <div className="text-base sm:text-lg font-royal font-bold text-white">
                    Signature Crunch & Deep Marinade
                  </div>
                  <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 line-clamp-2">
                    Prepared with consistent texture using dedicated SS breading vessels and commercial gas fryers.
                  </p>
                </div>
              </div>

              <div className="mt-2 py-2 px-3 flex items-center justify-between text-[11px] text-neutral-400 bg-neutral-900/60 rounded-lg">
                <span className="font-semibold text-neutral-300">Turnkey Roadside Format</span>
                <span className="text-amber-400 font-bold uppercase tracking-wider">Fast Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
