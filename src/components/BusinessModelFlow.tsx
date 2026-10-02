import React from 'react';
import { 
  MapPin, 
  Store, 
  ChefHat, 
  Sparkles, 
  Flame, 
  Users, 
  Rocket, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface BusinessModelFlowProps {
  onStartEnquiryClick: () => void;
}

export const BusinessModelFlow: React.FC<BusinessModelFlowProps> = ({ onStartEnquiryClick }) => {
  const flowNodes = [
    { title: "Location", icon: <MapPin className="w-4 h-4 text-amber-400" />, desc: "Roadside or commercial spot" },
    { title: "KPM Cart", icon: <Store className="w-4 h-4 text-amber-400" />, desc: "8 × 4 premium mobile unit" },
    { title: "Equipment", icon: <ChefHat className="w-4 h-4 text-amber-400" />, desc: "Fryers, steamer & prep tools" },
    { title: "Branding", icon: <Sparkles className="w-4 h-4 text-amber-400" />, desc: "Canopy & lollipop boards" },
    { title: "Secret Masala", icon: <Flame className="w-4 h-4 text-red-500" />, desc: "3kg proprietary starter blend" },
    { title: "1st Day Support", icon: <Users className="w-4 h-4 text-amber-400" />, desc: "Opening manpower assistance" },
    { title: "Launch", icon: <Rocket className="w-4 h-4 text-emerald-400" />, desc: "Serving crispy fried chicken" },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] border-t border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>BUSINESS BLUEPRINT</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight leading-tight">
            YOUR BUSINESS.<br />
            YOUR LOCATION.<br />
            <span className="text-red-500">THE KPM BRAND.</span>
          </h2>

          <p className="mt-3 text-neutral-300 text-xs sm:text-base max-w-xl mx-auto">
            How the components of the KPM Fried Chicken franchise synchronize to create an operational food cart on day one.
          </p>
        </div>

        {/* Operational Flow Cards */}
        <div className="mb-12 p-4 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl">
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-4 text-center sm:text-left">
            Operational Blueprint
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {flowNodes.map((node, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-neutral-900 border border-neutral-800"
              >
                <div className="p-2 rounded-lg bg-black border border-neutral-800 mb-2">
                  {node.icon}
                </div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {node.title}
                </div>
                <div className="text-[10px] text-neutral-400 leading-tight">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step Process */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-3xl font-royal font-bold text-white">
              HOW THE FRANCHISE WORKS
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              5 clear milestones from initial enquiry to your grand launch day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
            {KPM_DATA.steps.map((s, idx) => (
              <div
                key={s.step}
                className="relative p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-extrabold text-amber-400">
                      {s.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </div>

                  <h4 className="text-sm font-royal font-bold text-white mb-1.5 leading-snug">
                    {s.title}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-500">
                  <span>Phase 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/70" />
                </div>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="mt-8 sm:mt-10 text-center">
            <button
              onClick={onStartEnquiryClick}
              className="min-h-[46px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 transition-all cursor-pointer"
            >
              <span>Begin Step 01: Submit Franchise Enquiry</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
