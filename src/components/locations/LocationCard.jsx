import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function LocationCard({ location, span = "col-span-1 md:col-span-1" }) {
  if (!location) return null;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-surface-container-low shadow-md transition-all duration-350 hover:shadow-2xl flex flex-col justify-between min-h-[450px] border border-outline-variant hover:border-secondary ${span}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={location.image.src}
          alt={location.image.alt || location.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Consistent deep dark cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040e08]/95 via-[#040e08]/50 to-black/20 pointer-events-none" />
      </div>

      {/* Top Header */}
      <div className="relative z-10 p-6 sm:p-8 flex justify-between items-start">
        <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white/95 border border-white/15 font-label-md uppercase tracking-widest rounded-full text-[11px]">
          {location.country === "UK" ? "United Kingdom" : "United States"}
        </span>
        <Link
          href={`/properties?location=${location.slug}`}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-secondary hover:text-on-secondary hover:border-transparent transition-all shadow-sm"
          aria-label={`Explore ${location.name} portfolio`}
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-secondary-fixed text-xs tracking-wider uppercase font-medium">
          <span>{location.propertyCount || 6} Properties</span>
          <span className="text-white/40">•</span>
          <span>Avg. {location.averagePrice}</span>
        </div>

        <h3 className="font-headline-lg text-3xl text-white">
          {location.name}
        </h3>

        <p className="font-body-md text-white/80 line-clamp-2 leading-relaxed text-sm">
          {location.description}
        </p>

        <div className="pt-2">
          <Link
            href={`/properties?location=${location.slug}`}
            className="inline-flex items-center gap-2 text-white font-medium hover:text-secondary-fixed transition-colors text-xs uppercase tracking-widest"
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
