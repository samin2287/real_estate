"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import LocationCard from "@/components/locations/LocationCard";
import { locations } from "@/data/locations";
import { Globe, ArrowRight } from "lucide-react";

export default function LocationsContent() {
  const [marketFilter, setMarketFilter] = useState("all"); // 'all' | 'UK' | 'US'

  const filteredLocations =
    marketFilter === "all"
      ? locations
      : locations.filter((loc) => loc.country === marketFilter);

  return (
    <div className="w-full pb-space-xl">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#040e08] text-white py-space-xl px-6 lg:px-12 overflow-hidden -mt-20 pt-36">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEEI2ulzAqcXwiGLj5v4Wc1i2hAgtVmR7rnbiw_-qyz2gxAzUL89UgLeQ8wL2GecJueFcQuBUpXAQxihN2dNfTPlqiyLDW1u8AI0z8OIYiblcGYKLoLMy1L0Y-rjaw8yHS1lLHETtZQpLHrOivpyofX5cGxY7lC6y5azbK9DWgLp2MEuDcVImjUP-Ha61IlOdxejuT9r9ek7xkgeJVZMcTBJkPkuOJk5ID_1_YIiejEq3SXtvpWLJL')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040e08] via-[#040e08]/85 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col items-start gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#dfc293]/30 text-[#dfc293] text-xs font-label-md uppercase tracking-widest">
            <Globe size={14} />
            <span>Global Portfolio</span>
          </div>

          <h1 className="font-headline-xl text-4xl md:text-5xl max-w-3xl text-white">
            Architectural Enclaves of Distinction
          </h1>

          <p className="font-body-lg text-white/80 max-w-xl font-light leading-relaxed">
            Explore our curated collection of premier global addresses. From historic
            stone facades in Edinburgh to vanguard glass sanctuaries in Austin.
          </p>
        </div>
      </section>

      {/* Filter / Quick Navigation Bar */}
      <section className="sticky top-20 z-40 bg-surface/90 backdrop-blur-xl py-4 px-6 lg:px-12 shadow-sm border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setMarketFilter("all")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-all font-medium ${
                marketFilter === "all"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
            >
              All Locations ({locations.length})
            </button>
            <button
              type="button"
              onClick={() => setMarketFilter("UK")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-all font-medium ${
                marketFilter === "UK"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
            >
              United Kingdom
            </button>
            <button
              type="button"
              onClick={() => setMarketFilter("US")}
              className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-all font-medium ${
                marketFilter === "US"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
            >
              United States
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
            <span>Showing {filteredLocations.length} Regions</span>
          </div>
        </div>
      </section>

      {/* Locations Bento Grid */}
      <Container className="py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredLocations.map((loc, idx) => {
            // Apply bento layout spanning
            let spanClass = "lg:col-span-4";
            if (marketFilter === "all") {
              if (idx === 0) spanClass = "lg:col-span-8"; // London wide
              else if (idx === 1) spanClass = "lg:col-span-4"; // Brooklyn
              else if (idx === 5) spanClass = "lg:col-span-6"; // Miami
              else if (idx === 6) spanClass = "lg:col-span-6"; // Beverly Hills
            } else {
              spanClass = "lg:col-span-6";
            }

            return (
              <LocationCard key={loc.id} location={loc} span={spanClass} />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
