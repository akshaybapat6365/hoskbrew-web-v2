import type { Variants } from "framer-motion";

/**
 * Motion durations (seconds).
 */
export const durations = {
  fast: 0.18,
  normal: 0.32,
  slow: 0.6,
  hero: 0.85,
} as const;

/**
 * Standard easing curves.
 */
export const easings = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
} as const;

/**
 * Fade-in + translate up.
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

/**
 * Fade-in + translate down.
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

/**
 * Fade-in + translate from left.
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

/**
 * Fade-in + translate from right.
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

/**
 * Scale-in with slight fade.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

/**
 * Container preset for staggered entrance animations.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

/**
 * Item preset for use inside `staggerContainer`.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.out },
  },
};

export const floatAnimation: Variants = {
  initial: { y: 0 },
  float: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export const glowPulse: Variants = {
  hidden: { opacity: 0.75 },
  show: {
    opacity: [0.75, 1, 0.82],
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const pixelReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
    filter: "brightness(1.15)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    filter: "brightness(1)",
    transition: { duration: durations.hero, ease: easings.out },
  },
};

export const typewriter: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.018,
      delayChildren: 0.02,
    },
  },
};

export const typewriterChar: Variants = {
  hidden: { opacity: 0, y: 2 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.fast, ease: easings.out },
  },
};

export const screenPowerOn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    filter: "brightness(1.55) contrast(1.15)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: ["brightness(1.6) contrast(1.18)", "brightness(1) contrast(1)"],
    transition: { duration: durations.hero, ease: easings.out },
  },
};
