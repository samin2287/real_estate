import React, { Suspense } from "react";
import PropertiesContent from "./PropertiesContent";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Architectural Residences | Properties Portfolio",
  description:
    "Explore our complete curated portfolio of landmark residences, penthouses, modern villas, and historic estates across global capitals.",
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <Container className="py-20 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-surface-container w-48 mx-auto rounded"></div>
            <div className="h-4 bg-surface-container w-64 mx-auto rounded"></div>
          </div>
        </Container>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}
