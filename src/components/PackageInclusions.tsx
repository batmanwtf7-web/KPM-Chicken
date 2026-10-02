import React, { useState, useMemo } from 'react';
import { 
  Package, 
  Search, 
  CheckCircle, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface PackageInclusionsProps {
  onEnquireClick: () => void;
}

export const PackageInclusions: React.FC<PackageInclusionsProps> = ({
  onEnquireClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return KPM_DATA.packageInclusions.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="package" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>OFFICIAL PACKAGE SPECIFICATIONS</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-extrabold text-white tracking-tight">
            FRANCHISE PACKAGE
          </h2>
          <div className="text-base sm:text-xl font-royal font-bold text-amber-400 mt-1 sm:mt-2">
            8 × 4 PREMIUM CART
          </div>
          <p className="mt-3 text-neutral-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            The complete 18 official equipment and setup items included in the KPM Fried Chicken franchise package. Every item and quantity corresponds strictly to the official franchise agreement.
          </p>
        </div>

        {/* FRANCHISE INVESTMENT SECTION */}
        <div className="p-5 sm:p-8 rounded-2xl bg-neutral-900/90 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                INVESTMENT DETAILS
              </span>
              <div className="text-xl sm:text-3xl font-royal font-extrabold text-white">
                Contact KPM for Current Pricing
              </div>
              <p className="text-xs text-neutral-400 max-w-xl">
                The franchise investment covers turnkey 8 × 4 cart fabrication, complete kitchen machinery, commercial gas fryers, 3 kg starter masala, and opening-day manpower support with zero royalty fees.
              </p>
            </div>

            <button
              onClick={onEnquireClick}
              className="w-full md:w-auto min-h-[46px] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>GET INVESTMENT DETAILS</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {KPM_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-black shadow-md font-bold'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1 text-[11px] tabular-nums ${
                  selectedCategory === cat.id ? 'text-black/80 font-bold' : 'text-neutral-500'
                }`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 18 inclusions..."
              className="w-full pl-9 pr-3 py-2 text-xs text-white bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors placeholder:text-neutral-500"
            />
          </div>
        </div>

        {/* 18 Inclusions Grid (Stacked 1-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group p-4 sm:p-5 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-900 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="font-mono text-amber-400 font-bold tabular-nums">
                    #{String(item.itemNumber).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">
                    {item.categoryLabel}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-royal font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.name}
                </h3>

                <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <span>Quantity:</span>
                  <span className="text-amber-400 font-bold tabular-nums font-mono text-xs sm:text-sm">
                    {item.quantity}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Official Item</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-10 bg-neutral-900/40 rounded-xl border border-neutral-800">
            <Package className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
            <p className="text-neutral-400 text-xs">No items match your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};
