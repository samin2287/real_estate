import React from "react";
import Hero from "@/components/sections/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import PopularLocations from "@/components/sections/PopularLocations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedAgents from "@/components/sections/FeaturedAgents";
import SellCTA from "@/components/sections/SellCTA";
import Testimonials from "@/components/sections/Testimonials";
import { getFeaturedProperties, getLocationsWithCounts, getAllAgents } from "@/lib/properties";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featured = getFeaturedProperties();
  const locations = getLocationsWithCounts();
  const agents = getAllAgents();

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeaturedProperties properties={featured} />
      <PopularLocations locations={locations} />
      <WhyChooseUs />
      <FeaturedAgents agents={agents} />
      <SellCTA />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
