"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { services } from "@/data/services";
import {
  Cpu,
  Package,
  Box,
  Truck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  box: Box,
  truck: Truck,
  sparkles: Sparkles,
};

/**
 * Homepage services overview - dark background (#11192C), 5-column grid.
 * Simplified cards showing name + tagline only. No duplicate content from services page.
 */
export function ServicesOverview() {
  return (
    <section className="relative bg-[#11192C] py-20 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
            What We Do
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              End-to-End Manufacturing
            </h2>
            <Button href="/services" variant="outline" size="md">
              All Services
            </Button>
          </div>
        </motion.div>

        {/* 5-column service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Cpu;
            return (
              <motion.div
                key={service.slug}
                variants={staggerItem}
                className="group flex flex-col gap-3 p-5 bg-[#11192C] hover:bg-white/[0.04] transition-colors duration-300"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Icon className="h-3.5 w-3.5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-sm text-white leading-[0.95] tracking-tight mb-1.5">
                    {service.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/40">
                    {service.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
