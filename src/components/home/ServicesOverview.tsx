"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/motion";
import { services } from "@/data/services";
import { Cpu, Package, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  "shield-check": ShieldCheck,
  truck: Truck,
};

export function ServicesOverview() {
  return (
    <Section background="elevated" spacing="loose">
      <SectionHeader
        label="Services"
        title="End-to-End Manufacturing"
        description="From prototype to packaged product — we handle every step of bringing your retro game to physical media."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Cpu;
          return (
            <motion.div
              key={service.slug}
              variants={staggerItem}
              className="group relative overflow-hidden flex flex-col gap-4 rounded-lg p-6 transition-all duration-300 hover:scale-[1.01] retro-border-glow scanline-sweep bg-brand-bg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-primary/10 transition-all duration-300 group-hover:bg-brand-primary/15">
                <Icon className="h-5 w-5 text-brand-primary transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(0,122,255,0.45)]" />
              </div>
              <h3 className="font-sans font-black uppercase text-lg text-brand-text leading-[0.95] tracking-tight glitch-hover">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-brand-text-muted">
                {service.tagline}
              </p>
              {service.leadTime && (
                <span className="mt-auto text-xs text-brand-text-dim">
                  Lead time: {service.leadTime}
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button href="/services" variant="secondary" size="lg">
          Explore Services
        </Button>
      </div>
    </Section>
  );
}
