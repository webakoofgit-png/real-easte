"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Shield,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  ArrowLeft,
  Share2,
  Heart,
  Calculator,
  Download,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import { Property } from "@/lib/properties";
import { formatCurrency } from "@/lib/utils";

interface PropertyDetailViewProps {
  property: Property;
  relatedProperties: Property[];
}

export default function PropertyDetailView({
  property,
  relatedProperties,
}: PropertyDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [tourType, setTourType] = useState<"in-person" | "video">("in-person");

  // Mortgage Calculator State
  const [downPaymentPct, setDownPaymentPct] = useState(25);
  const [loanTermYears, setLoanTermYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  // Mortgage math
  const loanPrincipal = property.price * (1 - downPaymentPct / 100);
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTermYears * 12;
  const monthlyPayment =
    (loanPrincipal *
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const allImages = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image];

  return (
    <div className="w-full space-y-16">
      {/* Top Navigation & Actions Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs text-zinc-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isSaved ? "fill-rose-500 text-rose-500" : ""
              }`}
            />
            <span>{isSaved ? "Saved" : "Save Listing"}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs text-zinc-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Image Gallery */}
      <div className="space-y-4">
        {/* Large Featured View */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden glass-card shadow-2xl bg-zinc-900 border border-white/10">
          <Image
            src={allImages[selectedImage]}
            alt={`${property.title} view ${selectedImage + 1}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Badges Over Image */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                {property.badge || property.type}
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10">
                {property.status}
              </span>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md border border-white/10">
              {selectedImage + 1} / {allImages.length}
            </span>
          </div>

          {/* Headline on Image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{property.location}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight drop-shadow-lg">
                {property.title}
              </h1>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37] block font-semibold mb-1">
                Offered At
              </span>
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md">
                {property.formattedPrice}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(idx)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                selectedImage === idx
                  ? "border-[#d4af37] scale-100 shadow-lg shadow-[#d4af37]/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="25vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Primary Content Grid: Specs, Narrative vs Booking Sticky Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Details, Amenities, Specs, Mortgage */}
        <div className="lg:col-span-8 space-y-12">
          {/* Key Specs Ribbon */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-white/10">
            <div className="space-y-1 border-r border-white/5 last:border-none">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 block">
                Bedrooms
              </span>
              <span className="font-serif text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Bed className="w-5 h-5 text-[#d4af37]" />
                {property.beds}
              </span>
            </div>

            <div className="space-y-1 border-r border-white/5 last:border-none">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 block">
                Bathrooms
              </span>
              <span className="font-serif text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Bath className="w-5 h-5 text-[#d4af37]" />
                {property.baths}
              </span>
            </div>

            <div className="space-y-1 border-r border-white/5 last:border-none">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 block">
                Living Area
              </span>
              <span className="font-serif text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Square className="w-5 h-5 text-[#d4af37]" />
                {property.sqft.toLocaleString()} <span className="text-xs font-sans font-normal text-zinc-400">SqFt</span>
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-zinc-400 block">
                Year Built
              </span>
              <span className="font-serif text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-[#d4af37]" />
                {property.yearBuilt}
              </span>
            </div>
          </div>

          {/* Design Narrative & Description */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 space-y-6 border border-white/10">
            <h2 className="font-serif text-2xl font-normal text-white">
              Architectural Overview & Design Narrative
            </h2>
            <p className="text-zinc-300 leading-relaxed font-light text-base">
              {property.description}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every appointment and surface has been curated to surpass the expectations of discerning global connoisseurs. Engineered with smart environmental automation, certified acoustic dampening, and sovereign-grade biometric perimeter protection.
            </p>
          </div>

          {/* Property Amenities & Features Checklist */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 space-y-6 border border-white/10">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <h2 className="font-serif text-2xl font-normal text-white">
                Bespoke Specifications & Amenities
              </h2>
              <span className="text-xs text-[#d4af37] uppercase tracking-widest font-semibold">
                {property.features.length} Certified Elements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span className="text-xs text-zinc-200 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mortgage & Amortization Calculator */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 space-y-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-normal text-white">
                  Acquisition Financing Calculator
                </h2>
                <p className="text-xs text-zinc-400">
                  Estimate private banking jumbo mortgage and liquidity allocations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                  Down Payment ({downPaymentPct}%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full accent-[#d4af37]"
                />
                <span className="text-xs text-white mt-1 block font-mono">
                  {formatCurrency((property.price * downPaymentPct) / 100)}
                </span>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                  Loan Duration
                </label>
                <select
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                >
                  <option value={15}>15-Year Fixed</option>
                  <option value={30}>30-Year Fixed</option>
                </select>
                <span className="text-xs text-zinc-400 mt-1 block">
                  Private wealth terms available
                </span>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-xs text-white"
                />
                <span className="text-xs text-zinc-400 mt-1 block">
                  Benchmark Home Loan / LAP APR
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#090a0e] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-zinc-400 block font-semibold">
                  Estimated Principal & Interest
                </span>
                <p className="text-3xl font-serif font-bold text-[#d4af37]">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-xs font-sans font-normal text-zinc-400"> / month</span>
                </p>
              </div>
              <p className="text-[11px] text-zinc-500 max-w-xs text-center sm:text-right">
                Excludes property taxes, estate insurance, and private enclave dues.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sticky Column: Assigned Broker & Tour Booking Form */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          {/* Agent Information Card */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
              Exclusive Listing Representation
            </span>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37]/40 shrink-0">
                <Image
                  src={property.agent.image}
                  alt={property.agent.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-white">
                  {property.agent.name}
                </h3>
                <p className="text-xs text-zinc-400">{property.agent.title}</p>
                <span className="text-[10px] text-[#d4af37] uppercase tracking-wider font-semibold">
                  Cloud 9 Senior Partner
                </span>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs border-t border-white/[0.08]">
              <a
                href={`tel:${property.agent.phone}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{property.agent.phone}</span>
              </a>
              <a
                href={`mailto:${property.agent.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="truncate">{property.agent.email}</span>
              </a>
            </div>
          </div>

          {/* Schedule Tour Booking Form */}
          <div className="glass-panel rounded-2xl p-6 md:p-8 border border-[#d4af37]/30 space-y-6 shadow-2xl">
            <div>
              <h3 className="font-serif text-2xl font-medium text-white mb-1">
                Schedule Private Viewing
              </h3>
              <p className="text-xs text-zinc-400">
                Confidential guided estate inspection or virtual walkthrough.
              </p>
            </div>

            {bookingSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-lg font-medium text-white">
                  Viewing Request Registered
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Partner {property.agent.name} will contact your representative within 2 hours to confirm security credentials.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Tour Type Selector */}
                <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-black/40 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setTourType("in-person")}
                    className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                      tourType === "in-person"
                        ? "bg-[#d4af37] text-black"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    In-Person Tour
                  </button>
                  <button
                    type="button"
                    onClick={() => setTourType("video")}
                    className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                      tourType === "video"
                        ? "bg-[#d4af37] text-black"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Virtual Drone Tour
                  </button>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alistair Sterling"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@familyoffice.com"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    Direct Telephone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold">
                    Preferred Date & Window
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda"
                    required
                    className="mt-0.5 accent-[#d4af37]"
                  />
                  <label htmlFor="nda" className="text-[10px] text-zinc-400 leading-tight">
                    I acknowledge that private property viewing requires mutual NDA execution and proof of funds before gate clearance.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Confirmation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Similar & Nearby Trophy Residences */}
      {relatedProperties.length > 0 && (
        <div className="pt-16 border-t border-white/[0.08] space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-1">
                Portfolio Synergy
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
                Comparable Architectural Residences
              </h3>
            </div>

            <Link
              href="/properties"
              className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors"
            >
              View Full Index
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProperties.map((prop) => (
              <div
                key={prop.id}
                className="group rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-lg font-serif font-bold text-white">
                      {prop.formattedPrice}
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-wider block">
                    {prop.location}
                  </span>
                  <h4 className="font-serif text-base font-medium text-white group-hover:text-[#f3e5ab] transition-colors truncate">
                    {prop.title}
                  </h4>
                  <Link
                    href={`/properties/${prop.id}`}
                    className="text-xs text-zinc-400 group-hover:text-white transition-colors flex items-center justify-between pt-2"
                  >
                    <span>View Specifications</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
