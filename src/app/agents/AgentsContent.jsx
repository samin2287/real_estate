"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import AgentCard from "@/components/agents/AgentCard";
import { agents } from "@/data/agents";
import { Search } from "lucide-react";

export default function AgentsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      searchQuery === "" ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.specialties.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesSpecialty =
      specialtyFilter === "all" ||
      agent.specialties.some((s) =>
        s.toLowerCase().includes(specialtyFilter.toLowerCase())
      );

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="w-full pb-space-xl">
      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-low py-space-xl px-6 lg:px-12 overflow-hidden border-b border-outline-variant/20 -mt-20 pt-36">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-secondary"></span>
              <span className="font-label-lg uppercase tracking-widest text-secondary">
                Our Senior Counsel
              </span>
            </div>
            <h1 className="font-headline-xl text-primary">
              Architectural Acquisition Advisors
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Haven &amp; Co. senior partners represent decades of specialized
              mastery in landmark estates, brutalist masterworks, and modernist
              sanctuaries across global capitals.
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-outline-variant/30 lg:pl-12 space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="font-headline-lg text-primary">$4.2B+</span>
              <span className="font-label-md uppercase text-on-surface-variant">
                Lifetime Transaction Volume
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-headline-lg text-primary">14</span>
              <span className="font-label-md uppercase text-on-surface-variant">
                Global Metropolitan Hubs
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-headline-lg text-primary">98.4%</span>
              <span className="font-label-md uppercase text-on-surface-variant">
                Private Client Retention
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter & Search Bar */}
      <Container className="py-space-md">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20">
          <div className="flex items-center gap-3 px-4 py-2 bg-surface rounded flex-1">
            <Search size={18} className="text-outline" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by advisor name, specialty, or location..."
              className="w-full bg-transparent text-on-surface placeholder:text-outline focus:outline-none text-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSpecialtyFilter("all")}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap uppercase tracking-wider ${
                specialtyFilter === "all"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface-variant hover:text-on-surface"
              }`}
            >
              All Advisors
            </button>
            <button
              type="button"
              onClick={() => setSpecialtyFilter("Modernism")}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap uppercase tracking-wider ${
                specialtyFilter === "Modernism"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Modernism
            </button>
            <button
              type="button"
              onClick={() => setSpecialtyFilter("Historic")}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap uppercase tracking-wider ${
                specialtyFilter === "Historic"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Historic Estates
            </button>
            <button
              type="button"
              onClick={() => setSpecialtyFilter("Coastal")}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap uppercase tracking-wider ${
                specialtyFilter === "Coastal"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Coastal Sanctuaries
            </button>
          </div>
        </div>
      </Container>

      {/* Agents Grid */}
      <Container className="pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </Container>
    </div>
  );
}
