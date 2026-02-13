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
              className="group flex flex-col gap-4 rounded-lg border border-brand-border bg-brand-bg p-6 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-[0_0_24px_rgba(27,143,126,0.1)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-primary/10">
                <Icon className="h-5 w-5 text-brand-primary" />
              </div>
              <h3 className="font-retro text-lg text-brand-text">
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
