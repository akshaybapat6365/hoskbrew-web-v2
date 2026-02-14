import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Offerings | HoskBrew",
  description:
    "White-label physical release templates: packaging, manuals, cartridge labels, and complete kit presentation examples.",
};

export default function OfferingsIndexPage() {
  return (
    <>
      <PageHeader
        title="Offerings"
        subtitle="White-label physical release templates — packaging, manuals, cartridge labels, and full kit presentation."
        label="White Label"
      />

      <Section spacing="loose">
        <Container>
          <Link
            href="/products/offerings/crystal-mines"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          >
            <div className="relative overflow-hidden rounded-2xl retro-border-glow scanline-sweep bg-brand-bg-elevated">
              <div className="pointer-events-none absolute inset-0 pixel-grid-bg opacity-60" />
              <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.14] animate-[crt-flicker_8s_infinite] motion-reduce:animate-none" />

              <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">Collection</Badge>
                    <Badge variant="primary">Crystal Mines</Badge>
                  </div>

                  <h2 className="text-heading text-brand-text glitch-hover">
                    Crystal Mines Kit Templates
                  </h2>

                  <p className="text-body max-w-xl">
                    A complete example of a premium small-run physical release:
                    retail box (front/back), manual cover, cartridge label
                    close-ups, and full kit presentation in two editions.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center justify-center rounded-md bg-brand-primary px-8 py-3.5 text-base font-semibold text-brand-bg shadow-[0_0_0_1px_rgba(0,122,255,0.32),0_1px_3px_rgba(0,0,0,0.45)] transition-all duration-200 group-hover:bg-brand-primary-light group-hover:shadow-[0_0_18px_rgba(0,122,255,0.40),0_0_42px_rgba(0,122,255,0.18)]">
                      Browse Templates
                    </span>
                    <span className="text-sm text-brand-text-dim">
                      16 assets | 2 editions
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-border bg-brand-bg">
                  <Image
                    src="/assets/images/offerings/crystal-mines/11.png"
                    alt="Crystal Mines full kit presentation preview"
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </Section>
    </>
  );
}
