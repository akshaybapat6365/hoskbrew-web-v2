import Hero from "@/components/Hero";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { RetroNomiconCTA } from "@/components/home/RetroNomiconCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <ProductsPreview />
      <ServicesOverview />
      <RetroNomiconCTA />
      <FinalCTA />
    </>
  );
}
