import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { AssetRegistry } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About | HoskBrew",
  description:
    "HoskBrew manufactures premium cartridges, packaging, and manuals for indie developers shipping physical games on retro consoles.",
};

const VALUES = [
  {
    title: "Quality First",
    description:
      "Every cartridge is tested on real hardware. Every shell is precision-molded. Every label is die-cut to exact tolerances.",
  },
  {
    title: "Developer-Centric",
    description:
      "We built HoskBrew because we're developers too. Every decision is made with the homebrew creator in mind.",
  },
  {
    title: "Physical Media Matters",
    description:
      "There's something irreplaceable about holding a cartridge, reading a printed manual, and sliding a game into a console.",
  },
  {
    title: "Community Driven",
    description:
      "We sponsor homebrew jams, publish RetroNomicon, and contribute to open-source dev tools for retro platforms.",
  },
];

const CAPABILITIES = [
  { label: "Platforms", detail: "NES, SNES, Game Boy, GBA, Genesis cartridge production" },
  { label: "PCB", detail: "Fabrication with gold-plated connectors" },
  { label: "Shells", detail: "Custom injection-molded in any color" },
  { label: "Packaging", detail: "Full-color manual and packaging design" },
  { label: "QA", detail: "Testing on original console hardware" },
  { label: "Fulfillment", detail: "Pick, pack, and ship worldwide" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#11192C] pt-28 pb-10 sm:pt-32 sm:pb-14 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.9] mb-5">
              About HoskBrew
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              We help indie developers bring their retro games to life on real
              cartridges, from prototype to production.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-[#11192C] py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
                Born from the Homebrew Scene
              </h2>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                HoskBrew started with a simple frustration: there was no
                reliable way for indie developers to manufacture
                professional-quality cartridges for retro consoles. The existing
                options were either too expensive, too slow, or produced subpar
                results.
              </p>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                So we built the infrastructure ourselves from custom PCB designs
                and injection molds to a full QA lab with every major retro
                console. Today, we serve homebrew developers worldwide, handling
                everything from a single prototype to full production runs of
                thousands of units.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative h-64 w-64">
                <Image
                  src={AssetRegistry.mascot.color}
                  alt="HoskBrew octopus mascot"
                  fill
                  className="object-contain"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#11192C] py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              What We Believe
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 p-6 bg-[#11192C] hover:bg-white/[0.03] transition-colors duration-300"
              >
                <h3 className="font-black uppercase tracking-tight text-base text-white leading-[0.95]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/40">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#11192C] py-14 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              What We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="flex flex-col gap-1.5 p-5 bg-[#11192C] hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="text-xs font-black uppercase tracking-widest text-white/60">
                  {cap.label}
                </span>
                <span className="text-sm text-white/35 leading-relaxed">
                  {cap.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11192C] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Want to work with us?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Whether you&apos;re planning your first cartridge run or scaling
              up an existing release, we&apos;d love to hear about your project.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
