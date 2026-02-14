import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { OfferingsGallery } from "@/components/offerings/OfferingsGallery";
import { crystalMinesOffering } from "@/data/offerings/crystalMines";
import { ProductsGrid } from "./products-grid";

export const metadata: Metadata = {
  title: "Our Work | HoskBrew",
  description:
    "See the games, hardware, and collectibles we've built. Every cartridge, every box, every detail crafted with passion for retro gaming.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Built With Passion"
        subtitle="We create retro video games, custom hardware, and premium physical releases. Every detail matters."
        label="Our Work"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#showcase" variant="primary" size="lg">
            View Showcase
          </Button>
          <Button href="#catalog" variant="outline" size="lg">
            Browse Catalog
          </Button>
        </div>
      </PageHeader>

      <div id="showcase" className="scroll-mt-28" />
      <Section background="elevated" spacing="loose">
        <Container>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">Featured Project</Badge>
                <Badge variant="primary">Crystal Mines</Badge>
              </div>
              <h2 className="text-heading phosphor-glow">
                Crystal Mines: Complete Physical Release
              </h2>
              <p className="text-body max-w-3xl">
                A showcase of what we can build. From cartridge shells to retail
                packaging, every element crafted for collectors and enthusiasts.
                Browse the full kit presentation below.
              </p>
            </div>

            <OfferingsGallery
              collection={crystalMinesOffering}
              showIntro={false}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-brand-border">
              <div className="flex flex-col gap-1">
                <span className="terminal-text text-sm">
                  PROJECT SPECIFICATIONS
                </span>
                <span className="text-brand-text-muted">
                  Platform: Game Boy | Edition: Classic + Supernova | Assets: 16
                </span>
              </div>
              <Button href="/products/crystal-mines" variant="outline">
                View Full Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <div id="catalog" className="scroll-mt-28" />
      <Section spacing="loose">
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-heading">Stock Catalog</h2>
              <p className="text-body max-w-2xl">
                Ready-to-ship hardware, components, and games. Professional
                quality for developers and collectors.
              </p>
            </div>
            <ProductsGrid />
          </div>
        </Container>
      </Section>
    </>
  );
}
