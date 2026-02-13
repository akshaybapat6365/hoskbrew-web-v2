"use client";

import { cn } from "@/lib/utils";

export type NoiseOverlayProps = {
  className?: string;
  opacity?: number;
};

/**
 * Fixed film-grain layer using the global `.bg-noise` utility.
 */
export function NoiseOverlay({ className, opacity = 0.03 }: NoiseOverlayProps) {
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
  opacity = 0.1,
}: ScanlineOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-scanlines" />
      <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-brand-text/5 to-transparent h-[10%]" />
    </div>
  );
}
