import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { OfferingsGallery } from "@/components/offerings/OfferingsGallery";
import { crystalMinesOffering } from "@/data/offerings/crystalMines";
import { ProductsGrid } from "./products-grid";

export const metadata: Metadata = {
  title: "Products | HoskBrew",
  description:
    "White-label physical release offerings and a catalog of cartridge shells, PCBs, games, and manufacturing supplies for retro homebrew.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Browse our white-label physical release offerings, plus cartridge shells, PCBs, complete games, and everything you need to ship physical retro games."
        label="Products"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#offerings" variant="primary" size="lg">
            White Label Offerings
          </Button>
          <Button href="#catalog" variant="secondary" size="lg">
            Stock Catalog
          </Button>
        </div>
      </PageHeader>

      <div id="offerings" className="scroll-mt-28" />
      <Section background="elevated" spacing="loose">
        <OfferingsGallery collection={crystalMinesOffering} />

        <div className="mt-10 flex justify-center">
          <Button href="/products/offerings" variant="outline" size="lg">
            View All Offerings
          </Button>
        </div>
      </Section>

      <div id="catalog" className="scroll-mt-28" />
      <ProductsGrid />
    </>
  );
}
