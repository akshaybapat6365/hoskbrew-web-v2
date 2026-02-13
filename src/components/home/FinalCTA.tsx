"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export function FinalCTA() {
  return (
    <Section spacing="loose">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <motion.span
          variants={staggerItem}
          className="text-label text-brand-accent"
        >
          Ready to Ship?
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="text-display text-brand-text max-w-3xl"
        >
          Let&apos;s Put Your Game{" "}
          <span className="text-brand-primary retro-glow-blue">
            on a Cartridge
          </span>
        </motion.h2>

        <motion.p variants={staggerItem} className="text-subhead max-w-xl">
          From a single prototype to a full production run — we&apos;ll help you
          bring your retro game to life on real hardware.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          <Button href="/contact" variant="primary" size="lg">
            Get a Quote
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Browse Products
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
