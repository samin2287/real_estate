import React from "react";
import PropertyCard from "./PropertyCard";
import Button from "@/components/ui/Button";

export default function PropertyGrid({
  properties = [],
  emptyMessage = "No properties found matching your criteria.",
  onReset,
}) {
  if (properties.length === 0) {
    return (
      <div className="w-full py-16 px-6 text-center bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center text-outline">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h3 className="font-headline-md text-xl text-primary">
          No Properties Found
        </h3>
        <p className="text-sm text-on-surface-variant max-w-md mx-auto">
          {emptyMessage}
        </p>
        {onReset && (
          <Button variant="outline" size="sm" onClick={onReset} className="mt-2">
            Reset Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
