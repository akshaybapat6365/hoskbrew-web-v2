import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
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
  "NES, SNES, Game Boy, GBA, Genesis cartridge production",
  "PCB fabrication with gold-plated connectors",
  "Custom injection-molded shells in any color",
  "Full-color manual and packaging design",
  "QA testing on original console hardware",
  "Pick, pack, and ship worldwide",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About HoskBrew"
        subtitle="We help indie developers bring their retro games to life on real cartridges — from prototype to production."
        label="Our Story"
      />

      <Section spacing="loose">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-heading text-brand-text">
              Born from the Homebrew Scene
            </h2>
            <p className="text-body max-w-xl">
              HoskBrew started with a simple frustration: there was no reliable
              way for indie developers to manufacture professional-quality
              cartridges for retro consoles. The existing options were either
              too expensive, too slow, or produced subpar results.
            </p>
            <p className="text-body max-w-xl">
              So we built the infrastructure ourselves — from custom PCB designs
              and injection molds to a full QA lab with every major retro
              console. Today, we serve homebrew developers worldwide, handling
              everything from a single prototype to full production runs of
              thousands of units.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-brand-primary/5 blur-[60px]" />
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
      </Section>

      <Section background="elevated" spacing="normal">
        <SectionHeader label="What We Believe" title="Our Values" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-3 rounded-lg border border-brand-border bg-brand-bg p-6"
            >
              <h3 className="font-retro text-lg text-brand-text">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section spacing="normal">
        <SectionHeader
          label="Capabilities"
          title="What We Do"
          description="End-to-end manufacturing and support for retro game cartridge production."
        />

        <div className="mx-auto max-w-2xl">
          <ul className="flex flex-col gap-3">
            {CAPABILITIES.map((cap) => (
              <li key={cap} className="flex items-start gap-3 text-brand-text">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span className="text-body">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section background="elevated" spacing="normal">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-heading text-brand-text">
            Want to work with us?
          </h2>
          <p className="text-subhead max-w-lg">
            Whether you&apos;re planning your first cartridge run or scaling up
            an existing release, we&apos;d love to hear about your project.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
