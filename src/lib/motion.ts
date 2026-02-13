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
