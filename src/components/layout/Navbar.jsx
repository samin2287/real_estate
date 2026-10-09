"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useSavedProperties } from "@/context/SavedPropertiesContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { savedCount, hydrated } = useSavedProperties();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Locations", href: "/locations" },
    { label: "Agents", href: "/agents" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-colors duration-250">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-sm">
            <span className="font-headline text-lg font-light">H</span>
          </div>
          <span className="font-headline-md text-xl tracking-wider text-primary font-normal">
            Haven <span className="text-secondary">&amp;</span> Co.
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-all duration-200 px-3.5 py-1.5 rounded-lg font-medium ${
                  active
                    ? "bg-primary-container text-on-primary-container font-semibold border border-outline-variant/40"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Day / Night Theme Toggle */}
          <ThemeToggle />

          {/* Saved Properties Heart */}
          <Link
            href="/saved"
            className="relative p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            aria-label="View saved residences"
          >
            <Heart size={21} className="transition-transform hover:scale-110" />
            {hydrated && savedCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-on-secondary shadow-sm">
                {savedCount}
              </span>
            )}
          </Link>

          {/* Contact Direct Link */}
          <Link
            href="/contact?intent=sell"
            className="hidden sm:inline-flex bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary text-xs uppercase tracking-widest px-4 py-2.5 rounded-lg font-medium transition-all duration-250 shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
          >
            List Property
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/98 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2.5 px-4 rounded-lg transition-colors ${
                    active
                      ? "bg-primary-container text-on-primary-container font-medium"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-3">
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low rounded-lg">
              <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                Color Mode
              </span>
              <ThemeToggle />
            </div>
            <Link
              href="/saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2.5 px-4 rounded-lg text-sm text-on-surface hover:bg-surface-container-low"
            >
              <span>Saved Residences</span>
              <span className="bg-primary text-on-primary text-xs px-2 py-0.5 rounded-full font-medium">
                {savedCount}
              </span>
            </Link>
            <Link
              href="/contact?intent=sell"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-on-primary text-xs uppercase tracking-wider py-3 rounded font-medium"
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
