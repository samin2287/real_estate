import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SellCTA() {
  return (
    <section className="py-space-lg w-full">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#05130b] via-[#0a1e12] to-[#132c1c] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#283f30] shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
          {/* Subtle warm champagne radial aura */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#dfc293]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#395945]/20 blur-2xl pointer-events-none" />

          <div className="space-y-4 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#dfc293]/30">
              <Sparkles size={13} className="text-[#dfc293]" />
              <span className="font-label-md uppercase tracking-widest text-[#dfc293]">
                Private Advisory Services
              </span>
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-white">
              List Your Property with Haven &amp; Co.
            </h2>

            <p className="text-[#c8d8cf] text-sm sm:text-base leading-relaxed font-light">
              We offer bespoke valuation, global syndication, and discreet private marketing
              strategies tailored exclusively for exceptional architectural homes.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact?intent=sell"
              className="inline-flex items-center gap-2.5 bg-[#dfc293] hover:bg-[#ebd7b2] text-[#1b1c1b] px-8 py-4 rounded-xl font-medium tracking-widest text-xs uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span>Request Valuation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
