"use client";

import React from "react";
import { ChevronDown, X, Search } from "lucide-react";
import { locations } from "@/data/locations";

export default function PropertyFilters({
  filters,
  onChange,
  onReset,
  totalResults = 0,
}) {
  const handleFilterChange = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  const activeChips = [];
  if (filters.listingType && filters.listingType !== "all") {
    activeChips.push({
      key: "listingType",
      label: filters.listingType === "buy" ? "For Sale" : "To Rent",
    });
  }
  if (filters.locationSlug && filters.locationSlug !== "all") {
    const loc = locations.find((l) => l.slug === filters.locationSlug);
    activeChips.push({
      key: "locationSlug",
      label: loc ? loc.name : filters.locationSlug,
    });
  }
  if (filters.propertyType && filters.propertyType !== "all") {
    activeChips.push({
      key: "propertyType",
      label: filters.propertyType,
    });
  }
  if (filters.minBedrooms) {
    activeChips.push({
      key: "minBedrooms",
      label: `${filters.minBedrooms}+ Beds`,
    });
  }
  if (filters.maxPrice) {
    activeChips.push({
      key: "maxPrice",
      label: `Under $${(filters.maxPrice / 1000000).toFixed(1)}M`,
    });
  }
  if (filters.query) {
    activeChips.push({
      key: "query",
      label: `"${filters.query}"`,
    });
  }

  const removeChip = (key) => {
    const updated = { ...filters };
    if (key === "listingType") updated.listingType = "all";
    else if (key === "locationSlug") updated.locationSlug = "all";
    else if (key === "propertyType") updated.propertyType = "all";
    else if (key === "minBedrooms") delete updated.minBedrooms;
    else if (key === "maxPrice") delete updated.maxPrice;
    else if (key === "query") updated.query = "";
    onChange(updated);
  };

  return (
    <div className="sticky top-20 z-40 bg-surface/90 backdrop-blur-xl py-4 mb-space-md border-b border-outline-variant/20 shadow-[0_4px_20px_rgba(3,18,11,0.02)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Side: Type Toggle & Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Buy / Rent Toggle */}
          <div className="bg-surface-container-low p-1 rounded-lg flex items-center">
            <button
              type="button"
              onClick={() => handleFilterChange("listingType", "all")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-all ${
                !filters.listingType || filters.listingType === "all"
                  ? "bg-primary text-on-primary font-medium"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("listingType", "buy")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-all ${
                filters.listingType === "buy"
                  ? "bg-primary text-on-primary font-medium"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange("listingType", "rent")}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-all ${
                filters.listingType === "rent"
                  ? "bg-primary text-on-primary font-medium"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Rent
            </button>
          </div>

          <div className="h-6 w-[1px] bg-outline-variant/40 hidden sm:block"></div>

          {/* Location Select */}
          <div className="relative">
            <select
              value={filters.locationSlug || "all"}
              onChange={(e) => handleFilterChange("locationSlug", e.target.value)}
              className="appearance-none bg-surface-container-low text-on-surface text-xs py-2 pl-3 pr-8 rounded focus:outline-none cursor-pointer hover:bg-surface-container transition-colors"
            >
              <option value="all">All Locations</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.slug}>
                  {loc.name}, {loc.country}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
            />
          </div>

          {/* Property Type Select */}
          <div className="relative">
            <select
              value={filters.propertyType || "all"}
              onChange={(e) => handleFilterChange("propertyType", e.target.value)}
              className="appearance-none bg-surface-container-low text-on-surface text-xs py-2 pl-3 pr-8 rounded focus:outline-none cursor-pointer hover:bg-surface-container transition-colors"
            >
              <option value="all">All Types</option>
              <option value="modern-villa">Modern Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="alpine-chalet">Alpine Chalet</option>
              <option value="country-estate">Country Estate</option>
              <option value="townhouse">Townhouse</option>
              <option value="loft">Industrial Loft</option>
              <option value="waterfront">Waterfront</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
            />
          </div>

          {/* Bedrooms Select */}
          <div className="relative">
            <select
              value={filters.minBedrooms || ""}
              onChange={(e) =>
                handleFilterChange("minBedrooms", e.target.value ? Number(e.target.value) : undefined)
              }
              className="appearance-none bg-surface-container-low text-on-surface text-xs py-2 pl-3 pr-8 rounded focus:outline-none cursor-pointer hover:bg-surface-container transition-colors"
            >
              <option value="">Bedrooms</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
            />
          </div>

          {/* Search Input */}
          <div className="relative min-w-[160px]">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            />
            <input
              type="text"
              placeholder="Search keyword..."
              value={filters.query || ""}
              onChange={(e) => handleFilterChange("query", e.target.value)}
              className="w-full bg-surface-container-low text-xs text-on-surface pl-8 pr-3 py-2 rounded focus:outline-none placeholder:text-outline"
            />
          </div>
        </div>

        {/* Right Side: Sort Select */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-label-md text-on-surface-variant uppercase tracking-wider hidden md:inline">
            Sort by:
          </span>
          <div className="relative">
            <select
              value={filters.sort || "newest"}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
              className="appearance-none bg-surface-container-low text-primary font-medium text-xs py-2 pl-3 pr-8 rounded focus:outline-none cursor-pointer hover:bg-surface-container transition-colors"
            >
              <option value="newest">Newest Listings</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="beds-desc">Most Bedrooms</option>
            </select>
            <ChevronDown
              size={15}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeChips.length > 0 && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-outline-variant/10 overflow-x-auto pb-1 text-xs">
          <span className="text-label-md text-on-surface-variant uppercase tracking-wider mr-1 shrink-0">
            Active:
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {activeChips.map((chip) => (
              <span
                key={chip.key}
                className="inline-flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed px-2.5 py-0.5 rounded text-xs font-medium"
              >
                {chip.label}
                <button
                  type="button"
                  onClick={() => removeChip(chip.key)}
                  className="hover:opacity-70 focus:outline-none"
                  aria-label={`Remove ${chip.label} filter`}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-on-surface-variant hover:text-primary underline ml-3 shrink-0 transition-colors"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
