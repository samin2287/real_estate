"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "", showLabel = false }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-surface-container/50 border border-outline-variant/30 flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center gap-2 p-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface border border-outline-variant hover:border-secondary transition-all duration-300 shadow-xs hover:shadow-md active:scale-95 cursor-pointer ${className}`}
      title={isDark ? "Switch to Day Mode (Light)" : "Switch to Night Mode (Dark)"}
      aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {isDark ? (
          <Sun
            size={17}
            className="text-secondary transition-all duration-500 rotate-0 scale-100 group-hover:rotate-45"
          />
        ) : (
          <Moon
            size={17}
            className="text-primary transition-all duration-500 -rotate-12 scale-100 group-hover:rotate-0"
          />
        )}
      </div>

      {showLabel && (
        <span className="text-xs uppercase tracking-wider font-medium text-on-surface-variant group-hover:text-on-surface pr-2">
          {isDark ? "Night" : "Day"}
        </span>
      )}
    </button>
  );
}
