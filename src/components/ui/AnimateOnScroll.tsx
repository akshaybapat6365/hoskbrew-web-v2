"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimateOnScrollProps = HTMLMotionProps<"div"> & {
  as?: "div" | "section" | "article";
  /** @default "fadeUp" */
  effect?: "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "pixelReveal";
  delay?: number;
};

const effectVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
  pixelReveal: {
    hidden: {
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      filter: "brightness(1.2)",
    },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      filter: "brightness(1)",
    },
  },
};

/**
 * @description Scroll-triggered animation wrapper. Animates children into view
 * when they enter the viewport. Uses Framer Motion's whileInView.
 */
export function AnimateOnScroll({
  as: _as = "div",
  effect = "fadeUp",
  delay = 0,
  className,
  children,
  ...rest
}: AnimateOnScrollProps) {
  const Component = motion[_as];
  const variants = effectVariants[effect];

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  staggerDelay?: number;
  delayChildren?: number;
};

/**
 * @description Container that staggers its children's entrance animations.
 * Wrap AnimateOnScroll children inside this for sequential reveal.
 */
export function StaggerGroup({
  staggerDelay = 0.1,
  delayChildren = 0,
  className,
  children,
  ...rest
}: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: staggerDelay, delayChildren }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
