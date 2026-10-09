"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Home, DollarSign, Search } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy"); // 'buy' | 'rent' | 'commercial'
  const [location, setLocation] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (activeTab === "buy" || activeTab === "rent") {
      params.set("type", activeTab);
    }
    if (location !== "all") {
      params.set("location", location);
    }
    if (propertyType !== "all") {
      params.set("propertyType", propertyType);
    }
    if (priceRange === "1m-3m") {
      params.set("max", "3000000");
    } else if (priceRange === "3m-5m") {
      params.set("max", "5000000");
    } else if (priceRange === "5m-plus") {
      params.set("min", "5000000");
    }

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[920px] flex flex-col justify-end pb-space-lg px-6 lg:px-12 -mt-20 pt-36 bg-[#040e08] overflow-hidden">
      {/* Background Image with Ambient Tone */}
      <div
        className="absolute inset-0 z-0 opacity-45 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdFCi2lJaCsdZQRs2R-vZYB7wKe_iZiH6SLLeLH6piSXBSkANiBxFqo3ooHEpL987rUF-ROOykb4CiFo3moa6Bhubw8z6lCuShh9jz2ZQPz4vDmk6TAisNjWQ_158i9vPye3Z44b-SU5CTVvnvyraS2JCvUOxxQceGZpyN2dDaH_qM3Bbrnk4zH6pNirAXDoy2mYWla8gM6K_o9Z-yqNKBDNNlh8o-BMBnNhnmgo8QiWa7FbkvFtec')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#040e08] via-[#040e08]/75 to-black/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-space-md">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#c7a878]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfc293] animate-pulse"></span>
            <span className="font-label-md uppercase tracking-widest text-[#dfc293]">
              Curated Architectural Real Estate
            </span>
          </div>
          <h1 className="font-headline-xl text-[#fbf9f7] drop-shadow-sm">
            Find Your Place.
            <br />
            Build Your Future.
          </h1>
          <p className="text-sm md:text-base text-[#e4e2e0]/90 max-w-xl font-light leading-relaxed">
            Representing the world’s most distinctive modernist residences, historic townhouses, and private estates.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="w-full bg-surface/95 dark:bg-[#0e1611]/95 backdrop-blur-xl p-5 lg:p-7 shadow-2xl rounded-2xl border border-outline-variant/40 space-y-5 text-on-surface">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-outline-variant/30 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("buy")}
              className={`text-xs uppercase tracking-widest font-medium pb-2 transition-all relative ${
                activeTab === "buy"
                  ? "text-primary border-b-2 border-secondary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent"
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("rent")}
              className={`text-xs uppercase tracking-widest font-medium pb-2 transition-all relative ${
                activeTab === "rent"
                  ? "text-primary border-b-2 border-secondary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent"
              }`}
            >
              Rent
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("commercial")}
              className={`text-xs uppercase tracking-widest font-medium pb-2 transition-all relative ${
                activeTab === "commercial"
                  ? "text-primary border-b-2 border-secondary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface border-b-2 border-transparent"
              }`}
            >
              Commercial
            </button>
          </div>

          {/* Form Controls */}
          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Location Select */}
            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface-variant uppercase tracking-wider block">
                Location
              </label>
              <div className="flex items-center bg-surface-container-low border border-outline-variant/50 focus-within:border-secondary px-3.5 py-2.5 rounded-lg transition-colors">
                <MapPin size={17} className="text-secondary mr-2 shrink-0" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent w-full text-xs text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="all">All Locations</option>
                  <option value="london">London, UK</option>
                  <option value="manchester">Manchester, UK</option>
                  <option value="edinburgh">Edinburgh, UK</option>
                  <option value="austin">Austin, USA</option>
                  <option value="miami">Miami, USA</option>
                  <option value="beverly-hills">Beverly Hills, USA</option>
                  <option value="aspen">Aspen, USA</option>
                  <option value="brooklyn">Brooklyn, USA</option>
                </select>
              </div>
            </div>

            {/* Property Type Select */}
            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface-variant uppercase tracking-wider block">
                Property Type
              </label>
              <div className="flex items-center bg-surface-container-low border border-outline-variant/50 focus-within:border-secondary px-3.5 py-2.5 rounded-lg transition-colors">
                <Home size={17} className="text-secondary mr-2 shrink-0" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent w-full text-xs text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="all">All Types</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="modern-villa">Modern Villa</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="country-estate">Country Estate</option>
                  <option value="alpine-chalet">Alpine Chalet</option>
                  <option value="loft">Industrial Loft</option>
                  <option value="waterfront">Waterfront</option>
                </select>
              </div>
            </div>

            {/* Price Range Select */}
            <div className="space-y-1.5">
              <label className="font-label-md text-on-surface-variant uppercase tracking-wider block">
                Price Range
              </label>
              <div className="flex items-center bg-surface-container-low border border-outline-variant/50 focus-within:border-secondary px-3.5 py-2.5 rounded-lg transition-colors">
                <DollarSign size={17} className="text-secondary mr-2 shrink-0" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-transparent w-full text-xs text-on-surface focus:outline-none cursor-pointer"
                >
                  <option value="all">Any Price</option>
                  <option value="500k-1m">$500k - $1M / £500k - £1M</option>
                  <option value="1m-3m">$1M - $3M / £1M - £3M</option>
                  <option value="3m-5m">$3M - $5M / £3M - £5M</option>
                  <option value="5m-plus">$5M+ / £5M+</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary h-[44px] rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 text-xs uppercase tracking-widest shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <Search size={16} />
                <span>Search Properties</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
