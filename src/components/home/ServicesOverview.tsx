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
 * Homepage services overview — dark background (#11192C), displays all 5 services.
 */
export function ServicesOverview() {
  return (
    <section className="relative bg-[#11192C] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 flex flex-col items-center text-center gap-3"
        >
          <span className="text-sm uppercase tracking-widest text-white/50 font-medium">
            Services
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
            End-to-End Manufacturing
          </h2>
          <p className="text-white/60 max-w-2xl text-base">
            End-to-end manufacturing, packaging, quality assurance, and
            fulfillment — everything you need to ship your retro game on real
            cartridges.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Cpu;
            return (
              <motion.div
                key={service.slug}
                variants={staggerItem}
                className="group flex flex-col gap-4 rounded-lg p-6 transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <h3 className="font-sans font-black uppercase text-lg text-white leading-[0.95] tracking-tight">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {service.tagline}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="primary" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
