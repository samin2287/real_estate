import React from "react";
import { Compass, ShieldCheck, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Compass,
      title: "Architectural Curation",
      description:
        "Every property in our portfolio undergoes rigorous architectural vetting. We represent homes defined by exceptional design integrity and timeless spatial quality.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromised Discretion",
      description:
        "We protect the privacy of our high-net-worth clients through secure off-market channels, private viewings, and confidential transaction structuring.",
    },
    {
      icon: Handshake,
      title: "Tailored Representation",
      description:
        "Our advisory team acts as your dedicated advocate, offering deep localized market insight paired with world-class negotiation and acquisition strategies.",
    },
  ];

  return (
    <section className="py-space-lg w-full">
      <Container className="space-y-space-md">
        <div className="max-w-2xl space-y-2">
          <span className="font-label-lg uppercase tracking-widest text-secondary block font-medium">
            The Haven Standard
          </span>
          <h2 className="font-headline-lg text-primary">
            Why Discerning Clients Choose Us
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Founded on the principle that architectural significance demands a higher standard of representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-surface-container-lowest rounded-2xl space-y-5 border border-outline-variant hover:border-secondary transition-all duration-350 shadow-xs hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="w-13 h-13 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                  <Icon size={24} className="text-secondary-fixed group-hover:text-on-secondary transition-colors" />
                </div>
                <h3 className="font-headline-sm text-xl text-primary">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
