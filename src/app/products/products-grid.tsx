"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { products } from "@/data/products";
import type { ProductCategory, Platform } from "@/types";

const CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "game", label: "Games" },
  { value: "hardware", label: "Hardware" },
  { value: "accessory", label: "Accessories" },
  { value: "service", label: "Services" },
];

const PLATFORMS: { value: Platform | "all"; label: string }[] = [
  { value: "all", label: "All Platforms" },
  { value: "nes", label: "NES" },
  { value: "snes", label: "SNES" },
  { value: "gb", label: "Game Boy" },
  { value: "gba", label: "GBA" },
  { value: "genesis", label: "Genesis" },
];

const PLATFORM_LABELS: Record<string, string> = {
  nes: "NES",
  snes: "SNES",
  gb: "Game Boy",
  gba: "GBA",
  genesis: "Genesis",
  multi: "Multi-Platform",
};

export function ProductsGrid() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [platform, setPlatform] = useState<Platform | "all">("all");

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (platform !== "all" && p.platform !== platform) return false;
    return true;
  });

  return (
    <Section spacing="loose">
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all cursor-pointer ${
                category === cat.value
                  ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                  : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <span className="hidden h-5 w-px bg-brand-border sm:block" />

        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((plat) => (
            <button
              key={plat.value}
              onClick={() => setPlatform(plat.value)}
              className={`rounded-full border px-3 py-1 text-xs transition-all cursor-pointer ${
                platform === plat.value
                  ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                  : "border-brand-border text-brand-text-dim hover:text-brand-text-muted"
              }`}
            >
              {plat.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${category}-${platform}`}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((product) => (
            <motion.div key={product.slug} variants={staggerItem}>
              <Card
                title={product.name}
                description={product.tagline}
                image={product.image}
                href={`/products/${product.slug}`}
                label={PLATFORM_LABELS[product.platform]}
              />
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <motion.div
              variants={staggerItem}
              className="col-span-full py-16 text-center"
            >
              <p className="text-brand-text-muted">
                No products match your filters.{" "}
                <button
                  onClick={() => {
                    setCategory("all");
                    setPlatform("all");
                  }}
                  className="text-brand-primary underline cursor-pointer"
                >
                  Clear filters
                </button>
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
