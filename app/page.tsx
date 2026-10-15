import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Shield, Compass, PhoneCall, CheckCircle } from "lucide-react";
import Hero from "@/components/home/Hero";
import HorizontalListings from "@/components/home/HorizontalListings";
import ServicesPillars from "@/components/home/ServicesPillars";
import StackingCards from "@/components/home/StackingCards";
import PropertyCard from "@/components/properties/PropertyCard";
import { getAllProperties, getFeaturedProperties } from "@/lib/properties";

export default function HomePage() {
  const allProperties = getAllProperties();
  const featuredProperties = getFeaturedProperties();
  const highlightProperties = allProperties.slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-[#08090c] text-white">
      {/* 1. Cinematic Kinetic Hero */}
      <Hero />

      {/* 2. GSAP ScrollTrigger Pinned Horizontal Showcase */}
      <HorizontalListings properties={allProperties} />

      {/* 3. Three Pillars: Loans | Property | Financial Solutions */}
      <ServicesPillars />

      {/* 4. Layered Stacking Feature Cards */}
      <StackingCards />

      {/* 5. Editorial Highlight Grid */}
      <section className="py-24 md:py-32 bg-[#090a0e] relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Prime Curated Releases</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Remarkable Global{" "}
                <span className="italic font-light gold-gradient-text">
                  Residences
                </span>
              </h2>
            </div>

            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-lg shadow-[#d4af37]/20"
            >
              <span>Explore All Listings</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Grid of Highlight Properties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brand Narrative & Private Concierge Banner */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-black">
        {/* Subtle background glow & luxury texture */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Architecture"
            fill
            className="object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-semibold tracking-[0.25em] uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Cloud 9 Advisory Desk</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
              Your Trusted Partner for{" "}
              <span className="italic font-light gold-gradient-text">
                Loans & Property Solutions.
              </span>
            </h2>

            <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">
              At Cloud 9 Consultant, we bring institutional lending power, certified real estate acquisitions, and bespoke private wealth solutions under a single trusted advisory. Whether financing an iconic property acquisition, securing a high-value loan against property, or structuring private capital, our partners guide you with complete discretion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-zinc-300">Confidential Off-Market Dossiers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-zinc-300">Direct Principal Escrow Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-zinc-300">Private Helicopter & Yacht Viewings</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span className="text-xs text-zinc-300">White-Glove Family Office Concierge</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-xl shadow-[#d4af37]/25"
              >
                <span>Initiate Private Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Private Advisors on standby 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
