"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

export type PixelParticlesProps = {
  className?: string;
  count?: number;
};

export function PixelParticles({ className, count = 22 }: PixelParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const r1 = Math.random();
      const r2 = Math.random();
      const r3 = Math.random();
      const r4 = Math.random();

      const size = r1 < 0.65 ? 2 : r1 < 0.9 ? 3 : 4;

      return {
        key: `px-${i}`,
        top: Math.round(r2 * 1000) / 10,
        left: Math.round(r3 * 1000) / 10,
        size,
        duration: 10 + r4 * 10,
        delay: (i % 8) * 0.25,
        driftX: -18 + r3 * 36,
        driftY: -32 + r2 * 22,
        opacity: 0.28 + r4 * 0.32,
      };
    });
  }, [count]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {particles.map((p) => (
        <motion.span
          key={p.key}
          className="absolute rounded-[1px] bg-brand-primary"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow:
              "0 0 0 1px rgba(0,122,255,0.10), 0 0 18px rgba(0,122,255,0.20)",
          }}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [p.opacity * 0.8, p.opacity, p.opacity * 0.85],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
