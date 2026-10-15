import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Award,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Firm & Philosophy | Cloud 9 Consultant",
  description:
    "Discover the story, ethos, and leadership team behind Cloud 9 Consultant, your trusted partner for loans, property, and financial solutions.",
};

const team = [
  {
    name: "Victoria Sterling",
    role: "Senior Managing Partner — West Coast",
    location: "Beverly Hills & Malibu",
    image: "/images/team/agent-1.jpg",
    bio: "With over two decades orchestrating landmark acquisitions across Holmby Hills, Bel-Air, and Point Dume, Victoria represents prominent tech founders, royal families, and institutional estates.",
    phone: "+1 (310) 849-2201",
    email: "v.sterling@cloud9consultant.com",
  },
  {
    name: "Julian Vance",
    role: "Principal Manhattan & Tribeca Broker",
    location: "New York City",
    image: "/images/team/agent-2.jpg",
    bio: "Renowned across Wall Street and global family offices, Julian specializes in landmark cast-iron lofts and trophy sky penthouses along Billionaires' Row and Central Park South.",
    phone: "+1 (212) 980-4520",
    email: "j.vance@cloud9consultant.com",
  },
  {
    name: "Sofia De La Rosa",
    role: "Head of Waterfront & Coastal Acquisitions",
    location: "Miami Beach & Palm Beach",
    image: "/images/team/agent-3.jpg",
    bio: "Sofia directs premier waterfront transactions across Star Island, Indian Creek, and Biscayne Bay, providing expert counsel on deep-water mooring rights and architectural restorations.",
    phone: "+1 (305) 551-7789",
    email: "s.delarosa@cloud9consultant.com",
  },
  {
    name: "Marcus Thorne",
    role: "Alpine & Mountain Sanctuary Director",
    location: "Aspen & Lake Tahoe",
    image: "/images/team/agent-4.jpg",
    bio: "A trusted advisor for ski-in/ski-out timber compounds and lakeside architectural preserves, Marcus navigates complex environmental conservation covenants and sovereign trusts.",
    phone: "+1 (970) 925-1100",
    email: "m.thorne@cloud9consultant.com",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white pt-32 pb-28">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-28">
        {/* Page Hero Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-semibold tracking-[0.25em] uppercase">
              <Compass className="w-3 h-3" />
              <span>Agency Provenance</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08]">
              The Sovereignty of Space &{" "}
              <span className="italic font-light gold-gradient-text">
                Architectural Truth.
              </span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              Founded in 2008, Cloud 9 Consultant was established to bridge the gap between institutional financing and premier real estate. We are your trusted partner for loans and luxury property solutions, delivering end-to-end guidance from capital acquisition to deed registration.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Our firm serves high-net-worth individuals, entrepreneurs, and global investors with an integrated triad: bespoke loan advisory, vetted residential and commercial properties, and personalized financial solutions.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
            <Image
              src="/images/hero-bg.jpg"
              alt="Cloud 9 Consultant Headquarters"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                Foundational Doctrine
              </span>
              <p className="font-serif text-sm text-white italic mt-1">
                &ldquo;Architecture is inhabited sculpture. To represent it demands reverence, scholarship, and unwavering discretion.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Statistical Proof of Excellence */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          <div className="space-y-2 border-r border-white/5 last:border-none">
            <span className="font-serif text-4xl md:text-5xl font-bold text-white block">
              ₹3,500 Cr+
            </span>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Lifetime Volume
            </span>
            <p className="text-[11px] text-zinc-400">
              Closed across North America, Europe and India
            </p>
          </div>

          <div className="space-y-2 border-r border-white/5 last:border-none">
            <span className="font-serif text-4xl md:text-5xl font-bold text-white block">
              140+
            </span>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Trophy Estates
            </span>
            <p className="text-[11px] text-zinc-400">
              Average valuation exceeding ₹25 Cr
            </p>
          </div>

          <div className="space-y-2 border-r border-white/5 last:border-none">
            <span className="font-serif text-4xl md:text-5xl font-bold text-white block">
              98.4%
            </span>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Off-Market Transacted
            </span>
            <p className="text-[11px] text-zinc-400">
              Strict multi-lateral non-disclosure
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-serif text-4xl md:text-5xl font-bold text-white block">
              18 Yrs
            </span>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
              Unblemished Reputation
            </span>
            <p className="text-[11px] text-zinc-400">
              Trusted by sovereign family offices
            </p>
          </div>
        </div>

        {/* The Four Core Tenets */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
              Operational Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
              The Four Tenets of Cloud 9 Representation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Ironclad Discretion
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We protect client identity through strict non-disclosure agreements, shielded escrow structures, and private showings without public exposure.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Architectural Vetting
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Prior to inclusion, every property undergoes structural engineering reviews, provenance verification, and lighting condition audits.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Global Liquid Capital
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Direct relationships with private banking divisions in Geneva, Zurich, London, Singapore, and New York ensure verified liquidity.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">
                Single Partner Care
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our clients work exclusively with senior partners — never junior agents or external listing assistants. Direct access at all times.
              </p>
            </div>
          </div>
        </div>

        {/* Private Partners Team Section */}
        <div id="team" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                Senior Advisory Partners
              </h2>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Each partner manages a capped portfolio of high-net-worth relationships to guarantee undivided strategic focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl overflow-hidden glass-card border border-white/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/40"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#d4af37] block">
                        {member.location}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-white">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-[#d4af37] font-medium">
                      {member.role}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-white/[0.06] text-xs space-y-1 text-zinc-400">
                  <a
                    href={`tel:${member.phone}`}
                    className="block hover:text-white transition-colors"
                  >
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-[#d4af37] hover:underline truncate"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="glass-panel rounded-3xl p-10 md:p-16 border border-[#d4af37]/30 text-center space-y-6 relative overflow-hidden">
          <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center mx-auto text-[#d4af37]">
            <Compass className="w-6 h-6" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white max-w-2xl mx-auto">
            Entrust Your Real Estate Legacy to Proven Hands
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Whether seeking an off-market acquisition or contemplating the representation of a generational trophy property, our founding partners are available for confidential consultations.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-xl shadow-[#d4af37]/25"
            >
              <span>Schedule Confidential Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
