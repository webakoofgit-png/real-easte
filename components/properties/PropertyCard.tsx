"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, MapPin, ArrowUpRight } from "lucide-react";
import { Property } from "@/lib/properties";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
  priority?: boolean;
}

export default function PropertyCard({
  property,
  className,
  priority = false,
}: PropertyCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#d4af37]/10 hover:border-[#d4af37]/30",
        className
      )}
    >
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          {property.badge ? (
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
              {property.badge}
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
              {property.type}
            </span>
          )}

          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#d4af37] text-black">
            {property.status}
          </span>
        </div>

        {/* Price on bottom left of image */}
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-2xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            {property.formattedPrice}
          </p>
        </div>

        {/* Quick view button */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Property Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-serif text-lg font-medium text-white mb-2 group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
            {property.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
            {property.tagline}
          </p>
        </div>

        <div>
          {/* Key Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.08] text-xs text-zinc-300 mb-4">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Square className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{property.sqft.toLocaleString()} SqFt</span>
            </div>
          </div>

          {/* Action Link */}
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-[#d4af37] group-hover:text-white transition-colors"
          >
            <span>Explore Residence</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
