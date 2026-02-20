"use client";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Cpu, Package, Box, Truck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  box: Box,
  truck: Truck,
  sparkles: Sparkles,
};

export function ServicesOverview() {
  return (
    <section className="relative bg-[#11192C] py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <span className="text-sm uppercase tracking-widest text-brand-primary font-semibold mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl leading-tight mb-6">
            End-to-End Manufacturing
          </h2>
          <p className="text-lg leading-8 text-white/60">
            Everything you need to ship your retro game on real cartridges. From raw materials to retail-ready packaging.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? Cpu;
              return (
                <div key={service.slug} className="flex flex-col relative group rounded-2xl bg-[#0B1120] p-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white uppercase tracking-wide">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                       <Icon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/60">
                    <p className="flex-auto">{service.tagline}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
          
          <div className="mt-16 flex justify-center">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
