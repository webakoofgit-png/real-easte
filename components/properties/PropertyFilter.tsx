"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, RotateCcw, MapPin, Building, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterState {
  search: string;
  location: string;
  type: string;
  priceRange: string;
  bedrooms: string;
}

interface PropertyFilterProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

export default function PropertyFilter({
  filters,
  onFilterChange,
  onReset,
  totalCount,
  filteredCount,
}: PropertyFilterProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const locations = [
    { label: "All Destinations", value: "" },
    { label: "Beverly Hills & Bel-Air", value: "Beverly Hills" },
    { label: "New York & Manhattan", value: "New York" },
    { label: "Miami Beach", value: "Miami" },
    { label: "Aspen Mountain", value: "Aspen" },
    { label: "Malibu Coast", value: "Malibu" },
    { label: "Lake Tahoe", value: "Tahoe" },
  ];

  const propertyTypes = [
    { label: "All Property Types", value: "" },
    { label: "Estates & Compounds", value: "Estate" },
    { label: "Sky Penthouses", value: "Penthouse" },
    { label: "Waterfront Sanctuaries", value: "Waterfront" },
    { label: "Modern Villas", value: "Villa" },
    { label: "Architectural Mansions", value: "Mansion" },
  ];

  const priceRanges = [
    { label: "Any Valuation", value: "" },
    { label: "Under ₹20 Crore", value: "0-200000000" },
    { label: "₹20 Crore – ₹35 Crore", value: "200000000-350000000" },
    { label: "₹35 Crore+ (Ultra-Luxury)", value: "350000000-999999999999" },
  ];

  const bedroomOptions = [
    { label: "Any Bedrooms", value: "" },
    { label: "4+ Bedrooms", value: "4" },
    { label: "5+ Bedrooms", value: "5" },
    { label: "6+ Bedrooms", value: "6" },
    { label: "7+ Bedrooms", value: "7" },
  ];

  const updateField = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const isFiltered = Boolean(
    filters.search ||
      filters.location ||
      filters.type ||
      filters.priceRange ||
      filters.bedrooms
  );

  return (
    <div className="w-full glass-panel rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl">
      {/* Primary Row: Search and Quick Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Keyword Search Input */}
        <div className="md:col-span-4 relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by estate name, city, architectural style..."
            value={filters.search}
            onChange={(e) => updateField("search", e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-all"
          />
        </div>

        {/* Location Dropdown */}
        <div className="md:col-span-3 relative">
          <MapPin className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={filters.location}
            onChange={(e) => updateField("location", e.target.value)}
            aria-label="Filter by destination"
            className="w-full pl-11 pr-8 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer transition-all"
          >
            {locations.map((loc) => (
              <option key={loc.value} value={loc.value} className="bg-[#0e1117] text-white">
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Dropdown */}
        <div className="md:col-span-3 relative">
          <Building className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={filters.type}
            onChange={(e) => updateField("type", e.target.value)}
            aria-label="Filter by property type"
            className="w-full pl-11 pr-8 py-3 bg-black/40 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer transition-all"
          >
            {propertyTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-[#0e1117] text-white">
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Advanced Filters Button */}
        <div className="md:col-span-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all border",
              showAdvanced
                ? "bg-[#d4af37] text-black border-[#d4af37]"
                : "bg-white/[0.04] text-zinc-200 border-white/10 hover:border-[#d4af37]/40"
            )}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Advanced Expandable Row */}
      {showAdvanced && (
        <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
          {/* Price Range */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Price Range
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => updateField("priceRange", e.target.value)}
              aria-label="Filter by price range"
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            >
              {priceRanges.map((p) => (
                <option key={p.value} value={p.value} className="bg-[#0e1117] text-white">
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Min Bedrooms */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Bedrooms Required
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => updateField("bedrooms", e.target.value)}
              aria-label="Filter by minimum bedrooms"
              className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            >
              {bedroomOptions.map((b) => (
                <option key={b.value} value={b.value} className="bg-[#0e1117] text-white">
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Action */}
          <div className="flex items-end">
            {isFiltered && (
              <button
                type="button"
                onClick={onReset}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider text-zinc-400 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-all border border-white/10"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Header / Live count */}
      <div className="flex items-center justify-between pt-2 text-xs text-zinc-400">
        <p>
          Showing <span className="font-semibold text-white">{filteredCount}</span> of{" "}
          <span className="text-zinc-500">{totalCount} exclusive listings</span>
        </p>
        {isFiltered && (
          <span className="text-[11px] text-[#d4af37] font-medium tracking-wide">
            Filter criteria applied
          </span>
        )}
      </div>
    </div>
  );
}
