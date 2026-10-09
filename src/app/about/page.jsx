import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Shield, Compass, Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SellCTA from "@/components/sections/SellCTA";

export const metadata = {
  title: "About The Agency | The Haven & Co. Narrative",
  description:
    "Learn about Haven & Co.'s curation doctrine, architectural standards, and advisory principles guiding luxury acquisitions globally.",
};

export default function AboutPage() {
  return (
    <div className="w-full pb-space-xl">
      {/* Hero / Manifesto Intro */}
      <section className="relative w-full pt-space-lg pb-space-xl px-6 lg:px-12 overflow-hidden -mt-20 pt-36">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-secondary"></span>
              <span className="font-label-lg uppercase tracking-widest text-secondary">
                The Haven &amp; Co. Narrative
              </span>
            </div>
            <h1 className="font-headline-xl text-primary font-light">
              Architecture as sanctuary.
              <br />
              Design as a way of living.
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Founded on the belief that exceptional spaces shape exceptional lives,
              Haven &amp; Co. curates the world’s most distinctive architectural
              properties. We bridge heritage craftsmanship with modern structural
              poetry across Europe, North America, and beyond.
            </p>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-xl shadow-xl relative bg-surface-container">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBu0qIWhvNpF1p7HqRlVpEsfUwwnVReGB6wz7Z_7DTl6tPD-7WFe0isLoSDdkI8l7Wv7mlOJYxCzPAz_-gYNA2haMOIhwqcnbBtBeSfOn8kuMEwRyzgduHoMC0deMC00-RqqHigEBx9a8FXojEvR9qaHtkwwteq_HSv-7m7N7jZaS4Fu-5kBGG4tFKOzqB-OHg1eLutmiAZksnDEgcqLWfduAXTnuhITz2wkn8RWRPQrC5EnZkJH0b"
                alt="Architectural detail of modernist concrete villa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-4 rounded-lg shadow-sm border border-outline-variant/30">
                <p className="font-headline-sm text-primary">Est. 2012</p>
                <p className="font-body-sm text-on-surface-variant">
                  London • Zurich • New York • Tokyo
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Numbers Strip */}
      <section className="w-full bg-gradient-to-r from-[#040e08] via-[#091b11] to-[#040e08] text-white py-space-md px-6 lg:px-12 my-space-md border-y border-[#203328]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-headline-lg text-[#dfc293]">$4.8B+</p>
            <p className="font-label-lg uppercase tracking-widest text-[#a8b8ae]">
              Cumulative Sales Volume
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-headline-lg text-[#dfc293]">320+</p>
            <p className="font-label-lg uppercase tracking-widest text-[#a8b8ae]">
              Architectural Masterpieces
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-headline-lg text-[#dfc293]">14</p>
            <p className="font-label-lg uppercase tracking-widest text-[#a8b8ae]">
              Global Design Awards
            </p>
          </div>
          <div className="space-y-1">
            <p className="font-headline-lg text-[#dfc293]">99.4%</p>
            <p className="font-label-lg uppercase tracking-widest text-[#a8b8ae]">
              Private Client Retention
            </p>
          </div>
        </div>
      </section>

      {/* Architectural Curation Philosophy */}
      <section className="w-full py-space-xl px-6 lg:px-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-secondary"></span>
                <span className="font-label-lg uppercase tracking-widest text-secondary">
                  Philosophy
                </span>
              </div>
              <h2 className="font-headline-lg text-primary">
                The Curation Doctrine
              </h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We reject the superfluous. Every residence in our portfolio
                undergoes rigorous vetting by structural historians, modernist
                preservationists, and avant-garde interior architects. We evaluate
                proportion, light integration, and material honesty before accepting
                any mandate.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-primary">
                      Material Integrity
                    </h4>
                    <p className="font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Uncompromised raw stone, board-formed concrete, and
                      sustainably harvested architectural timber that patinate with
                      grace over centuries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-primary">
                      Spatial Choreography
                    </h4>
                    <p className="font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Fluid transitions between interior sanctuaries and curated
                      landscape masterworks, prioritizing natural light as the
                      primary building material.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-lg text-primary">
                      Enduring Provenance
                    </h4>
                    <p className="font-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      Representing estates conceived by recognized masters of
                      twentieth and twenty-first century architecture with verifiable
                      lineage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw1x58rpJUuW9P6uOMtG2qSAe0-xpruezDrbj8eEyXlX3QyM0hGC20yGRaCDHmMIdt3DWDO51tNPA79EdW2QWmshXIflP3jW5fY_Wa8uPxpd2VaU4vCNywDmZisFkhEdepavHMquB2pEnOeFHv_LWbn84jzdbwWi2xdKRH9RoizMLTOx9QLs_JiO6LfBAaGi6QblFh_UVda_onyAzxByGuvnOMAM1GDnjOisJMkWdQCcSzRxUsp3gB"
                  alt="Minimalist penthouse interior"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md pt-12 mt-8">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5aqrFKAJ5zV6Hr_2g6YN-BhBrEN77sBPazlhFmtZGgFRP6WqPO-YYNW9u3kF1RH02uUy45ZxWHsYqH5zEVlQM_xK-Hed1A7z_9nnVG_ynVwJoXBI0hzbiiZRswfmt5vD-519CPqTO3CVZKNI1JUSYGCnEM_RlmrpAXTvYMIcqRTyzV5y67exDXrJ2RUpRvwMVpEDJRtanKJKa_KWWQh-6panJeMfoHpbsILvBCxjG7uSSYi0kI3vp"
                  alt="Cantilevered timber staircase"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Bento Grid */}
      <section className="w-full py-space-lg px-6 lg:px-12 bg-surface-container-low border-t border-outline-variant/20">
        <Container className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-label-lg uppercase tracking-widest text-secondary block">
              Foundational Pillars
            </span>
            <h2 className="font-headline-lg text-primary">Our Core Values</h2>
            <p className="font-body-md text-on-surface-variant">
              The principles guiding every client relationship and portfolio addition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4 flex flex-col justify-between border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <Shield size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline-md text-xl text-primary">
                  Absolute Discretion
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  We protect the privacy of high-profile creators, collectors, and
                  families with secure off-market channels and cryptographic
                  non-disclosure frameworks.
                </p>
              </div>
              <span className="font-label-md text-secondary tracking-widest uppercase pt-2">
                01 / Pillar
              </span>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4 flex flex-col justify-between border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <Compass size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline-md text-xl text-primary">
                  Curatorial Rigor
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Fewer than three percent of submitted properties meet our exacting
                  spatial, historical, and aesthetic evaluation standards.
                </p>
              </div>
              <span className="font-label-md text-secondary tracking-widest uppercase pt-2">
                02 / Pillar
              </span>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4 flex flex-col justify-between border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <Sparkles size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline-md text-xl text-primary">
                  Lifelong Stewardship
                </h3>
                <p className="font-body-sm text-on-surface-variant leading-relaxed">
                  Our advisory extends far beyond transaction. We assist in
                  architectural restoration, art placement, and sustainable estate
                  management.
                </p>
              </div>
              <span className="font-label-md text-secondary tracking-widest uppercase pt-2">
                03 / Pillar
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <SellCTA />
    </div>
  );
}
