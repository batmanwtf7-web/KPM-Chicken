import React from 'react';
import { Star } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface ReviewsSectionProps {
  onOpenEnquiry: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>COMMUNITY & FEEDBACK</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-royal font-bold text-white tracking-tight">
            WHAT OUR CUSTOMERS SAY
          </h2>

          <p className="mt-2 text-neutral-400 text-xs sm:text-sm">
            Genuine verified experiences from stall patrons and upcoming franchise partners.
          </p>
        </div>

        {/* Reviews Cards - Clean Unfabricated Honest Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-dashed border-amber-500/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Verified Review Slot
                </span>
              </div>

              <p className="italic text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                &ldquo;Add verified customer review here once collected from the Komarapalayam outlet or regional pop-ups.&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-white">Stall Customer Experience</span>
              <span>Komarapalayam Stall</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-dashed border-amber-500/40 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                  Partner Story Slot
                </span>
              </div>

              <p className="italic text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                &ldquo;Add verified franchise partner launch journey and feedback here upon onboarding of initial batch operators.&rdquo;
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-white">Franchise Partner Stories</span>
              <span>Regional Territory</span>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="p-5 sm:p-6 rounded-xl bg-black/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">
              Are you a KPM stall patron or partner candidate?
            </h4>
            <p className="text-[11px] sm:text-xs text-neutral-400">
              Share your feedback or register to become our featured launch partner in your city.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="min-h-[42px] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            Submit Feedback / Enquire
          </button>
        </div>
      </div>
    </section>
  );
};
