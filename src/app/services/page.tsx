import { Metadata } from "next";
import { services } from "@/data/services";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";
import {
  Cpu,
  Package,
  Box,
  Truck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | HoskBrew",
  description:
    "End-to-end cartridge manufacturing, packaging, quality assurance, and fulfillment for homebrew game developers.",
};

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  box: Box,
  truck: Truck,
  sparkles: Sparkles,
};

const crystalMinesImages = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/images/offerings/crystal-mines/${num}.webp`,
    alt: `Crystal Mines product image ${num}`,
  };
});

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#11192C] pt-28 pb-10 sm:pt-32 sm:pb-14 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.9] mb-5">
              Services
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              End-to-end manufacturing, packaging, quality assurance, and
              fulfillment. Everything you need to ship your retro game on real
              cartridges.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#11192C] py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? Cpu;
              const isLast = idx === services.length - 1;
              const isOdd = services.length % 2 !== 0;

              return (
                <div
                  key={service.slug}
                  className={`bg-[#0B1120] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all duration-300${isLast && isOdd ? " md:col-span-2 md:max-w-3xl md:mx-auto md:w-full" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                        {service.name}
                      </h2>
                      <p className="text-sm text-white/50 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <Icon className="h-5 w-5 text-brand-primary" />
                    </div>
                  </div>

                  <p className="text-sm text-white/40 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/[0.08]">
                    <p className="text-xs text-brand-primary/80 leading-relaxed font-medium">
                      {service.features}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crystal Mines gallery */}
      <section className="bg-[#11192C] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              Work Samples
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92] mb-3">
              Crystal Mines
            </h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              A showcase of our manufacturing, packaging, and fulfillment
              capabilities from PCB to retail-ready product.
            </p>
          </div>

          <InteractiveGallery images={crystalMinesImages} />
        </div>
      </section>
    </>
  );
}
