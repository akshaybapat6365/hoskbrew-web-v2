import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { OfferingsGallery } from "@/components/offerings/OfferingsGallery";
import { crystalMinesOffering } from "@/data/offerings/crystalMines";

export const metadata: Metadata = {
  title: "Crystal Mines Offerings | HoskBrew",
  description:
    "White-label physical kit templates for Crystal Mines: retail box panels, manual covers, cartridge label close-ups, and full kit presentation in two editions.",
};

export default function CrystalMinesOfferingsPage() {
  return (
    <>
      <PageHeader
        title="Crystal Mines Offerings"
        subtitle="Packaging, manual, cartridge label, and full kit presentation templates in Classic + Supernova editions."
        label="White Label"
      />

      <Section spacing="loose">
        <OfferingsGallery collection={crystalMinesOffering} showIntro={false} />
      </Section>
    </>
  );
}
