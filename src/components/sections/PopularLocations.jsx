import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PopularLocations({ locations = [] }) {
  const displayLocations = locations.slice(0, 5);

  return (
    <section className="bg-surface-container-low py-space-lg w-full border-y border-outline-variant/30">
      <Container className="space-y-space-md">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-label-lg uppercase tracking-widest text-secondary block font-medium">
            Global Reach
          </span>
          <h2 className="font-headline-lg text-primary">
            Explore Popular Locations
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Discover premier residential enclaves across cultural capitals and
            burgeoning design hubs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {displayLocations.map((loc, idx) => (
            <Link
              key={loc.id}
              href={`/properties?location=${loc.slug}`}
              className={`relative h-80 rounded-2xl overflow-hidden group flex flex-col justify-end p-5 shadow-xs hover:shadow-xl transition-all duration-350 border border-outline-variant hover:border-secondary hover:-translate-y-1 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Image
                src={loc.image.src}
                alt={loc.image.alt || loc.name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e08]/95 via-[#040e08]/30 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-1">
                <h3 className="font-headline-sm text-xl text-white drop-shadow-sm group-hover:text-secondary-fixed transition-colors">
                  {loc.name}
                </h3>
                <p className="text-xs text-[#dfc293] font-medium tracking-wide">
                  {loc.propertyCount || 6} Listings
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
