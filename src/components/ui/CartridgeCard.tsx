"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CartridgeCardProps {
  title: string;
  description?: string;
  image: string;
  href: string;
  platform?: string;
  className?: string;
}

export function CartridgeCard({
  title,
  description,
  image,
  href,
  platform,
  className,
}: CartridgeCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, rotateY: 5 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative bg-brand-surface border-2 border-brand-border p-4",
          "transition-all duration-300",
          "hover:border-brand-primary hover:neon-glow-cyan",
          className,
        )}
        style={{
          clipPath: `polygon(
            0 8px, 8px 0,
            calc(100% - 8px) 0, 100% 8px,
            100% calc(100% - 8px), calc(100% - 8px) 100%,
            8px 100%, 0 calc(100% - 8px)
          )`,
        }}
      >
        {/* Cartridge Top Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-2 bg-brand-border group-hover:bg-brand-primary transition-colors" />

        {/* Main Image Area */}
        <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-black">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Scanlines Overlay */}
          <div className="absolute inset-0 crt-scanlines opacity-30 pointer-events-none" />

          {/* Platform Badge */}
          {platform && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-black/80 border border-brand-primary text-pixel text-[10px] text-brand-primary">
              {platform}
            </div>
          )}
        </div>

        {/* Label Area */}
        <div className="bg-brand-bg-elevated p-3 border border-brand-border/50">
          <h3 className="text-pixel text-sm text-brand-text mb-1 truncate">
            {title}
          </h3>

          {description && (
            <p className="text-pixel text-[10px] text-brand-text-muted line-clamp-2">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Grip Lines */}
        <div className="absolute bottom-2 left-4 right-4 flex gap-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-brand-border/30" />
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

export function ArcadeFrame({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "relative bg-brand-surface border-4 border-brand-border",
        "before:absolute before:inset-0 before:border-2 before:border-brand-border/30",
        className,
      )}
    >
      {/* Corner Accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-brand-primary" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-brand-primary" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-brand-primary" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-brand-primary" />

      {title && (
        <div className="absolute -top-3 left-6 px-2 bg-brand-surface">
          <span className="text-pixel text-xs text-brand-primary">{title}</span>
        </div>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
}
