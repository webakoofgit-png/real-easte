"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

interface StackingCardData {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  points: string[];
}

const cards: StackingCardData[] = [
  {
    number: "01",
    category: "Architectural Singularities",
    title: "Sculptural Living & Monumental Proportions",
    description:
      "Every property in our curation represents an architectural milestone. We select residences crafted by Pritzker Prize laureates and globally celebrated modernists where glass, board-formed concrete, and rare stone converge into living art.",
    image: "/images/features/interior.jpg",
    points: [
      "Cantilevered steel and structural glass engineering",
      "Museum-standard light calibration for fine art collections",
      "Custom Italian millwork and monolithic marble centerpieces",
      "Triple-height gallery salons with dramatic skylights",
    ],
  },
  {
    number: "02",
    category: "Aquatic & Wellness Sanctuaries",
    title: "Private Spas & Horizon-Vanishing Waterways",
    description:
      "True luxury begins with rejuvenation. Our portfolio features world-class private wellness ecosystems designed to mirror five-star Swiss and Mediterranean retreats, right within the security of your private estate grounds.",
    image: "/images/features/pool.jpg",
    points: [
      "Perimeter-overflow infinity pools floating over cityscapes",
      "Thermal hydrotherapy spas, steam rooms, and cedar saunas",
      "Cryotherapy suites and biometric wellness fitness centers",
      "Zen meditation courtyards framed by lush botanical gardens",
    ],
  },
  {
    number: "03",
    category: "Prime Global Logistics",
    title: "Deep-Water Berths & Private Heliport Integration",
    description:
      "Effortless transit defines the ultra-prime lifestyle. From Star Island private deep-water docks accommodating 130ft superyachts to certified rooftop helipads in Los Angeles and Aspen, seamless arrival is guaranteed.",
    image: "/images/features/lifestyle.jpg",
    points: [
      "150+ foot private deep-water mooring with automated lifts",
      "Private helipad landing clearances and hangar connectivity",
      "Multi-vehicle subterranean gallery vaults with EV fast-chargers",
      "Direct deeded coastline access and secluded private coves",
    ],
  },
  {
    number: "04",
    category: "Sovereign Discretion",
    title: "Off-Market Secrecy & Institutional Representation",
    description:
      "Over sixty percent of high-value transactions never appear on public MLS directories. Our private advisory group facilitates confidential transfers for sovereigns, titans of industry, and family offices with zero public disclosure.",
    image: "/images/hero-bg.jpg",
    points: [
      "Ironclad multi-jurisdictional Non-Disclosure Protocols",
      "Direct private escrow and bespoke crypto/fiat settlement",
      "Vetted high-net-worth buyer verification before showing access",
      "Dedicated single-point private partner representation",
    ],
  },
];

export default function StackingCards() {
  return (
    <section className="relative py-28 md:py-36 bg-[#08090c] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[11px] font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cloud 9 Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
            Pillars of Exceptional{" "}
            <span className="italic font-light gold-gradient-text">
              Real Estate & Finance
            </span>
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            What distinguishes a Cloud 9 property is an uncompromising standard of spatial design, institutional loan structuring, and lifestyle autonomy.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-12">
          {cards.map((card, idx) => (
            <div
              key={card.number}
              className="sticky top-28 md:top-32 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl transition-transform duration-300"
              style={{
                zIndex: idx + 1,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                {/* Left Narrative Column */}
                <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-[#0e1117] to-[#08090c]">
                  <div>
                    {/* Number and tag */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
                        {card.category}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 font-bold">
                        {card.number} / 04
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-5 leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-8">
                      {card.description}
                    </p>

                    {/* Feature points */}
                    <div className="space-y-3 mb-8">
                      {card.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span className="text-xs text-zinc-300 font-light leading-relaxed">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors"
                    >
                      <span>Read Full Doctrine</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                      Cloud 9 Property & Finance
                    </span>
                  </div>
                </div>

                {/* Right Visual Image Column */}
                <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 lg:bg-gradient-to-r lg:from-[#0e1117] lg:via-transparent lg:to-black/30" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-300 font-medium tracking-wide">
                      Prime Asset Verification #AU-{card.number}
                    </span>
                    <span className="text-[10px] text-[#d4af37] uppercase tracking-wider font-semibold">
                      Inspected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
