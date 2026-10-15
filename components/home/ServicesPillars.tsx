"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Landmark,
  Building2,
  TrendingUp,
  ShieldCheck,
  Percent,
  Coins,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Calculator,
  BadgeCheck,
} from "lucide-react";

interface ServiceItem {
  id: "loans" | "property" | "finance";
  title: string;
  tagline: string;
  badge: string;
  icon: typeof Landmark;
  highlights: string[];
  description: string;
  features: { label: string; value: string }[];
  ctaText: string;
  ctaLink: string;
}

const services: ServiceItem[] = [
  {
    id: "loans",
    title: "Loans & Lending Advisory",
    tagline: "Competitive interest rates, expedited institutional approvals & custom capital.",
    badge: "Pillar 01 • Loans",
    icon: Landmark,
    description:
      "From bespoke jumbo home loans for trophy residences to commercial project financing and Loan Against Property (LAP), Cloud 9 Consultant secures preferential lending terms through tier-1 banking institutions and private debt funds.",
    highlights: [
      "Jumbo Luxury Home Loans & Refinancing",
      "Loan Against Property (LAP) with High LTV",
      "Commercial Purchase & Construction Loans",
      "Seamless Documentation & Priority Approval",
      "Balance Transfer with Substantial Top-Up",
    ],
    features: [
      { label: "Interest Rates Starting", value: "8.25%* p.a." },
      { label: "Loan Values Available", value: "Up to ₹100 Cr+" },
      { label: "Approval Timelines", value: "48 to 72 Hours" },
      { label: "Bank Partnerships", value: "25+ Major Lenders" },
    ],
    ctaText: "Explore Loan Programs",
    ctaLink: "/contact?service=loans",
  },
  {
    id: "property",
    title: "Luxury & Commercial Property",
    tagline: "Verified architectural estates, commercial landmarks & prime acquisitions.",
    badge: "Pillar 02 • Property",
    icon: Building2,
    description:
      "We provide end-to-end property advisory for high-net-worth individuals, investors, and corporations. Access private off-market estates, architectural penthouses, and high-yield commercial real estate with comprehensive legal verification.",
    highlights: [
      "Signature Residential Estates & Penthouses",
      "Prime Commercial Floors & Retail Spaces",
      "Deed Vetting, Title Audits & Land Registries",
      "Confidential Off-Market Representation",
      "Comprehensive Property Management Advisory",
    ],
    features: [
      { label: "Transacted Volume", value: "₹3,500 Cr+ Total" },
      { label: "Active Listings", value: "Trophy Curation" },
      { label: "Off-Market Access", value: "60%+ Discretion" },
      { label: "Inspection Standard", value: "100-Point Audit" },
    ],
    ctaText: "Browse Collection",
    ctaLink: "/properties",
  },
  {
    id: "finance",
    title: "Strategic Financial Solutions",
    tagline: "Tax-efficient capital structuring, portfolio growth & debt optimization.",
    badge: "Pillar 03 • Financial Solutions",
    icon: TrendingUp,
    description:
      "Holistic financial consultation designed to optimize your debt-to-equity ratio, structure private equity partnerships, and deploy capital across high-growth property markets with wealth preservation at the core.",
    highlights: [
      "Debt Optimization & Restructuring Strategies",
      "Sovereign & Family Office Capital Structuring",
      "NRI Investment & Cross-Border Wealth Advisory",
      "Private Equity & Mezzanine Financing",
      "Bespoke Wealth Preservation Trusts",
    ],
    features: [
      { label: "Portfolio Advisory", value: "Multi-Asset" },
      { label: "Compliance & Legal", value: "100% Regulated" },
      { label: "Private Wealth Desk", value: "24/7 Dedicated" },
      { label: "Client Retention", value: "98.7% Satisfaction" },
    ],
    ctaText: "Book Financial Consultation",
    ctaLink: "/contact?service=financial-solutions",
  },
];

export default function ServicesPillars() {
  const [activeTab, setActiveTab] = useState<"loans" | "property" | "finance">("loans");

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#08090c] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Decorative Red & Gold Gradients echoing the logo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-semibold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Cloud 9 Triad</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white">
            Loans • Property •{" "}
            <span className="italic font-light gold-gradient-text">
              Financial Solutions
            </span>
          </h2>

          {/* Logo red-gold accent divider */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-red-600 to-[#d4af37]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#d4af37] border border-red-600 shadow-md" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-[#d4af37] via-red-600 to-transparent" />
          </div>

          <p className="text-zinc-300 text-sm sm:text-base font-serif italic pt-1">
            &ldquo;Your Trusted Partner for Loans & Property Solutions.&rdquo;
          </p>

          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Cloud 9 Consultant unifies institutional lending, prestigious real estate acquisitions, and sophisticated financial structuring under one discrete roof.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 max-w-2xl w-full p-1.5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
            {services.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black shadow-lg shadow-[#d4af37]/20"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.id === "finance" ? "Financial Solutions" : item.id.toUpperCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Service Card */}
        <div className="glass-panel rounded-3xl p-8 md:p-14 border border-[#d4af37]/30 shadow-2xl relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                <BadgeCheck className="w-4 h-4 text-[#d4af37]" />
                <span>{currentService.badge}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                {currentService.title}
              </h3>

              <p className="text-sm font-medium text-zinc-300">
                {currentService.tagline}
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                {currentService.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2">
                {currentService.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="text-xs text-zinc-200">{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={currentService.ctaLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-xl shadow-[#d4af37]/20"
                >
                  <span>{currentService.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <span className="text-xs text-zinc-500">
                  Direct Partner Access • No Broker Intermediaries
                </span>
              </div>
            </div>

            {/* Right Metric Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {currentService.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-white/10 space-y-2 text-center flex flex-col justify-center"
                >
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block font-semibold">
                    {feat.label}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {feat.value}
                  </p>
                </div>
              ))}

              <div className="col-span-2 p-5 rounded-2xl bg-[#090a0e] border border-red-900/30 flex items-center justify-between text-xs text-zinc-400">
                <span className="text-[11px] text-[#d4af37] font-serif italic">
                  &ldquo;Trusted Partner for Loans & Property Solutions&rdquo;
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                  CLOUD 9 VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
