"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight, Bed, Bath, Maximize2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { useSavedProperties } from "@/context/SavedPropertiesContext";
import { formatPrice } from "@/lib/properties";

export default function SavedPropertiesPage() {
  const { savedProperties, removeSave, savedCount, hydrated } =
    useSavedProperties();

  if (!hydrated) {
    return (
      <Container className="py-24 text-center">
        <div className="animate-pulse space-y-4 max-w-md mx-auto">
          <div className="w-12 h-12 bg-surface-container rounded-full mx-auto"></div>
          <div className="h-6 bg-surface-container rounded w-48 mx-auto"></div>
          <div className="h-4 bg-surface-container rounded w-64 mx-auto"></div>
        </div>
      </Container>
    );
  }

  // Calculate dynamic summary stats
  const totalValuation = savedProperties.reduce(
    (sum, p) => sum + (p.price || 0),
    0
  );
  const avgSqFt =
    savedProperties.length > 0
      ? Math.round(
          savedProperties.reduce((sum, p) => sum + (p.areaSqFt || 0), 0) /
            savedProperties.length
        )
      : 0;

  const formattedValuation =
    totalValuation >= 1000000
      ? `$${(totalValuation / 1000000).toFixed(1)}M`
      : `$${(totalValuation / 1000).toFixed(0)}k`;

  return (
    <div className="w-full pb-space-xl">
      <Container className="pt-12 pb-8">
        {/* Header & Stats Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart size={18} className="fill-[#ba1a1a] text-[#ba1a1a]" />
              <span className="font-label-md uppercase tracking-widest text-on-surface-variant">
                Curated Portfolio
              </span>
            </div>
            <h1 className="font-headline-xl text-primary">Saved Residences</h1>
            <p className="font-body-md text-on-surface-variant max-w-xl leading-relaxed">
              Your personal collection of architectural masterworks and secluded
              estates, synchronized across your sessions.
            </p>
          </div>

          {/* Stats Badge Strip */}
          {savedProperties.length > 0 && (
            <div className="flex items-center gap-6 bg-surface-container-low px-6 py-4 rounded-xl border border-outline-variant/20 shadow-sm">
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-[10px]">
                  Bookmarked
                </div>
                <div className="font-headline-md text-primary text-2xl font-light">
                  {savedCount}
                </div>
              </div>
              <div className="w-[1px] h-8 bg-outline-variant/30"></div>
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-[10px]">
                  Total Valuation
                </div>
                <div className="font-headline-md text-primary text-2xl font-light">
                  {formattedValuation}
                </div>
              </div>
              <div className="w-[1px] h-8 bg-outline-variant/30"></div>
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-[10px]">
                  Avg. Sq. Ft.
                </div>
                <div className="font-headline-md text-primary text-2xl font-light">
                  {avgSqFt.toLocaleString()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Section: Grid or Empty State */}
        {savedProperties.length === 0 ? (
          <div className="py-20 px-6 text-center bg-surface-container-low rounded-2xl border border-outline-variant/30 max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto text-outline">
              <Heart size={28} />
            </div>
            <h3 className="font-headline-md text-2xl text-primary">
              No Saved Residences Yet
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Explore our architectural residences and tap the heart icon on any
              masterwork to preserve it in your private portfolio.
            </p>
            <div className="pt-4">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
              >
                <span>Browse Curated Portfolio</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedProperties.map((property) => (
              <div
                key={property.id}
                className="group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-350 border border-outline-variant hover:border-secondary hover:-translate-y-1.5"
              >
                {/* Image */}
                <div className="relative w-full h-80 overflow-hidden bg-surface-container-high">
                  <Image
                    src={property.images[0]?.src || ""}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Remove Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <button
                      type="button"
                      onClick={() => removeSave(property.id)}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-red-400 hover:bg-red-600 hover:text-white transition-all shadow-sm cursor-pointer"
                      title="Remove from saved"
                      aria-label={`Remove ${property.title} from saved`}
                    >
                      <Heart size={18} className="fill-current" />
                    </button>
                  </div>

                  {property.badge && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="bg-black/60 backdrop-blur-md text-secondary-fixed border border-secondary/30 font-label-md uppercase px-3 py-1 rounded-full tracking-wider text-[11px]">
                        {property.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-label-md text-on-surface-variant uppercase tracking-widest text-[11px]">
                        {property.locationName}
                      </span>
                      <h3 className="font-headline-md text-2xl text-primary mt-1 group-hover:text-secondary transition-colors">
                        <Link href={`/properties/${property.slug}`}>
                          {property.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-md text-2xl text-primary">
                        {formatPrice(
                          property.price,
                          property.currency,
                          property.rentPeriod
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-outline-variant/20 text-xs text-on-surface-variant font-medium">
                    <div className="flex items-center gap-1.5">
                      <Bed size={15} className="text-secondary" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={15} className="text-secondary" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 size={14} className="text-secondary" />
                      <span>{property.areaSqFt.toLocaleString()} sq ft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/properties/${property.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-secondary transition-colors uppercase tracking-wider"
                    >
                      <span>Architectural Dossier</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      href={`/contact?intent=buy&property=${property.slug}`}
                      className="bg-primary text-on-primary px-4 py-2 text-xs uppercase tracking-wider font-medium rounded hover:opacity-90 transition-opacity"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
