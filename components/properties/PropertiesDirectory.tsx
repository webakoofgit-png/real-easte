"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PropertyFilter, { FilterState } from "@/components/properties/PropertyFilter";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property } from "@/lib/properties";
import { Sparkles, Compass, AlertCircle } from "lucide-react";

interface PropertiesDirectoryProps {
  initialProperties: Property[];
}

export default function PropertiesDirectory({
  initialProperties,
}: PropertiesDirectoryProps) {
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get("search") || "",
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    priceRange: searchParams.get("priceRange") || "",
    bedrooms: searchParams.get("bedrooms") || "",
  });

  // Sync if URL search params change
  useEffect(() => {
    const loc = searchParams.get("location");
    const t = searchParams.get("type");
    if (loc !== null || t !== null) {
      setFilters((prev) => ({
        ...prev,
        location: loc || prev.location,
        type: t || prev.type,
      }));
    }
  }, [searchParams]);

  const handleReset = () => {
    setFilters({
      search: "",
      location: "",
      type: "",
      priceRange: "",
      bedrooms: "",
    });
  };

  const filteredProperties = useMemo(() => {
    return initialProperties.filter((property) => {
      // 1. Search text filter
      if (filters.search.trim()) {
        const query = filters.search.toLowerCase().trim();
        const matchTitle = property.title.toLowerCase().includes(query);
        const matchLocation = property.location.toLowerCase().includes(query);
        const matchTagline = property.tagline.toLowerCase().includes(query);
        const matchDescription = property.description.toLowerCase().includes(query);
        if (!matchTitle && !matchLocation && !matchTagline && !matchDescription) {
          return false;
        }
      }

      // 2. Location filter
      if (filters.location) {
        const locLower = filters.location.toLowerCase();
        const propLocLower = property.location.toLowerCase();
        if (!propLocLower.includes(locLower)) {
          return false;
        }
      }

      // 3. Property Type filter
      if (filters.type) {
        if (property.type.toLowerCase() !== filters.type.toLowerCase()) {
          return false;
        }
      }

      // 4. Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (property.price < min || property.price > max) {
          return false;
        }
      }

      // 5. Min Bedrooms filter
      if (filters.bedrooms) {
        const minBeds = Number(filters.bedrooms);
        if (property.beds < minBeds) {
          return false;
        }
      }

      return true;
    });
  }, [initialProperties, filters]);

  return (
    <div className="w-full space-y-12">
      {/* Interactive Filter Bar */}
      <PropertyFilter
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleReset}
        totalCount={initialProperties.length}
        filteredCount={filteredProperties.length}
      />

      {/* Grid of Filtered Results */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop, idx) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              priority={idx < 3}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-16 text-center space-y-6 max-w-2xl mx-auto border border-white/10">
          <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mx-auto text-[#d4af37]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-white mb-2">
              No Matching Residences Found
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-md mx-auto">
              We couldn’t find any active listings matching your current filter criteria. Try adjusting the price range, location, or reset the filters.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
