import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Private Concierge & Offices | Cloud 9 Consultant",
  description:
    "Direct contact coordinates for Cloud 9 Consultant's global advisory suites in Beverly Hills, Manhattan, Miami Beach, and Aspen.",
};

const offices = [
  {
    city: "Beverly Hills",
    suite: "Penthouse Suite 1200",
    address: "9601 Wilshire Boulevard, Beverly Hills, CA 90212",
    phone: "+1 (310) 849-2201",
    email: "beverlyhills@cloud9consultant.com",
    hours: "Mon – Fri: 8:00 AM – 7:00 PM PST",
  },
  {
    city: "Manhattan",
    suite: "Executive Floor 48",
    address: "767 Fifth Avenue, New York, NY 10153",
    phone: "+1 (212) 980-4520",
    email: "manhattan@cloud9consultant.com",
    hours: "Mon – Fri: 8:30 AM – 7:30 PM EST",
  },
  {
    city: "Miami Beach",
    suite: "Architectural Suite 700",
    address: "1111 Lincoln Road, Miami Beach, FL 33139",
    phone: "+1 (305) 551-7789",
    email: "miami@cloud9consultant.com",
    hours: "Mon – Fri: 9:00 AM – 6:30 PM EST",
  },
  {
    city: "Aspen",
    suite: "The Alpine Reserve",
    address: "520 East Cooper Avenue, Aspen, CO 81611",
    phone: "+1 (970) 925-1100",
    email: "aspen@cloud9consultant.com",
    hours: "Mon – Sat: 8:00 AM – 6:00 PM MST",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08090c] text-white pt-32 pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-1/3 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-semibold tracking-[0.25em] uppercase">
            <Compass className="w-3 h-3" />
            <span>Direct Concierge Desk</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            Initiate Confidential{" "}
            <span className="italic font-light gold-gradient-text">
              Representation.
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Our private advisors stand ready to assist discerning principals and family office trustees with acquisitions, valuations, and discreet divestments globally.
          </p>
        </div>

        {/* Primary Contact Row: Form and Concierge Fast-Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Hotlines & Protocols */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Concierge Hotline Card */}
            <div className="glass-panel rounded-3xl p-8 border border-[#d4af37]/30 space-y-6 shadow-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
                Direct Telephony Desk
              </span>

              <div>
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  Immediate Principal Dispatch
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  For urgent weekend inquiries, private aviation arrival coordination, or same-day estate viewings:
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0e1117] border border-white/10 space-y-3">
                <a
                  href="tel:+18009402872"
                  className="flex items-center gap-3 text-lg font-serif font-bold text-white hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <span>+1 (800) 940-CLOUD (2568)</span>
                </a>
                <p className="text-[11px] text-zinc-400">
                  Toll-Free Global Concierge (Direct connection to Managing Partner)
                </p>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>private-desk@cloud9consultant.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>PGP Key ID: 0x8FA43E29 (2048-bit RSA)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Continuous 24/7 Standby Across Timezones</span>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                <Lock className="w-4 h-4 text-[#d4af37]" />
                <span>Sovereign Confidentiality Covenant</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Every transmission to Cloud 9 Consultant is routed through encrypted TLS 1.3 tunnels and stored on hardened private servers. We never sell, lease, or monetize client transaction histories or identity parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Global Advisory Suites Grid */}
        <div className="pt-12 border-t border-white/[0.08] space-y-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4af37] block mb-2">
              Physical Presence
            </span>
            <h2 className="font-serif text-3xl font-normal text-white">
              Global Advisory Suites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{office.city}</span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white mb-2">
                    {office.suite}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-zinc-300">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{office.phone}</span>
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 hover:text-[#d4af37] transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="truncate">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
