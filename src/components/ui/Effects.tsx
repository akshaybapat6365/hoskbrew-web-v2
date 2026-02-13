"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Scanline = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 z-50 overflow-hidden",
      className,
    )}
  >
    <div className="absolute inset-0 bg-scanlines opacity-10" />
    <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-brand-text/5 to-transparent h-[10%]" />
  </div>
);

export const GlitchText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <motion.span
    className={cn("relative inline-block hover:animate-glitch", className)}
    data-text={text}
  >
    {text}
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-brand-primary opacity-0 hover:opacity-50 animate-pulse translate-x-[2px]">
      {text}
    </span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-brand-highlight opacity-0 hover:opacity-50 animate-pulse -translate-x-[2px]">
      {text}
    </span>
  </motion.span>
);
