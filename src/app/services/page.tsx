import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
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

/** Crystal Mines example images for the showcase gallery */
const crystalMinesImages = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/images/offerings/crystal-mines/${num}.webp`,
    alt: `Crystal Mines example ${num}`,
  };
});

/**
 * Services listing page with Crystal Mines product showcase.
 * Background: #11192C dark theme.
 */
export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#11192C] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-sm uppercase tracking-widest text-white/50 font-medium">
              What We Do
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.9]">
              Services
            </h1>
            <p className="text-white/60 max-w-2xl text-base">
              End-to-end manufacturing, packaging, quality assurance, and
              fulfillment — everything you need to ship your retro game on real
              cartridges.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#11192C] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Cpu;

              return (
                <div key={service.slug}>
                  <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
                    <div className="flex flex-col gap-5 lg:col-span-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-6 w-6 text-white/80" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
                        {service.name}
                      </h2>
                      <p className="text-lg text-white/70">{service.tagline}</p>
                      <p className="text-base text-white/60 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="mt-2 flex flex-col gap-2">
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-sm text-white/50"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap items-center gap-4">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                        >
                          Learn More
                        </Button>
                        <Button href="/contact" variant="outline">
                          Get a Quote
                        </Button>
                      </div>
                    </div>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                      <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                        <Icon className="h-20 w-20 text-white/20" />
                      </div>
                    </div>
                  </div>

                  {i < services.length - 1 && (
                    <div className="mt-16 border-t border-white/10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crystal Mines Example Showcase */}
      <section className="bg-[#11192C] py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="text-sm uppercase tracking-widest text-white/50 font-medium">
              Example Work
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Crystal Mines
            </h2>
            <p className="text-white/60 max-w-2xl text-base">
              A showcase of our manufacturing, packaging, and fulfillment
              capabilities — from PCB to retail-ready product.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {crystalMinesImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
