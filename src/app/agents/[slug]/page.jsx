import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, MapPin, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import PropertyCard from "@/components/properties/PropertyCard";
import { getAgentBySlug, getAllAgents, getPropertiesByAgent } from "@/lib/properties";

export async function generateStaticParams() {
  const all = getAllAgents();
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: "Advisor Not Found" };
  return {
    title: `${agent.name} | Senior Acquisition Advisor`,
    description: agent.bio,
  };
}

export default async function AgentDetailsPage({ params }) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const agentProperties = getPropertiesByAgent(agent.slug);

  return (
    <div className="w-full pb-space-xl">
      {/* Advisor Profile Banner */}
      <section className="bg-surface-container-low py-12 border-b border-outline-variant/20">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-label-md uppercase tracking-widest text-on-surface-variant mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link href="/agents" className="hover:text-primary transition-colors">
              Advisors
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-medium">{agent.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                <Image
                  src={agent.photo.src}
                  alt={agent.photo.alt || agent.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-label-lg uppercase tracking-widest text-secondary block">
                  Senior Partner Profile
                </span>
                <h1 className="font-headline-xl text-4xl md:text-5xl text-primary">
                  {agent.name}
                </h1>
                <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">
                  {agent.title}
                </p>
              </div>

              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                {agent.bio}
              </p>

              {/* Badges / Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-b border-outline-variant/20 py-4">
                <div>
                  <span className="text-label-md uppercase text-on-surface-variant block">
                    Experience
                  </span>
                  <span className="font-headline-sm text-xl text-primary font-medium">
                    {agent.yearsExperience} Years
                  </span>
                </div>
                <div>
                  <span className="text-label-md uppercase text-on-surface-variant block">
                    Track Record
                  </span>
                  <span className="font-headline-sm text-xl text-primary font-medium">
                    {agent.transactionsVolume || "£500M+"}
                  </span>
                </div>
                <div>
                  <span className="text-label-md uppercase text-on-surface-variant block">
                    Languages
                  </span>
                  <span className="font-body-sm text-primary font-medium">
                    {agent.languages?.join(", ") || "English"}
                  </span>
                </div>
              </div>

              {/* Specialties */}
              <div className="space-y-2">
                <span className="font-label-md uppercase tracking-wider text-on-surface-variant block">
                  Curatorial Specialties
                </span>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties?.map((spec, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-surface-container text-xs rounded uppercase font-medium text-primary tracking-wider"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail size={16} />
                  <span>Direct Message</span>
                </a>
                <a
                  href={`tel:${agent.phone}`}
                  className="inline-flex items-center gap-2 bg-surface border border-outline-variant/60 text-primary px-6 py-3 rounded text-xs uppercase tracking-wider font-medium hover:bg-surface-container transition-colors"
                >
                  <Phone size={16} />
                  <span>{agent.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Properties Represented by Agent */}
      <Container className="py-space-xl">
        <div className="space-y-space-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-label-lg uppercase tracking-widest text-secondary block">
                Portfolio Curated By {agent.name}
              </span>
              <h2 className="font-headline-lg text-primary">
                Current Active Representations
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-xs uppercase tracking-wider font-medium text-secondary hover:underline flex items-center gap-1.5"
            >
              <span>View Full Agency Portfolio</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {agentProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-surface-container-low rounded-xl text-on-surface-variant text-sm">
              Current active mandates for this advisor are held in private off-market portfolios. Inquire directly for confidential access.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
