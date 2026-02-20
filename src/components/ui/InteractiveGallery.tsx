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

export function InteractiveGallery({ images }: InteractiveGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-[#0B1120] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            <div className="relative h-full w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-[#11192C]/0 transition-colors duration-300 group-hover:bg-[#11192C]/45">
              <div className="scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Maximize2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="absolute left-2 top-2 rounded-md border border-white/20 bg-[#11192C]/80 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/70">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#11192C]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          width: 68,
          height: 68,
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
          padding: "24px",
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
