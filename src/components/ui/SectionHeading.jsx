import React from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = "",
}) {
  return (
    <div
      className={`space-y-2 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`font-label-lg uppercase tracking-widest block ${
            dark ? "text-secondary-fixed" : "text-secondary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`font-headline-lg ${
            dark ? "text-surface" : "text-primary"
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`text-sm ${
            dark ? "text-on-primary-container" : "text-on-surface-variant"
          } leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
