"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Bed, Bath, Square, MapPin, Sparkles } from "lucide-react";
import { Property } from "@/lib/properties";

interface HorizontalListingsProps {
  properties: Property[];
}

export default function HorizontalListings({
  properties,
}: HorizontalListingsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!triggerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth + (window.innerWidth < 768 ? 60 : 160);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [properties]);

  return (
    <section
      id="horizontal-showcase"
      ref={sectionRef}
      className="relative bg-[#090a0e] text-white overflow-hidden"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={triggerRef}
        className="h-screen w-full flex flex-col justify-between py-10 md:py-14 overflow-hidden relative"
      >
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-4 z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Signature Curation</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-white">
              The Flagship{" "}
              <span className="italic font-light gold-gradient-text">
                Private Collection
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-zinc-400 max-w-xs hidden md:block">
              Scroll downward to navigate through world-class residences represented by Cloud 9 Consultant.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors"
            >
              <span>View All ({properties.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-4 mb-2 z-10">
          <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] w-0 transition-all duration-75"
            />
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 md:px-16 items-center will-change-transform my-auto"
        >
          {properties.map((item, index) => (
            <div
              key={item.id}
              className="w-[85vw] sm:w-[480px] md:w-[560px] lg:w-[620px] shrink-0 glass-card rounded-3xl overflow-hidden group transition-all duration-500 hover:border-[#d4af37]/40 shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 620px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top tags */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                    {item.badge || item.type}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                    0{index + 1} / 0{properties.length}
                  </span>
                </div>

                {/* Price banner */}
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] block font-semibold mb-1">
                    Asking Valuation
                  </span>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                    {item.formattedPrice}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-white group-hover:text-[#f3e5ab] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/[0.08] text-xs text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Square className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{item.sqft.toLocaleString()} SqFt</span>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={item.agent.image}
                        alt={item.agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-zinc-400">
                      Represented by <strong className="text-white font-medium">{item.agent.name}</strong>
                    </span>
                  </div>

                  <Link
                    href={`/properties/${item.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-all duration-300"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Final Callout Card in Track */}
          <div className="w-[80vw] sm:w-[380px] shrink-0 glass-panel rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-6 border border-[#d4af37]/30">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium text-white mb-2">
                Off-Market Portfolio
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                Over 60% of our acquisitions are traded confidentially under strict non-disclosure agreements.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all shadow-lg shadow-[#d4af37]/20"
            >
              Request Access
            </Link>
          </div>
        </div>

        {/* Bottom subtle indicator */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between text-[11px] text-zinc-500 z-10">
          <span>Horizontal Showcase • Powered by GSAP ScrollTrigger & Lenis</span>
          <span>Cloud 9 Consultant • Loans & Property Solutions</span>
        </div>
      </div>
    </section>
  );
}
