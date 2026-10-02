import React from 'react';
import { Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface HeroProps {
  onExploreClick: () => void;
  onPackageClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onPackageClick,
}) => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 pb-12 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0b0d]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] bg-gradient-to-b from-red-600/15 via-amber-500/10 to-transparent blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Subtle Gold Kicker */}
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400">
          <span className="w-5 sm:w-8 h-[1px] bg-gradient-to-r from-transparent to-amber-400" />
          <span>OFFICIAL FRANCHISE OPPORTUNITY</span>
          <span className="w-5 sm:w-8 h-[1px] bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        {/* Hero Official Logo */}
        <div className="relative mb-5 sm:mb-6 group">
          <div className="absolute -inset-3 bg-gradient-to-r from-red-600/20 via-amber-500/20 to-red-600/20 rounded-full blur-xl opacity-75" />
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-amber-400 p-1 bg-black shadow-2xl">
            <img
              src={KPM_DATA.images.logo}
              alt="KPM Fried Chicken Official Logo"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-royal font-black tracking-tight text-3xl sm:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.15] text-balance">
          BUILD YOUR KPM FRIED CHICKEN{' '}
          <span className="text-red-500 block sm:inline">
            FRANCHISE
          </span>
        </h1>

        {/* Supporting Proposition */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-neutral-300 max-w-2xl text-balance font-normal leading-relaxed px-2">
          Bring the KPM Fried Chicken experience to your location with a premium{' '}
          <span className="text-amber-400 font-semibold">
            8 × 4 food cart franchise
          </span>
          . Turnkey equipment, secret startup masala, and zero royalties.
        </p>

        {/* Quick Highlights Strip */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-neutral-300 font-medium px-2">
          <span className="flex items-center gap-1 text-amber-400 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            No Royalty
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="flex items-center gap-1 text-neutral-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            18 Inclusions
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="flex items-center gap-1 text-neutral-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            1st Day Manpower
          </span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="flex items-center gap-1 text-neutral-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            Unique Masala
          </span>
        </div>

        {/* Action Buttons: EXPLORE FRANCHISE scrolls to #franchise */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-sm sm:max-w-none sm:w-auto px-4 sm:px-0">
          <button
            onClick={onExploreClick}
            className="min-h-[48px] w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>EXPLORE FRANCHISE</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={KPM_DATA.phoneUrl}
            className="min-h-[48px] w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/50 hover:border-amber-400 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL NOW: {KPM_DATA.phone}</span>
          </a>

          <button
            onClick={onPackageClick}
            className="min-h-[44px] w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            View 18 Inclusions ↓
          </button>
        </div>

        {/* Featured Cart Teaser Card */}
        <div className="mt-8 sm:mt-12 w-full max-w-3xl rounded-2xl overflow-hidden border border-amber-500/30 bg-[#121316] shadow-2xl group">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={KPM_DATA.images.cartHero}
              alt="KPM Fried Chicken 8x4 Premium Cart"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/30 to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2 text-left">
              <div>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-400 block">
                  PHYSICAL FRANCHISE UNIT
                </span>
                <div className="text-base sm:text-xl font-royal font-bold text-white">
                  The Official 8 × 4 Premium Cart
                </div>
              </div>

              <button
                onClick={onPackageClick}
                className="shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
