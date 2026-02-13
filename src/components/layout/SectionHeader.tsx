"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export type SectionHeaderProps = {
  /** Inter Bold uppercase heading */
  title: string;
  /** Optional body-font description */
  description?: string;
  /** Accent label rendered above the heading */
  label?: string;
  /** Text alignment */
  align?: "left" | "center";
  className?: string;
};

/**
 * In-page section header with brand typography.
 *
 * Used inside `<Section>` to introduce a content block. Renders with staggered
 * entrance animation and maintains consistent vertical rhythm.
 */
export function SectionHeader({
  title,
  description,
  label,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {label && (
        <motion.span
          variants={staggerItem}
          className="text-label text-brand-accent"
        >
          {label}
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className="font-black uppercase tracking-tight text-2xl md:text-3xl text-brand-text leading-[0.92]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p variants={staggerItem} className="text-subhead max-w-2xl">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
