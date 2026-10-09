"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactContent() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") || "general";
  const property = searchParams.get("property") || "";

  return (
    <div className="w-full pb-space-xl">
      <Container className="py-space-lg">
        {/* Header Section */}
        <div className="mb-space-md">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary"></span>
            <span className="font-label-md uppercase tracking-widest text-secondary">
              Inquiries &amp; Representation
            </span>
          </div>
          <h1 className="font-headline-xl text-primary max-w-2xl">
            Begin Your Architectural Journey
          </h1>
          <p className="font-body-lg text-on-surface-variant mt-4 max-w-xl leading-relaxed">
            Connect with our advisory team for private acquisitions, estate sales,
            confidential valuations, or personalized portfolio consultations.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
          {/* Left Column: Direct Info & Office Hours */}
          <div className="lg:col-span-5 bg-surface-container-low p-6 md:p-8 rounded-xl space-y-6 border border-outline-variant/20">
            {/* Direct Contacts */}
            <div className="space-y-4">
              <h3 className="font-headline-md text-2xl text-primary">
                Global Headquarters
              </h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                750 North High Street, Suite 1200
                <br />
                Columbus, OH 43215
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="font-label-lg block text-on-surface uppercase tracking-wider text-[11px]">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+18005554283"
                      className="font-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
                    >
                      +1 (800) 555-HAVEN
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-label-lg block text-on-surface uppercase tracking-wider text-[11px]">
                      Electronic Mail
                    </span>
                    <a
                      href="mailto:concierge@haven-re.com"
                      className="font-body-md text-on-surface-variant hover:text-primary transition-colors font-medium"
                    >
                      concierge@haven-re.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Advisory Hours */}
            <div className="pt-6 border-t border-outline-variant/30 space-y-4">
              <h4 className="font-headline-sm text-lg text-primary">
                Advisory Hours
              </h4>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li className="flex justify-between items-center">
                  <span>Monday — Friday</span>
                  <span className="font-medium text-on-surface">
                    08:30 — 19:00 EST
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-medium text-on-surface">
                    10:00 — 16:00 EST
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-on-surface">
                    By Private Arrangement
                  </span>
                </li>
              </ul>
            </div>

            {/* Regional Private Salons */}
            <div className="pt-6 border-t border-outline-variant/30 space-y-3">
              <h4 className="font-headline-sm text-lg text-primary">
                Private Salons
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Confidential consultation rooms available in Mayfair, Manhattan,
                and Tokyo by prior appointment.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-surface border border-outline-variant/50 rounded text-xs font-medium text-primary">
                  New York
                </span>
                <span className="px-3 py-1 bg-surface border border-outline-variant/50 rounded text-xs font-medium text-primary">
                  London Mayfair
                </span>
                <span className="px-3 py-1 bg-surface border border-outline-variant/50 rounded text-xs font-medium text-primary">
                  Tokyo Ginza
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm initialIntent={intent} propertyName={property} />
          </div>
        </div>
      </Container>
    </div>
  );
}
