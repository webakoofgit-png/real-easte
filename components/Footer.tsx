"use client";

import Link from "next/link";
import Image from "next/image";
import { Compass, Mail, Phone, MapPin, ArrowRight, ShieldCheck, Award, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#060709] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-zinc-400">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative h-20 w-56 -ml-2 mb-1 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Cloud 9 Consultant"
                  fill
                  sizes="224px"
                  className="object-contain object-left drop-shadow-lg"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-md">
              Your trusted partner for loans, property acquisitions, and private financial solutions. Curating the world’s most distinguished architectural landmarks and bespoke financing options.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Licensed Broker & Financial Advisory</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>₹3,500 Cr+ Volume Closed</span>
              </div>
            </div>
          </div>

          {/* Destinational Portfolios */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5 font-serif">
              Destinations
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/properties?location=Beverly+Hills" className="hover:text-[#d4af37] transition-colors">
                  Beverly Hills, CA
                </Link>
              </li>
              <li>
                <Link href="/properties?location=New+York" className="hover:text-[#d4af37] transition-colors">
                  Manhattan & Tribeca, NY
                </Link>
              </li>
              <li>
                <Link href="/properties?location=Miami" className="hover:text-[#d4af37] transition-colors">
                  Star Island, Miami FL
                </Link>
              </li>
              <li>
                <Link href="/properties?location=Aspen" className="hover:text-[#d4af37] transition-colors">
                  Aspen Mountain, CO
                </Link>
              </li>
              <li>
                <Link href="/properties?location=Malibu" className="hover:text-[#d4af37] transition-colors">
                  Point Dume, Malibu CA
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5 font-serif">
              The Firm
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#d4af37] transition-colors">
                  Current Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-[#d4af37] transition-colors">
                  Private Advisors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Concierge Desk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Private Valuations
                </Link>
              </li>
            </ul>
          </div>

          {/* Private Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5 font-serif">
              Private Ledger
            </h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Receive confidential off-market acquisitions and quarterly prime market intelligence.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter private email"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#d4af37] hover:bg-[#e6ca65] text-black rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-zinc-500 block">Strictly confidential. No unsolicited mailings.</span>
            </form>
          </div>
        </div>

        {/* Global Addresses & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Beverly Hills • New York • Miami • Aspen • London
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              +1 (800) 940-CLOUD (2568)
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              inquiries@cloud9consultant.com
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 Cloud 9 Consultant. All rights reserved.</span>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Terms of Representation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
