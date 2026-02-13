"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export type PageHeaderProps = {
  /** Pixelify Sans display title */
  title: string;
  /** Optional subtitle in body font */
  subtitle?: string;
  /** Accent-colored label above the title */
  label?: string;
  /** Text alignment */
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

/**
 * Full-width page header with brand typography.
 *
 * Renders an accent label, Pixelify display title, and optional subtitle
 * with staggered entrance animation. Used at the top of every interior page.
 */
export function PageHeader({
  title,
  subtitle,
  label,
  align = "center",
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-brand-border bg-brand-bg-elevated pt-28 pb-16 sm:pt-32 sm:pb-20",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(27,143,126,0.18), transparent 70%)",
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "relative z-10 flex flex-col gap-4",
            align === "center" && "items-center text-center",
            align === "left" && "items-start text-left",
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

          <motion.h1
            variants={fadeInUp}
            className="text-display text-brand-text"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p variants={staggerItem} className="text-subhead max-w-2xl">
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div variants={staggerItem} className="mt-2">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
