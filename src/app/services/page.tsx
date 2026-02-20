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

// Features as plain text sentences per service
const featureSentences: Record<string, string> = {
  "circuit-boards": "Includes PCBs for most popular systems and unique PCB options.",
  "cartridge-manufacturing": "Includes shells for most retro systems with custom colors and finishes, high quality art labels, OEM logo options, and dust sleeves.",
  "packaging-design": "Includes era-accurate box designs, full-color instruction manual printing, inserts and extras, plus shrink wrapping.",
  "fulfillment-distribution": "Includes pick, pack, and ship worldwide with tracking, delivery confirmation, and bulk or freight shipping.",
  "bonus-parts": "Includes controller shells and buttons, system shells, plus custom parts requests.",
};

const crystalMinesImages = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/images/offerings/crystal-mines/${num}.webp`,
    alt: `Crystal Mines ${num}`,
  };
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-[#11192C] pt-28 pb-12 sm:pt-32 sm:pb-16 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.9]">
              Services
            </h1>
            <p className="text-white/60 max-w-2xl text-base">
              End-to-end manufacturing, packaging, quality assurance, and
              fulfillment. Everything you need to ship your retro game on real
              cartridges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tiles - Compact 2-Column */}
      <section className="bg-[#11192C] py-12 sm:py-16 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Cpu;

              return (
                <div
                  key={service.slug}
                  className="flex gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                      <Icon className="h-5 w-5 text-white/80" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-black uppercase tracking-tight text-white leading-tight mb-1">
                      {service.name}
                    </h2>
                    <p className="text-sm text-white/70 font-medium mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed mb-2">
                      {service.description}
                    </p>
                    <p className="text-xs text-cyan-400/80 leading-relaxed">
                      {featureSentences[service.slug]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crystal Mines Gallery */}
      <section className="bg-[#11192C] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Crystal Mines
            </h2>
            <p className="text-white/60 max-w-2xl text-base">
              A showcase of our manufacturing, packaging, and fulfillment
              capabilities from PCB to retail-ready product.
            </p>
          </div>

          <InteractiveGallery images={crystalMinesImages} columns={4} />
        </div>
      </section>
    </>
  );
}
