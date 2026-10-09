import React from "react";
import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90 active:scale-[0.99]",
    secondary:
      "bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary",
    gold: "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-on-primary",
    ghost: "text-on-surface-variant hover:text-primary hover:bg-surface-container",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs tracking-wider uppercase",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-sm tracking-wider uppercase",
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
