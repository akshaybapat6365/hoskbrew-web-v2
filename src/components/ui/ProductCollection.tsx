"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CartridgeCard } from "./CartridgeCard";
import type { Product } from "@/types";

interface ProductCollectionProps {
  products: Product[];
  title?: string;
  className?: string;
}

/**
 * Arcade-style product collection room with cartridge-style cards
 */
export function ProductCollection({
  products,
  title,
  className,
}: ProductCollectionProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Collection Room Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-elevated via-brand-bg to-brand-bg-elevated opacity-50" />

      {/* Pixel Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {title && (
        <div className="relative mb-8 text-center">
          <motion.h2
            className="text-heading retro-glow-blue inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>{" "}
          <div className="mt-2 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-brand-primary rounded-sm"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Collection Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CartridgeCard
              title={product.name}
              description={product.tagline}
              image={product.image}
              href={`/products/${product.slug}`}
              platform={product.platform?.toUpperCase()}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface ProductShowcaseProps {
  product: Product;
  className?: string;
}

/**
 * Featured product showcase with 3D hover and detailed view
 */
export function ProductShowcase({ product, className }: ProductShowcaseProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
        className,
      )}
    >
      {/* Product Image with 3D Effect */}
      <motion.div
        className="relative"
        whileHover={{ rotateY: 5, rotateX: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ perspective: 1000 }}
      >
        <div className="relative aspect-[4/3] bg-brand-bg-elevated border-2 border-brand-border overflow-hidden group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 crt-scanlines opacity-20 pointer-events-none" />

          {/* Platform Badge */}
          {product.platform && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 border border-brand-primary">
              <span className="text-pixel text-xs text-brand-primary">
                {product.platform.toUpperCase()}
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-brand-accent/20 border border-brand-accent">
            <span className="text-pixel text-xs text-brand-accent uppercase">
              {product.category}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-heading text-brand-text">{product.name}</h2>
        <p className="text-subhead">{product.tagline}</p>
        <p className="text-body">{product.description}</p>

        {/* Specs Table */}
        {product.specs && (
          <div className="mt-4 bg-brand-surface border border-brand-border p-4">
            <h3 className="text-pixel text-xs text-brand-primary mb-3">
              SPECIFICATIONS
            </h3>
            <dl className="grid grid-cols-2 gap-2">
              {product.specs.slice(0, 4).map((spec) => (
                <div key={spec.label} className="flex flex-col">
                  <dt className="text-pixel text-[10px] text-brand-text-muted">
                    {spec.label}
                  </dt>
                  <dd className="text-pixel text-xs text-brand-text">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg font-pixel text-sm uppercase tracking-wider hover:bg-brand-primary-light transition-colors pixel-corners"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
