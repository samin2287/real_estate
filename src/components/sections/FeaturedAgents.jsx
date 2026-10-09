import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function FeaturedAgents({ agents = [] }) {
  const displayAgents = agents.slice(0, 3);

  return (
    <section className="bg-surface-container-low py-space-lg w-full border-t border-outline-variant/30">
      <Container className="space-y-space-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-label-lg uppercase tracking-widest text-secondary block font-medium">
              Expert Advisory
            </span>
            <h2 className="font-headline-lg text-primary">
              Meet Our Senior Partners
            </h2>
          </div>
          <Link
            href="/agents"
            className="text-xs uppercase tracking-widest font-medium text-primary hover:text-secondary flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Advisors</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl flex flex-col group transition-all duration-350 border border-outline-variant hover:border-secondary hover:-translate-y-1.5"
            >
              <div className="h-96 overflow-hidden relative bg-surface-container">
                <Image
                  src={agent.photo.src}
                  alt={agent.photo.alt || agent.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-label-md text-white/90 uppercase tracking-wider">
                  {agent.location}
                </div>
              </div>
              <div className="p-7 space-y-2.5">
                <h3 className="font-headline-sm text-xl text-primary">
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {agent.name}
                  </Link>
                </h3>
                <p className="text-xs uppercase tracking-widest text-secondary font-medium">
                  {agent.title}
                </p>
                <p className="text-xs text-on-surface-variant pt-1 leading-relaxed line-clamp-3">
                  {agent.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
