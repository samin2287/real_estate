import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function AgentCard({ agent }) {
  if (!agent) return null;

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant hover:border-secondary shadow-xs hover:shadow-2xl transition-all duration-350 hover:-translate-y-1.5">
      <div className="relative w-full h-96 overflow-hidden bg-surface-container">
        <Image
          src={agent.photo.src}
          alt={agent.photo.alt || agent.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {agent.title && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-label-md text-white/90 uppercase tracking-wider">
            {agent.title.split(",")[0]}
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col flex-1 justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-headline-md text-2xl text-primary group-hover:text-secondary transition-colors">
              <Link href={`/agents/${agent.slug}`}>{agent.name}</Link>
            </h3>
            <span className="text-xs text-secondary font-medium tracking-wide">
              {agent.location}
            </span>
          </div>

          <p className="font-body-sm text-on-surface-variant line-clamp-3 leading-relaxed text-xs">
            {agent.bio}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {agent.specialties?.map((spec, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-surface-container text-on-surface text-[11px] rounded-md uppercase font-label-md border border-outline-variant/40"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-outline-variant flex items-center justify-between gap-3">
          <a
            href={`mailto:${agent.email}`}
            className="text-xs font-medium text-primary hover:text-secondary transition-colors flex items-center gap-1.5 truncate"
          >
            <Mail size={14} className="shrink-0 text-secondary" />
            <span className="truncate">{agent.email}</span>
          </a>

          <Link
            href={`/contact?intent=general&agent=${agent.slug}`}
            className="bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-lg transition-all shrink-0 cursor-pointer shadow-xs"
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}
