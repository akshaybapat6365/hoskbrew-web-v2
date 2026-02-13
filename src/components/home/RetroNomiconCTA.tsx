"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AssetRegistry } from "@/lib/assets";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

const TOPICS = [
  "Dev Tutorials",
  "Hardware Deep Dives",
  "Community Spotlights",
  "New Release Previews",
  "Retro Tech History",
];

export function RetroNomiconCTA() {
  return (
    <Section spacing="loose">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5 lg:col-span-3"
        >
          <motion.span
            variants={staggerItem}
            className="text-label text-brand-accent"
          >
            Publication
          </motion.span>

          <motion.h2
            variants={fadeInLeft}
            className="text-heading text-brand-text"
          >
            RetroNomicon Quarterly
          </motion.h2>

          <motion.p variants={staggerItem} className="text-subhead max-w-xl">
            The indie developer&apos;s guide to retro game development.
            Tutorials, hardware deep dives, community spotlights, and everything
            you need to ship games on classic hardware.
          </motion.p>

          <motion.ul variants={staggerItem} className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs text-brand-text-muted"
              >
                {topic}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={staggerItem} className="flex gap-3 pt-2">
            <Button href="/retronomicon" variant="accent" size="lg">
              Read the Latest Issue
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex items-center justify-center lg:col-span-2"
        >
          <div className="absolute h-72 w-72 rounded-full bg-brand-primary/10 blur-[80px]" />
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-2xl border border-brand-border bg-brand-bg-elevated shadow-[0_0_0_1px_rgba(0,122,255,0.10)]" />
            <div className="pixel-grid-bg absolute inset-0 rounded-2xl opacity-70" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl crt-scanlines opacity-[0.16]" />
            <div className="absolute inset-3 rounded-xl border border-brand-border/60 bg-brand-surface/35" />
            <Image
              src={AssetRegistry.mascot.bw}
              alt="HoskBrew mascot reading RetroNomicon"
              fill
              className="object-contain opacity-75 drop-shadow-[0_0_28px_rgba(0,122,255,0.18)]"
              sizes="320px"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
