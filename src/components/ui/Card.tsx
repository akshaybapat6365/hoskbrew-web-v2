"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  label?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  aspect?: "video" | "square" | "auto";
};

/**
 * Multi-purpose card component with image, label, and optional link behavior.
 *
 * @example
 * <Card title="Crystal Mines" image="/img.png" href="/products/crystal-mines" label="Game Boy" />
 */
export function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  label,
  footer,
  children,
  className,
  aspect = "video",
}: CardProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  }[aspect];

  const content = (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-brand-border bg-brand-bg-elevated transition-all duration-300 transform-gpu will-change-transform",
        href &&
          "hover:scale-[1.02] hover:border-brand-primary/60 hover:shadow-[0_0_0_1px_rgba(0,122,255,0.22),0_0_34px_rgba(0,122,255,0.16),0_18px_60px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {image && (
        <div
          className={cn(
            "relative w-full overflow-hidden bg-brand-surface",
            aspectClass,
          )}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {label && (
            <span className="text-label absolute top-3 left-3 rounded bg-brand-accent/90 px-2 py-0.5 text-brand-bg">
              {label}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-sans font-black uppercase text-lg text-brand-text leading-[0.95] tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="text-sm leading-relaxed text-brand-text-muted line-clamp-3">
            {description}
          </p>
        )}
        {children}
      </div>

      {footer && (
        <div className="border-t border-brand-border px-5 py-3">{footer}</div>
      )}
    </motion.article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}
