"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight, Play, Pause, ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
          "-=0.7"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const scrollToExplore = () => {
    const nextSection = document.getElementById("horizontal-showcase");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-black"
    >
      {/* Background Media: Cinematic Video with Image Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/videos/why-us.mp4" type="video/mp4" />
        </video>

        {/* Deep luxury gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#08090c]/40 to-[#08090c]" />
      </div>

      {/* Floating Video Controller */}
      <div className="absolute top-28 right-8 z-20 hidden md:flex items-center gap-2">
        <button
          onClick={toggleVideo}
          aria-label={isPlaying ? "Pause background atmosphere" : "Play background atmosphere"}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto text-center lg:text-left pt-8">
        <div className="max-w-4xl mx-auto lg:mx-0 space-y-6">
          {/* Subtle Tag badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-semibold tracking-[0.18em] uppercase">
            <div className="relative w-4 h-4 shrink-0">
              <Image src="/images/logo-emblem.png" alt="Cloud 9" fill className="object-contain" />
            </div>
            <span>Cloud 9 Consultant • Loans | Property | Financial Solutions</span>
          </div>

          {/* Kinetic Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08]"
          >
            Where Rare Architecture{" "}
            <span className="italic font-light gold-gradient-text">
              Meets Timeless
            </span>{" "}
            Prestige.
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            Representing the world’s most iconic trophy residences, private island sanctuaries, and ultra-high-net-worth acquisitions across Beverly Hills, Manhattan, Miami, and Aspen.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Link
              href="/properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-[#d4af37] hover:bg-[#e6ca65] transition-all duration-300 shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/45"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white glass-panel hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <span>Private Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Key Metrics Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-12">
        <div
          ref={statsRef}
          className="glass-panel rounded-2xl p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center border border-white/10"
        >
          <div className="space-y-1 text-center lg:text-left border-r border-white/5 last:border-none">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              ₹3,500 Cr+
            </span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Loans & Properties Closed
            </p>
          </div>

          <div className="space-y-1 text-center lg:text-left border-r border-white/5 last:border-none">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              140+
            </span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Trophy Residences Sold
            </p>
          </div>

          <div className="space-y-1 text-center lg:text-left border-r border-white/5 last:border-none">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              98.4%
            </span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Off-Market Discretion
            </p>
          </div>

          <div className="space-y-1 text-center lg:text-left">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight">
              15+
            </span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400">
              Prime Global Hubs
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToExplore}
            aria-label="Scroll to collection"
            className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-[#d4af37] transition-colors"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          </button>
        </div>
      </div>
    </section>
  );
}
