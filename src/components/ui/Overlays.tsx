"use client";

import { cn } from "@/lib/utils";

export type NoiseOverlayProps = {
  className?: string;
  opacity?: number;
};

/**
 * Fixed film-grain layer using the global `.bg-noise` utility.
 */
export function NoiseOverlay({ className, opacity = 0.05 }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 z-[100] bg-noise mix-blend-overlay",
        className,
      )}
      style={{ opacity }}
    />
  );
}

export type VignetteOverlayProps = {
  className?: string;
  intensity?: number;
};

/**
 * Fixed vignette for focus and depth.
 */
export function VignetteOverlay({
  className,
  intensity = 0.75,
}: VignetteOverlayProps) {
  const alpha = Math.max(0, Math.min(1, intensity));

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-[90]", className)}
      style={{
        background: `radial-gradient(120% 100% at 50% 35%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, ${alpha}) 100%)`,
      }}
    />
  );
}

export type ScanlineOverlayProps = {
  className?: string;
  opacity?: number;
};

/**
 * Scanline overlay for sections or hero areas.
 */
export function ScanlineOverlay({
  className,
  opacity = 0.06,
}: ScanlineOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-[95]", className)}
      style={{
        opacity,
        background:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 3px)",
      }}
    />
  );
}

export type PixelGridOverlayProps = {
  className?: string;
  opacity?: number;
};

export function PixelGridOverlay({
  className,
  opacity = 0.65,
}: PixelGridOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-[92]", className)}
      style={{
        opacity,
        backgroundImage:
          "linear-gradient(rgba(0,122,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.02) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
      }}
    />
  );
}
