"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setJoined(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-surface-container-low py-space-lg border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-md">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <Link href="/" className="inline-block">
            <span className="font-headline-md text-2xl text-primary">
              Haven &amp; Co.
            </span>
          </Link>
          <p className="text-on-surface-variant text-sm italic font-serif">
            Find Your Place. Build Your Future.
          </p>
          <p className="text-xs text-on-surface-variant leading-relaxed pt-2">
            Curating rare architectural masterworks, historic estates, and
            contemporary sanctuaries across global metropolitan hubs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="font-label-lg uppercase tracking-widest text-on-surface">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>
              <Link href="/properties" className="hover:text-on-surface transition-colors">
                Properties Portfolio
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-on-surface transition-colors">
                Global Locations
              </Link>
            </li>
            <li>
              <Link href="/agents" className="hover:text-on-surface transition-colors">
                Senior Advisors
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-on-surface transition-colors">
                About The Agency
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-on-surface transition-colors">
                Contact &amp; Inquiries
              </Link>
            </li>
            <li>
              <Link href="/saved" className="hover:text-on-surface transition-colors">
                Saved Residences
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-3">
          <h4 className="font-label-lg uppercase tracking-widest text-on-surface">
            Newsletter
          </h4>
          <p className="text-sm text-on-surface-variant">
            Receive curated architectural listings directly to your inbox.
          </p>
          {joined ? (
            <div className="flex items-center gap-2 text-xs text-primary font-medium p-3 bg-surface-container rounded-lg border border-secondary/30">
              <Check size={16} className="text-secondary" />
              <span>Subscription confirmed (Demo)</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-surface border border-outline-variant px-3.5 py-2.5 text-xs text-on-surface placeholder:text-on-surface-variant/60 rounded-lg w-full focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary px-5 py-2.5 text-xs uppercase tracking-widest rounded-lg font-medium transition-all duration-200 shrink-0 cursor-pointer shadow-xs"
              >
                Join
              </button>
            </form>
          )}
        </div>

        {/* Legal & Honest Disclaimer */}
        <div className="space-y-3">
          <h4 className="font-label-lg uppercase tracking-widest text-on-surface">
            Legal &amp; Disclaimer
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Demo disclaimer: Haven &amp; Co. is a conceptual real estate presentation
            platform. All imagery and property data are simulated for demonstration
            purposes.
          </p>
          <div className="pt-2 text-xs text-on-surface-variant">
            <span>Mayfair • Beverly Hills • Aspen • Manhattan</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant">
        <p>© 2024 Haven &amp; Co. Real Estate. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-on-surface transition-colors">
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:text-on-surface transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-on-surface transition-colors">
            Advisory Standards
          </Link>
        </div>
      </div>
    </footer>
  );
}
