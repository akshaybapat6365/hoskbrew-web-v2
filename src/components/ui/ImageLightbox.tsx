"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  /** Classes for the thumbnail wrapper */
  className?: string;
  /** Aspect ratio class for thumbnail (default: aspect-[4/3]) */
  aspect?: string;
};

/**
 * @description Product image with click-to-expand fullscreen lightbox overlay.
 * Shows a zoom icon on hover and opens an animated fullscreen modal on click.
 */
export function ImageLightbox({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/3]",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative cursor-zoom-in overflow-hidden rounded-lg border border-brand-border bg-brand-surface transition-all duration-300 hover:border-brand-primary/60 hover:shadow-[0_0_0_1px_rgba(0,122,255,0.22),0_0_36px_rgba(0,122,255,0.14)] ${aspect} ${className}`}
        aria-label={`View ${alt} fullscreen`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/0 transition-all duration-300 group-hover:bg-brand-bg/40">
          <div className="flex items-center gap-2 rounded-lg bg-brand-bg/80 px-4 py-2 text-sm font-medium text-brand-text opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 border border-brand-border/50">
            <ZoomIn className="h-4 w-4 text-brand-primary" />
            Click to expand
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.10]" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-6 right-6 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-brand-bg-elevated/80 border border-brand-border text-brand-text transition-all hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-brand-text-dim font-mono">
              Press ESC to close
            </span>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto rounded-lg object-contain shadow-[0_0_80px_rgba(0,122,255,0.15)]"
                sizes="90vw"
                quality={95}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg crt-scanlines opacity-[0.06]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
