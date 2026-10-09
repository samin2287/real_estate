import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-xl mx-auto space-y-6">
        <span className="font-label-lg uppercase tracking-widest text-secondary block">
          404 — Residence Not Found
        </span>
        <h1 className="font-headline-xl text-primary text-4xl md:text-5xl">
          The Architectural Sanctuary You Seek Is Unavailable
        </h1>
        <p className="font-body-md text-on-surface-variant leading-relaxed">
          The requested address may have entered private contract, been archived,
          or relocated within our global portfolio.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
          >
            <Home size={15} />
            <span>Return to Sanctuary</span>
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/60 text-primary px-6 py-3 rounded text-xs uppercase tracking-wider font-medium hover:bg-surface-container transition-colors"
          >
            <Search size={15} />
            <span>Explore Properties</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
