"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Grid, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery({ images = [], title = "Property" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const primaryImage = images[0] || {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    alt: title,
  };
  const secondaryImage = images[1] || primaryImage;
  const tertiaryImage = images[2] || primaryImage;

  const openLightbox = (index = 0) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[420px] md:h-[520px]">
          {/* Main Large Image */}
          <div
            onClick={() => openLightbox(0)}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt || title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            <span className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-lg text-label-lg text-primary uppercase">
              Primary Residence View
            </span>
          </div>

          {/* Side Stacked Images */}
          <div className="hidden lg:flex flex-col gap-4 h-full">
            <div
              onClick={() => openLightbox(1)}
              className="relative rounded-2xl overflow-hidden flex-1 group cursor-pointer"
            >
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt || `${title} - View 2`}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div
              onClick={() => openLightbox(2)}
              className="relative rounded-2xl overflow-hidden flex-1 group cursor-pointer"
            >
              <Image
                src={tertiaryImage.src}
                alt={tertiaryImage.alt || `${title} - View 3`}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center transition-colors hover:bg-primary/50">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(0);
                  }}
                  className="flex items-center gap-2 text-on-primary font-label-lg uppercase tracking-widest bg-primary/80 px-6 py-3 rounded-full hover:bg-primary transition-all shadow-lg"
                >
                  <Grid size={18} />
                  <span>View All Photos ({images.length})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface/10 hover:bg-surface/20 text-surface flex items-center justify-center transition-colors"
            aria-label="Close photo gallery"
          >
            <X size={24} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[75vh] flex items-center justify-center"
          >
            <Image
              src={images[currentIndex]?.src || primaryImage.src}
              alt={images[currentIndex]?.alt || `${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/20 hover:bg-surface/30 text-surface flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-surface/20 hover:bg-surface/30 text-surface flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-y-1/2 bg-surface/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs text-surface uppercase tracking-widest">
              {currentIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
