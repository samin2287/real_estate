import React, { Suspense } from "react";
import ContactContent from "./ContactContent";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Contact & Inquiries | Private Advisory",
  description:
    "Connect with the Haven & Co. senior advisory team for private acquisitions, valuations, or estate representation.",
};

export default function ContactPage() {
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
      <ContactContent />
    </Suspense>
  );
}
