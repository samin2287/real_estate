import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import Container from "@/components/ui/Container";

export default function FeaturedProperties({ properties = [] }) {
  const displayProperties = properties.slice(0, 6);

  return (
    <section className="py-space-lg w-full">
      <Container className="space-y-space-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-label-lg uppercase tracking-widest text-secondary block">
              Exclusive Portfolio
            </span>
            <h2 className="font-headline-lg text-primary">
              Featured Architectural Masterpieces
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs uppercase tracking-wider font-medium text-primary hover:text-secondary flex items-center gap-1.5 transition-colors"
          >
            <span>View All Listings</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
