"use client";

import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="crt-power-on"
    >
      {children}
    </motion.div>
  );
}

export function ScanlineTransition() {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(100% 0 0 0)" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9998] bg-brand-bg pointer-events-none"
    >
      <div className="absolute inset-0 crt-scanlines" />
    </motion.div>
  );
}

export function GlitchText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        x: [0, -2, 2, -1, 1, 0],
        transition: { duration: 0.3 },
      }}
      style={{
        textShadow: `
          2px 0 rgba(0, 122, 255, 0.5),
          -2px 0 rgba(68, 207, 108, 0.5)
        `,
      }}
    >
      {children}
    </motion.span>
  );
}

export function PixelReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
        opacity: 0,
      }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
