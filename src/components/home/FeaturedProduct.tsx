"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProduct() {
  const featured = getFeaturedProducts()[0];
  if (!featured) return null;

  return (
    <Section background="elevated" spacing="loose">
      <SectionHeader
        label="Featured Release"
        title="Crystal Mines"
        description="A brand-new puzzle-action adventure for the original Game Boy — now available on cartridge."
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-brand-border bg-brand-surface/30 transition-all duration-300 hover:scale-[1.01] hover:border-brand-primary/60 hover:shadow-[0_0_0_1px_rgba(0,122,255,0.22),0_0_36px_rgba(0,122,255,0.14)]"
        >
          <Image
            src={featured.image}
            alt={featured.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.12]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-3"
          >
            <Badge variant="accent">Game Boy</Badge>
            <Badge variant="primary">New Release</Badge>
          </motion.div>

          <motion.p variants={staggerItem} className="text-body max-w-md">
            {featured.description}
          </motion.p>

          {featured.specs && (
            <motion.dl
              variants={staggerItem}
              className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm"
            >
              {featured.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col">
                  <dt className="text-brand-text-dim text-xs uppercase tracking-wide">
                    {spec.label}
                  </dt>
                  <dd className="text-brand-text">{spec.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}

          <motion.div variants={staggerItem} className="flex gap-3 pt-2">
            <Button
              href={`/products/${featured.slug}`}
              variant="primary"
              size="lg"
            >
              View Details
            </Button>
            <span className="flex items-center text-lg font-semibold text-brand-accent">
              {featured.price}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
