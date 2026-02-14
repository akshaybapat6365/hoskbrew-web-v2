"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { products } from "@/data/products";

const PLATFORM_LABELS: Record<string, string> = {
  nes: "NES",
  snes: "SNES",
  gb: "Game Boy",
  gba: "GBA",
  genesis: "Genesis",
  multi: "Multi-Platform",
};

export function ProductsPreview() {
  const preview = products.slice(0, 4);

  return (
    <Section spacing="loose">
      <SectionHeader
        label="Products"
        title="Hardware & Cartridges"
        description="Everything you need to ship a physical retro game — from PCBs and shells to complete cartridge manufacturing."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {preview.map((product) => (
          <motion.div key={product.slug} variants={staggerItem}>
            <Card
              title={product.name}
              description={product.tagline}
              image={product.image}
              href={`/products/${product.slug}`}
              label={PLATFORM_LABELS[product.platform] ?? product.platform}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button href="/products" variant="secondary" size="lg">
          View All Products
        </Button>
      </div>
    </Section>
  );
}
