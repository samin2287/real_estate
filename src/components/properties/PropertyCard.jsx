import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Bed, Bath, Maximize2, ArrowRight } from "lucide-react";
import SaveButton from "@/components/properties/SaveButton";
import { formatPrice } from "@/lib/properties";

export default function PropertyCard({ property }) {
  if (!property) return null;

  const coverImage = property.images?.[0] || {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    alt: property.title,
  };

  const formattedPrice = formatPrice(
    property.price,
    property.currency,
    property.rentPeriod
  );

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant hover:border-secondary transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(3,18,11,0.08)] dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.55)]">
      {/* Image Preview Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container-high">
        <Image
          src={coverImage.src}
          alt={coverImage.alt || property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Cinematic Dark Gradient for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

        {/* Status / Category Badge */}
        {property.badge && (
          <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-secondary-fixed border border-secondary/30 text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-medium">
            {property.badge}
          </span>
        )}

        {/* Favorite Save Button */}
        <div className="absolute top-4 right-4 z-10">
          <SaveButton propertyId={property.id} />
        </div>

        {/* Price & Location Banner on Image */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="font-headline-md text-2xl text-white font-normal drop-shadow-md">
            {formattedPrice}
          </span>
          <span className="text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/95 flex items-center gap-1.5 border border-white/10 shadow-xs">
            <MapPin size={12} className="text-secondary" />
            <span>{property.locationName}</span>
          </span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-5">
        <div className="space-y-1.5">
          <h3 className="font-headline-sm text-xl text-primary group-hover:text-secondary transition-colors line-clamp-1">
            <Link href={`/properties/${property.slug}`}>
              {property.title}
            </Link>
          </h3>
          <p className="text-xs text-on-surface-variant flex items-center gap-1.5 line-clamp-1">
            <MapPin size={13} className="text-secondary shrink-0" />
            <span>{property.address.line1}, {property.address.city}</span>
          </p>
          {property.description && (
            <p className="text-xs text-on-surface-variant line-clamp-2 pt-1 leading-relaxed">
              {property.description}
            </p>
          )}
        </div>

        {/* Property Specs Pill Strip */}
        <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs text-on-surface-variant">
          <span className="flex items-center gap-1.5 font-medium">
            <Bed size={15} className="text-secondary" />
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Bath size={15} className="text-secondary" />
            {property.bathrooms} Baths
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Maximize2 size={13} className="text-secondary" />
            {property.areaSqFt.toLocaleString()} sq ft
          </span>
        </div>

        {/* Action Button */}
        <Link
          href={`/properties/${property.slug}`}
          className="group/btn w-full bg-surface-container-high hover:bg-primary text-primary hover:text-on-primary py-2.5 rounded-lg text-center text-xs uppercase tracking-widest font-medium transition-all duration-250 flex items-center justify-center gap-2 border border-outline-variant/60 hover:border-transparent cursor-pointer shadow-2xs hover:shadow-sm"
        >
          <span>View Details</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
