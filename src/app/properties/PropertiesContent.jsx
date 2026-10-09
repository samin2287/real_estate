"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";
import { filterProperties } from "@/lib/properties";

export default function PropertiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derive filters directly from URL searchParams (React & Next.js recommended pattern)
  const filters = {
    listingType: searchParams.get("type") || "all",
    locationSlug: searchParams.get("location") || "all",
    propertyType: searchParams.get("propertyType") || "all",
    minBedrooms: searchParams.get("beds") ? Number(searchParams.get("beds")) : undefined,
    maxPrice: searchParams.get("max") ? Number(searchParams.get("max")) : undefined,
    minPrice: searchParams.get("min") ? Number(searchParams.get("min")) : undefined,
    query: searchParams.get("q") || "",
    sort: searchParams.get("sort") || "newest",
  };

  const updateFilters = (newFilters) => {
    const params = new URLSearchParams();

    if (newFilters.listingType && newFilters.listingType !== "all") {
      params.set("type", newFilters.listingType);
    }
    if (newFilters.locationSlug && newFilters.locationSlug !== "all") {
      params.set("location", newFilters.locationSlug);
    }
    if (newFilters.propertyType && newFilters.propertyType !== "all") {
      params.set("propertyType", newFilters.propertyType);
    }
    if (newFilters.minBedrooms) {
      params.set("beds", newFilters.minBedrooms.toString());
    }
    if (newFilters.maxPrice) {
      params.set("max", newFilters.maxPrice.toString());
    }
    if (newFilters.minPrice) {
      params.set("min", newFilters.minPrice.toString());
    }
    if (newFilters.query) {
      params.set("q", newFilters.query);
    }
    if (newFilters.sort && newFilters.sort !== "newest") {
      params.set("sort", newFilters.sort);
    }

    const queryStr = params.toString();
    router.replace(`/properties${queryStr ? `?${queryStr}` : ""}`, { scroll: false });
  };

  const handleReset = () => {
    updateFilters({
      listingType: "all",
      locationSlug: "all",
      propertyType: "all",
      query: "",
      sort: "newest",
    });
  };

  const filteredList = filterProperties(filters);

  return (
    <div className="w-full pb-space-xl">
      <Container className="py-space-md">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-space-md">
          <div>
            <span className="font-label-md text-on-surface-variant uppercase tracking-widest block mb-2">
              Curated Portfolio
            </span>
            <h1 className="font-headline-xl text-primary">
              Architectural Residences
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-body-md text-on-surface-variant">
              Showing{" "}
              <strong className="text-primary font-medium">
                {filteredList.length}
              </strong>{" "}
              extraordinary properties
            </span>
          </div>
        </div>

        {/* Sticky Filters Bar */}
        <PropertyFilters
          filters={filters}
          onChange={updateFilters}
          onReset={handleReset}
          totalResults={filteredList.length}
        />

        {/* Results Grid */}
        <PropertyGrid properties={filteredList} onReset={handleReset} />
      </Container>
    </div>
  );
}
