import React from "react";
import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Testimonials({ testimonials = [] }) {
  return (
    <section className="py-space-lg w-full">
      <Container className="space-y-space-md">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-label-lg uppercase tracking-widest text-secondary block font-medium">
            Client Reflections
          </span>
          <h2 className="font-headline-lg text-primary">
            Trusted by Extraordinary Clients
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto">
            Discreet testimonials from collectors, patrons, and families who placed their trust in Haven &amp; Co.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-surface-container-lowest p-8 rounded-2xl flex flex-col justify-between space-y-6 border border-outline-variant hover:border-secondary transition-all duration-350 shadow-xs hover:shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-secondary">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <Quote size={24} className="text-outline-variant/60" />
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed pt-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant">
                <h4 className="font-headline-sm text-lg text-primary">
                  {item.name}
                </h4>
                <p className="text-xs text-secondary font-medium mt-0.5 tracking-wide">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
