import React from 'react';
import { BadgePercent, LifeBuoy, Flame, Users2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface FranchiseBenefitsProps {
  onEnquireClick: () => void;
}

export const FranchiseBenefits: React.FC<FranchiseBenefitsProps> = ({ onEnquireClick }) => {
  const iconMap: Record<string, React.ReactNode> = {
    BadgePercent: <BadgePercent className="w-6 h-6 text-amber-400" />,
    LifeBuoy: <LifeBuoy className="w-6 h-6 text-amber-400" />,
    Flame: <Flame className="w-6 h-6 text-red-500" />,
    Users2: <Users2 className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>PARTNERSHIP ADVANTAGES</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            WHY KPM
          </h2>

          <p className="mt-2 sm:mt-3 text-neutral-300 text-xs sm:text-base max-w-xl mx-auto">
            The four official franchise highlights from the KPM partnership agreement.
          </p>
        </div>

        {/* 4 Cards (1 card per row on mobile, 2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {KPM_DATA.benefits.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-black border border-neutral-800">
                    {iconMap[benefit.icon]}
                  </div>

                  <span className="font-mono text-xs font-bold text-amber-400/90 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                {/* Subtitle Tag */}
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                  {benefit.highlight}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-royal font-bold text-white leading-snug">
                  {benefit.title}
                </h3>

                {/* Description directly from PDF */}
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Official Highlight
                </span>

                <button
                  onClick={onEnquireClick}
                  className="font-bold text-amber-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-xs"
                >
                  <span>Enquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
