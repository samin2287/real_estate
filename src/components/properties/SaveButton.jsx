"use client";

import React from "react";
import { Heart } from "lucide-react";
import { useSavedProperties } from "@/context/SavedPropertiesContext";

export default function SaveButton({
  propertyId,
  showLabel = false,
  className = "",
  size = 20,
}) {
  const { isSaved, toggleSave } = useSavedProperties();
  const saved = isSaved(propertyId);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSave(propertyId);
  };

  if (showLabel) {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 px-4 py-2 bg-surface-container-low hover:bg-surface-container-high transition-colors text-label-lg text-on-surface rounded-full ${className}`}
        aria-label={saved ? "Remove from saved" : "Save property"}
      >
        <Heart
          size={size}
          className={`transition-colors ${
            saved ? "fill-[#ba1a1a] text-[#ba1a1a]" : "text-primary"
          }`}
        />
        <span>{saved ? "Saved" : "Save Property"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface transition-colors shadow-sm ${className}`}
      aria-label={saved ? "Remove from saved" : "Save property"}
    >
      <Heart
        size={size}
        className={`transition-colors ${
          saved ? "fill-[#ba1a1a] text-[#ba1a1a]" : "text-primary"
        }`}
      />
    </button>
  );
}
