"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface GalleryImage {
  src: string;
  alt: string;
}

interface InteractiveGalleryProps {
  images: GalleryImage[];
}

/**
 * Masonry-style interactive gallery with lightbox, zoom, and keyboard navigation.
 * Respects original image aspect ratios - no forced square crops.
 */
export function InteractiveGallery({ images }: InteractiveGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <>
      {/* Masonry grid using CSS columns */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-all duration-300"
          >
            <div className="relative w-full">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Hover overlay with expand icon */}
            <div className="absolute inset-0 bg-[#11192C]/0 group-hover:bg-[#11192C]/50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom gradient for depth */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#11192C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        ))}
      </div>

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Zoom, Thumbnails, Counter]}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: "bottom",
          width: 72,
          height: 54,
          border: 1,
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.12)",
          padding: 3,
          gap: 6,
          borderRadius: 6,
        }}
        counter={{
          container: {
            style: {
              top: "unset",
              bottom: 0,
              left: 0,
              padding: "16px 20px",
              fontSize: "12px",
              letterSpacing: "0.08em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            },
          },
        }}
        carousel={{
          finite: false,
          preload: 3,
          padding: "16px",
          spacing: "30%",
        }}
        animation={{
          fade: 250,
          swipe: 250,
        }}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(10, 13, 22, 0.97)",
            backdropFilter: "blur(12px)",
          },
          button: {
            color: "rgba(255,255,255,0.7)",
            filter: "none",
          },
          thumbnail: {
            borderRadius: "6px",
          },
          thumbnailsTrack: {
            padding: "8px 0",
          },
        }}
      />
    </>
  );
}
