import React from "react";

export default function Badge({ children, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary-container text-on-secondary-container",
    fixed: "bg-primary-fixed text-on-primary-fixed",
    gold: "bg-secondary-fixed text-on-secondary-fixed",
    outline: "bg-surface/90 text-primary border border-outline-variant/40",
    light: "bg-surface/90 text-on-surface shadow-sm",
  };

  return (
    <span
      className={`inline-flex items-center text-label-md px-3 py-1 rounded font-medium uppercase tracking-wider ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {children}
    </span>
  );
}
