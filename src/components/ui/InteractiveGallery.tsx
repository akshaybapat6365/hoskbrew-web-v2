"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { Maximize2 } from "lucide-react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface GalleryImage {
  src: string;
  alt: string;
}

interface InteractiveGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function InteractiveGallery({
  images,
  columns = 4,
}: InteractiveGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  const columnClass = {
    2: "columns-2",
    3: "columns-2 md:columns-3",
    4: "columns-2 md:columns-3 lg:columns-4",
  }[columns];

  return (
    <>
      {/* Masonry Grid */}
      <div className={`${columnClass} gap-4 space-y-4`}>
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative w-full overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 break-inside-avoid mb-4"
          >
            <div className="relative w-full">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Expand Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Bottom Glow on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Zoom, Thumbnails, Counter]}
        zoom={{
          maxZoomPixelRatio: 3,
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
          width: 80,
          height: 60,
          border: 2,
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.1)",
          padding: 4,
          gap: 8,
        }}
        counter={{
          container: {
            style: { 
              top: 16, 
              left: "50%", 
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0,0,0,0.6)",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 500,
            },
          },
        }}
        carousel={{
          finite: false,
          preload: 2,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
        styles={{
          container: { 
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
          },
          button: {
            filter: "none",
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "8px",
          },
        }}
      />
    </>
  );
}
