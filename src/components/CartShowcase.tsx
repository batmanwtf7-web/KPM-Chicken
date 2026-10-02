import React, { useState } from 'react';
import { Maximize2, Check, ArrowRight, Eye, Zap, ChevronRight } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface CartShowcaseProps {
  onViewPackageClick: () => void;
  onEnquireClick: () => void;
  onOpenImageModal: (imageSrc: string, title: string) => void;
}

export const CartShowcase: React.FC<CartShowcaseProps> = ({
  onViewPackageClick,
  onEnquireClick,
  onOpenImageModal,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'highlights'>('overview');

  return (
    <section id="cart" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] border-t border-b border-neutral-800 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>PHYSICAL TURNOVER CONCEPT</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            8 × 4 PREMIUM CART
          </h2>
          <p className="mt-3 text-neutral-300 text-xs sm:text-base max-w-2xl mx-auto">
            A high-impact, road-ready commercial mobile unit engineered with distinctive yellow & black branding, full canopy illumination, and heavy-duty steel structure.
          </p>
        </div>

        {/* Mobile & Desktop Layout: Image first on mobile, then specs, then CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Main Visual Display (Image First on Mobile) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-neutral-950 p-1.5 sm:p-2 shadow-2xl group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden">
                <img
                  src={KPM_DATA.images.cartHero}
                  alt="KPM Fried Chicken 8x4 Premium Food Cart"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Interactive Zoom Overlay */}
                <button
                  onClick={() => onOpenImageModal(KPM_DATA.images.cartHero, "8 × 4 Premium Cart — Official Model")}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2.5 rounded-xl bg-black/75 backdrop-blur-md text-amber-400 hover:text-white border border-amber-500/40 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  title="Enlarge View"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span className="hidden xs:inline">Fullscreen</span>
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-2 text-left">
                  <div>
                    <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-400 uppercase bg-black/70 backdrop-blur-md px-2 py-0.5 rounded">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Official Model</span>
                    </div>
                    <div className="text-base sm:text-2xl font-royal font-bold text-white mt-0.5">
                      8 × 4 Ft Heavy-Duty Frame
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenImageModal(KPM_DATA.images.nightAmbiance, "Night Ambiance — Roadside High-Footfall Stall")}
                    className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-neutral-900/90 border border-neutral-700 text-[11px] sm:text-xs font-semibold text-neutral-200 hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Night View</span>
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => onOpenImageModal(KPM_DATA.images.cartHero, "Cart Front View & Signage")}
                  className="border border-amber-500/50 rounded-lg overflow-hidden relative cursor-pointer group/thumb"
                >
                  <img src={KPM_DATA.images.cartHero} alt="Cart Front" className="h-14 sm:h-16 w-full object-cover group-hover/thumb:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[10px] font-bold text-amber-300">
                    Day View
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenImageModal(KPM_DATA.images.nightAmbiance, "Evening Stall Presence with Illuminated Canopy")}
                  className="border border-neutral-800 hover:border-amber-500/40 rounded-lg overflow-hidden relative cursor-pointer group/thumb"
                >
                  <img src={KPM_DATA.images.nightAmbiance} alt="Cart Night" className="h-14 sm:h-16 w-full object-cover group-hover/thumb:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[10px] font-bold text-neutral-200">
                    Night View
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenImageModal(KPM_DATA.images.equipmentSetup, "Kitchen Setup & Fryers Arranged for Operation")}
                  className="border border-neutral-800 hover:border-amber-500/40 rounded-lg overflow-hidden relative cursor-pointer group/thumb"
                >
                  <img src={KPM_DATA.images.equipmentSetup} alt="Equipment" className="h-14 sm:h-16 w-full object-cover group-hover/thumb:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-[10px] font-bold text-neutral-200">
                    Kitchen Bay
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right / Below Column: Clean Content & Specifications */}
          <div className="lg:col-span-5 text-left space-y-4 sm:space-y-6">
            {/* Segmented Control Tabs */}
            <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-amber-400 text-black shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex-1 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-amber-400 text-black shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Specs
              </button>
              <button
                onClick={() => setActiveTab('highlights')}
                className={`flex-1 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === 'highlights'
                    ? 'bg-amber-400 text-black shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Advantages
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-200">
                <h3 className="text-lg sm:text-xl font-royal font-bold text-white">
                  Engineered For Street-Food Commercial Output
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  The KPM 8 × 4 cart is custom-built to maximize workflow in a compact footprint. Designed specifically for Indian street food and quick-service commercial hubs, it combines high-capacity fryers with complete prep stations.
                </p>

                <div className="space-y-2 pt-1">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/50 border border-neutral-800">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">
                      <strong className="text-white">Dual Fryer Integration:</strong> Accommodates 16L and 8L gas fryers for rapid batches.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/50 border border-neutral-800">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">
                      <strong className="text-white">Signage Pack:</strong> Official logo board, LED canopy strip, and roadside lollipop board.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/50 border border-neutral-800">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300">
                      <strong className="text-white">Stainless Steel Counters:</strong> Food-grade SS surfaces engineered for hygienic, high-speed service.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Specs */}
            {activeTab === 'specs' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <h3 className="text-base sm:text-lg font-royal font-bold text-white mb-2">
                  Technical Specifications
                </h3>
                <div className="divide-y divide-neutral-800 rounded-xl bg-black/50 border border-neutral-800 p-2.5 sm:p-3">
                  {KPM_DATA.cartSpecs.map((spec, idx) => (
                    <div key={idx} className="py-2 flex flex-col xs:flex-row xs:items-center justify-between text-xs gap-1">
                      <span className="text-neutral-400 font-medium">{spec.label}</span>
                      <span className="text-white font-semibold xs:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Advantages */}
            {activeTab === 'highlights' && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <h3 className="text-base sm:text-lg font-royal font-bold text-white">
                  Why The 8 × 4 Format Wins
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  <div className="p-3 rounded-xl bg-black/50 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5">
                      Fast Deployment
                    </div>
                    <p className="text-xs text-neutral-300">
                      Can be stationed outside cinemas, main roads, transit hubs, and markets without weeks of structural renovation.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-0.5">
                      Low Operating Overhead
                    </div>
                    <p className="text-xs text-neutral-300">
                      Eliminates giant commercial space rent and electricity bills. Commercial gas fryers provide continuous frying efficiency.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Actions: CTA third */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <button
                onClick={onViewPackageClick}
                className="min-h-[46px] w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW PACKAGE (18 INCLUSIONS)</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onEnquireClick}
                className="min-h-[46px] w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-neutral-900 border border-amber-500/50 hover:border-amber-400 rounded-xl transition-all cursor-pointer flex items-center justify-center"
              >
                Enquire For Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
