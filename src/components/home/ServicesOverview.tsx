"use client";

import { motion } from "framer-motion";
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
 * Homepage services overview - 5 column grid with simplified cards
 */
export function ServicesOverview() {
  return (
    <section className="relative bg-[#11192C] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 flex flex-col items-center text-center gap-3"
        >
          <span className="text-sm uppercase tracking-widest text-white/50 font-medium">
            Services
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
            End-to-End Manufacturing
          </h2>
          <p className="text-white/60 max-w-2xl text-base">
            End-to-end manufacturing, packaging, quality assurance, and
            fulfillment. Everything you need to ship your retro game on real
            cartridges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Cpu;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col items-center text-center gap-3 rounded-lg p-4 transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <h3 className="font-sans font-black uppercase text-sm text-white leading-[0.95] tracking-tight">
                  {service.name}
                </h3>
                <p className="text-xs leading-relaxed text-white/50">
                  {service.tagline}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
