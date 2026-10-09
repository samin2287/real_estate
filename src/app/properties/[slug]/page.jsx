import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Share2,
  Check,
  Shield,
  Sparkles,
  Home,
  SlidersHorizontal,
  Wine,
  Waves,
  Lock,
  Maximize,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PropertyGallery from "@/components/properties/PropertyGallery";
import SaveButton from "@/components/properties/SaveButton";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyInquiryForm from "@/components/forms/PropertyInquiryForm";
import {
  getPropertyBySlug,
  getAllProperties,
  getSimilarProperties,
  getAgentBySlug,
  formatPrice,
} from "@/lib/properties";

export async function generateStaticParams() {
  const all = getAllProperties();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) {
    return { title: "Property Not Found" };
  }
  return {
    title: `${property.title} | ${property.locationName}`,
    description: property.description,
  };
}

export default async function PropertyDetailsPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const agent = getAgentBySlug(property.agentSlug);
  const similar = getSimilarProperties(property.slug, 3);
  const formattedPrice = formatPrice(
    property.price,
    property.currency,
    property.rentPeriod
  );

  const amenityIcons = {
    "Infinity Pool": Waves,
    "Smart Home Automation": SlidersHorizontal,
    "Sub-Zero Kitchen": Home,
    "Climate Wine Cellar": Wine,
    "Private Security System": Lock,
    "Floor-to-Ceiling Glass": Maximize,
  };

  return (
    <div className="w-full pb-space-xl">
      <Container className="pt-8 pb-4">
        {/* Breadcrumb & Top Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-label-md uppercase tracking-widest text-on-surface-variant flex-wrap"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link
              href="/properties"
              className="hover:text-primary transition-colors"
            >
              Properties
            </Link>
            <span className="text-outline-variant">/</span>
            <Link
              href={`/properties?location=${property.locationSlug}`}
              className="hover:text-primary transition-colors"
            >
              {property.locationName.split(",")[0]}
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-medium">{property.title}</span>
          </nav>

          <div className="flex items-center gap-3">
            <SaveButton propertyId={property.id} showLabel={true} />
          </div>
        </div>

        {/* Gallery Section */}
        <PropertyGallery images={property.images} title={property.title} />

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
          {/* Left Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-space-lg">
            {/* Title & Price Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-label-md uppercase rounded-full">
                  {property.propertyTypeLabel}
                </span>
                <span className="text-on-surface-variant text-sm flex items-center gap-1">
                  <MapPin size={16} className="text-secondary" />
                  {property.address.line1}, {property.address.city},{" "}
                  {property.address.postcode}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="font-headline-xl text-primary">
                    {property.title}
                  </h1>
                  {property.subtitle && (
                    <p className="text-on-surface-variant text-sm mt-1">
                      {property.subtitle}
                    </p>
                  )}
                </div>
                <div className="font-headline-lg text-secondary shrink-0">
                  {formattedPrice}
                </div>
              </div>
            </div>

            {/* Key Specs Pill Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/20">
              <div className="space-y-1">
                <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
                  Bedrooms
                </span>
                <p className="font-headline-md text-primary">
                  {property.bedrooms} Beds
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
                  Bathrooms
                </span>
                <p className="font-headline-md text-primary">
                  {property.bathrooms} Baths
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
                  Living Space
                </span>
                <p className="font-headline-md text-primary">
                  {property.areaSqFt.toLocaleString()} sq ft
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-label-md uppercase tracking-wider text-on-surface-variant">
                  Lot Size
                </span>
                <p className="font-headline-md text-primary">
                  {property.details?.lotSize || "Private Plot"}
                </p>
              </div>
            </div>

            {/* Architectural Vision */}
            <div className="space-y-6">
              <h3 className="font-headline-md text-2xl text-primary">
                Architectural Vision
              </h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {property.vision || property.description}
              </p>
              {property.features && property.features.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-label-lg uppercase tracking-wider text-secondary">
                    Architectural Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-on-surface-variant">
                    {property.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={16} className="text-secondary mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Property Specifications Table */}
            <div className="space-y-6">
              <h3 className="font-headline-md text-2xl text-primary">
                Property Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Year Built</span>
                  <span className="font-medium text-primary text-sm">
                    {property.details?.yearBuilt || 2022}
                  </span>
                </div>
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Property Type</span>
                  <span className="font-medium text-primary text-sm">
                    {property.propertyTypeLabel}
                  </span>
                </div>
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Parking</span>
                  <span className="font-medium text-primary text-sm">
                    {property.details?.parking || "Private Garage"}
                  </span>
                </div>
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Tenure</span>
                  <span className="font-medium text-primary text-sm">
                    {property.details?.tenure || "Freehold"}
                  </span>
                </div>
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Efficiency Rating</span>
                  <span className="font-medium text-primary text-sm">
                    {property.details?.epcRating || "A+ High Efficiency"}
                  </span>
                </div>
                <div className="flex justify-between p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <span className="text-on-surface-variant text-sm">Service / HOA</span>
                  <span className="font-medium text-primary text-sm">
                    {property.details?.hoaFees || "Included"}
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Amenities */}
            <div className="space-y-6">
              <h3 className="font-headline-md text-2xl text-primary">
                Selected Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities?.map((amenity, idx) => {
                  const Icon = amenityIcons[amenity] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20"
                    >
                      <Icon size={18} className="text-secondary shrink-0" />
                      <span className="text-sm font-medium text-primary">
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="space-y-6 pt-6">
              <h3 className="font-headline-md text-2xl text-primary">
                Location Map
              </h3>
              <div
                className="w-full h-80 rounded-2xl bg-cover bg-center shadow-sm relative overflow-hidden flex items-end p-6 border border-outline-variant/20"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7wquMPbdkzbKxtquu5eLlOFZbW7cvlxSNgEF-Km6xpOEC7wJse8lTU2tnPwwAGSrOXjwWcRHbhIR9UWjPEwlzwKrVUxb4yGSC_SXQeFkmGBoiK6R5QV5oFhGrbgkjEKVGl8VjVbj--aig__dEq1LLofG9NfY9Bxs36oOiry27MCzk9wH90SIS02a6LWJ32eB2ka0Xo3bCakQGOPp7GlkHUkIHI9uP-1pCzqXfyjxSKKJ70DrgqMD')",
                }}
              >
                <div className="bg-surface/90 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-2 text-xs text-primary font-medium">
                  <MapPin size={16} className="text-secondary" />
                  <span>
                    {property.address.line1}, {property.address.city} (Precise location shared upon inquiry)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <PropertyInquiryForm agent={agent} propertyTitle={property.title} />
          </div>
        </div>

        {/* Similar Luxury Properties Section */}
        {similar.length > 0 && (
          <section className="mt-space-xl pt-space-lg border-t border-outline-variant/20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-label-md uppercase tracking-widest text-on-surface-variant block mb-1">
                  Curated Selection
                </span>
                <h2 className="font-headline-lg text-primary">
                  Similar Luxury Properties
                </h2>
              </div>
              <Link
                href="/properties"
                className="text-xs uppercase tracking-wider font-medium text-secondary hover:underline flex items-center gap-1.5"
              >
                <span>View All Listings</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
