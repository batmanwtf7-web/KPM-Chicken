import React from 'react';
import { 
  BadgePercent, 
  LifeBuoy, 
  Flame, 
  Users2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Store,
  Sparkles
} from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface FranchiseSectionProps {
  onViewPackageClick: () => void;
  onEnquireClick: () => void;
}

export const FranchiseSection: React.FC<FranchiseSectionProps> = ({
  onViewPackageClick,
  onEnquireClick,
}) => {
  return (
    <section id="franchise" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>FRANCHISE OPPORTUNITY</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-royal font-black text-white tracking-tight leading-tight">
            BUILD YOUR KPM FRIED CHICKEN{' '}
            <span className="text-red-500 block sm:inline">FRANCHISE</span>
          </h2>
          <div className="text-xl sm:text-2xl font-royal font-extrabold text-amber-400 mt-2">
            8 × 4 PREMIUM CART
          </div>

          <p className="mt-4 text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A complete turnkey food cart business model. You operate independently, retain 100% of your daily earnings with zero royalties, and receive authentic starter masala with launch day manpower support.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onViewPackageClick}
              className="min-h-[46px] w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
            >
              <span>VIEW PACKAGE (18 INCLUSIONS)</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onEnquireClick}
              className="min-h-[46px] w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300 bg-neutral-900 border border-amber-500/50 hover:border-amber-400 rounded-xl transition-all cursor-pointer"
            >
              START FRANCHISE ENQUIRY
            </button>
          </div>
        </div>

        {/* 4 Official Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-amber-400 mb-3">
              <BadgePercent className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
              Zero Deductions
            </div>
            <h3 className="text-base font-royal font-bold text-white mb-1.5">
              NO ROYALTY
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No royalty • Keep your business earnings with you
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-amber-400 mb-3">
              <LifeBuoy className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
              Ongoing Guidance
            </div>
            <h3 className="text-base font-royal font-bold text-white mb-1.5">
              LIFETIME BRAND SUPPORT
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ongoing KPM Fried Chicken brand support
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-red-500 mb-3">
              <Flame className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
              Proprietary Taste
            </div>
            <h3 className="text-base font-royal font-bold text-white mb-1.5">
              OWN UNIQUE MASALA
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              KPM Fried Chicken's own unique masala
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-black border border-neutral-800 flex items-center justify-center text-amber-400 mb-3">
              <Users2 className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
              Launch Assistance
            </div>
            <h3 className="text-base font-royal font-bold text-white mb-1.5">
              1ST DAY MANPOWER SUPPORT
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Opening-day manpower support to help you launch smoothly
            </p>
          </div>
        </div>

        {/* 5-Step Operational Roadmap */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <span className="text-[10px] font-royal font-bold tracking-[0.2em] uppercase text-amber-400 block mb-1">
              LAUNCH TIMELINE
            </span>
            <h3 className="text-xl sm:text-2xl font-royal font-bold text-white">
              HOW THE FRANCHISE WORKS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {KPM_DATA.steps.map((s, idx) => (
              <div
                key={s.step}
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-lg font-extrabold text-amber-400 mb-1.5">
                    {s.step}
                  </div>
                  <h4 className="text-xs sm:text-sm font-royal font-bold text-white mb-1 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-800 text-[10px] text-neutral-500">
                  Step 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
