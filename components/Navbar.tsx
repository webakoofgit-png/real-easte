"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collection", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About Us", href: "/about" },
    { name: "Contact & Concierge", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-nav py-2.5 shadow-2xl shadow-black/50"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-12 w-36 sm:h-14 sm:w-44 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Cloud 9 Consultant"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left drop-shadow-md"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-xs tracking-[0.2em] uppercase font-medium transition-colors py-1",
                    isActive
                      ? "text-[#d4af37]"
                      : "text-zinc-300 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Schedule Viewing / Contact */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all duration-300 shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40"
            >
              <span>Schedule Tour</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#d4af37]" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-100" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col pt-28 px-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-serif tracking-widest uppercase transition-colors flex items-center justify-between pb-4 border-b border-zinc-800/80",
                    isActive ? "text-[#d4af37]" : "text-zinc-300 hover:text-white"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65]"
            >
              Schedule Private Viewing
            </Link>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs mt-4">
              <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Direct Concierge: +1 (800) 940-CLOUD (2568)</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
