import { Suspense } from "react";
import type { Metadata } from "next";
import PropertiesDirectory from "@/components/properties/PropertiesDirectory";
import { getAllProperties } from "@/lib/properties";
import { Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Collection | Cloud 9 Consultant",
  description:
    "Explore our complete collection of architectural villas, trophy penthouses, and private waterfront estates.",
};

export default function PropertiesPage() {
  const properties = getAllProperties();

  return (
    <div className="min-h-screen bg-[#08090c] pt-32 pb-28 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-semibold tracking-[0.25em] uppercase">
            <Compass className="w-3 h-3" />
            <span>Global Portfolio Index</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            Curated{" "}
            <span className="italic font-light gold-gradient-text">
              Residences & Estates
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Every estate listed below has passed our rigorous multi-point architectural inspection, deed validation, and valuation audit. Filter by desired metropolis, property typology, or budget.
          </p>
        </div>

        {/* Directory Wrapped with Suspense */}
        <Suspense
          fallback={
            <div className="glass-panel p-12 rounded-2xl text-center text-zinc-400 text-sm">
              Loading properties catalogue...
            </div>
          }
        >
          <PropertiesDirectory initialProperties={properties} />
        </Suspense>
      </div>
    </div>
  );
}
