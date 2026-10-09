import { properties } from "@/data/properties";
import { locations } from "@/data/locations";
import { agents } from "@/data/agents";

export function getAllProperties() {
  return properties;
}

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}

export function getPropertyBySlug(slug) {
  return properties.find((p) => p.slug === slug);
}

export function getPropertiesByAgent(agentSlug) {
  return properties.filter((p) => p.agentSlug === agentSlug);
}

export function getPropertiesByLocation(locationSlug) {
  return properties.filter((p) => p.locationSlug === locationSlug);
}

export function getSimilarProperties(currentSlug, limit = 3) {
  const current = getPropertyBySlug(currentSlug);
  if (!current) return properties.slice(0, limit);

  const matched = properties.filter(
    (p) =>
      p.slug !== currentSlug &&
      (p.locationSlug === current.locationSlug ||
        p.propertyType === current.propertyType ||
        p.listingType === current.listingType)
  );

  return matched.slice(0, limit);
}

export function getLocationsWithCounts() {
  return locations.map((loc) => {
    const count = properties.filter((p) => p.locationSlug === loc.slug).length;
    return {
      ...loc,
      propertyCount: count > 0 ? count : 4,
    };
  });
}

export function getAgentBySlug(slug) {
  return agents.find((a) => a.slug === slug);
}

export function getAllAgents() {
  return agents;
}

export function filterProperties(filters = {}) {
  let result = [...properties];

  if (filters.listingType && filters.listingType !== "all") {
    result = result.filter((p) => p.listingType === filters.listingType);
  }

  if (filters.locationSlug && filters.locationSlug !== "all") {
    result = result.filter((p) => p.locationSlug === filters.locationSlug);
  }

  if (filters.propertyType && filters.propertyType !== "all") {
    result = result.filter(
      (p) =>
        p.propertyType.toLowerCase() === filters.propertyType.toLowerCase() ||
        p.propertyTypeLabel.toLowerCase().includes(filters.propertyType.toLowerCase())
    );
  }

  if (filters.minPrice) {
    result = result.filter((p) => p.price >= Number(filters.minPrice));
  }

  if (filters.maxPrice) {
    result = result.filter((p) => p.price <= Number(filters.maxPrice));
  }

  if (filters.minBedrooms) {
    result = result.filter((p) => p.bedrooms >= Number(filters.minBedrooms));
  }

  if (filters.query && filters.query.trim()) {
    const q = filters.query.toLowerCase().trim();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.locationName.toLowerCase().includes(q) ||
        p.address.city.toLowerCase().includes(q) ||
        p.propertyTypeLabel.toLowerCase().includes(q)
    );
  }

  if (filters.sort) {
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "beds-desc":
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case "newest":
      default:
        result.sort(
          (a, b) => new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime()
        );
        break;
    }
  }

  return result;
}

export function formatPrice(price, currency = "USD", rentPeriod = null) {
  const symbol = currency === "GBP" ? "£" : "$";
  const formatted = price.toLocaleString("en-US");
  const suffix = rentPeriod ? " / month" : "";
  return `${symbol}${formatted}${suffix}`;
}
