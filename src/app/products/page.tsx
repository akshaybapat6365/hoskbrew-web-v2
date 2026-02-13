import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductsGrid } from "./products-grid";

export const metadata: Metadata = {
  title: "Products | HoskBrew",
  description:
    "Cartridge shells, PCBs, games, and manufacturing supplies for NES, SNES, Game Boy, GBA, and Genesis homebrew.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Cartridge shells, PCBs, complete games, and everything you need to ship physical retro games."
        label="Catalog"
      />
      <ProductsGrid />
    </>
  );
}
