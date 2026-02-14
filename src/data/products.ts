import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "crystal-mines",
    name: "Crystal Mines",
    tagline: "A new adventure for the original Game Boy",
    description:
      "Crystal Mines is a brand-new puzzle-action game for the original Game Boy. Navigate treacherous underground caverns, collect crystals, and outsmart enemies across 50 hand-crafted levels. Ships in a premium custom shell with full-color manual and collector's box.",
    category: "game",
    platform: "gb",
    image: "/assets/images/Crystal_Mines_Ad.png",
    gallery: [
      "/assets/images/offerings/crystal-mines/01.webp",
      "/assets/images/offerings/crystal-mines/02.webp",
      "/assets/images/offerings/crystal-mines/03.webp",
      "/assets/images/offerings/crystal-mines/04.webp",
      "/assets/images/offerings/crystal-mines/05.webp",
      "/assets/images/offerings/crystal-mines/06.webp",
      "/assets/images/offerings/crystal-mines/07.webp",
      "/assets/images/offerings/crystal-mines/08.webp",
      "/assets/images/offerings/crystal-mines/09.webp",
      "/assets/images/offerings/crystal-mines/10.webp",
      "/assets/images/offerings/crystal-mines/11.webp",
      "/assets/images/offerings/crystal-mines/12.webp",
      "/assets/images/offerings/crystal-mines/13.webp",
      "/assets/images/offerings/crystal-mines/14.webp",
      "/assets/images/offerings/crystal-mines/15.webp",
      "/assets/images/offerings/crystal-mines/16.webp",
    ],
    featured: true,
    specs: [
      { label: "Platform", value: "Game Boy (DMG)" },
      { label: "Genre", value: "Puzzle / Action" },
      { label: "Levels", value: "50" },
      { label: "Save", value: "Battery-backed SRAM" },
      { label: "Shell", value: "Custom clear purple" },
      { label: "Includes", value: "Cart, manual, box, stickers" },
    ],
  },
  {
    slug: "nes-cart-shells",
    name: "NES Cartridge Shells",
    tagline: "Professional-grade replacement shells for NES",
    description:
      "High-quality injection-molded cartridge shells for the Nintendo Entertainment System. Available in multiple colors with precision-fit tolerances. Perfect for homebrew releases or replacing damaged originals.",
    category: "hardware",
    platform: "nes",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Material", value: "ABS plastic" },
      { label: "Colors", value: "Gray, black, clear, custom" },
      { label: "Includes", value: "Shell, screws, label window" },
      { label: "Compatibility", value: "Standard 72-pin NES carts" },
    ],
  },
  {
    slug: "gb-pcb-kit",
    name: "Game Boy PCB Kit",
    tagline: "Flash-ready PCBs for Game Boy homebrew",
    description:
      "Production-ready printed circuit boards designed for Game Boy homebrew development. Features MBC5 mapper support, battery-backed SRAM, and gold-plated edge connectors for reliable contact.",
    category: "hardware",
    platform: "gb",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Mapper", value: "MBC5" },
      { label: "ROM", value: "Up to 8 Mbit" },
      { label: "RAM", value: "256 Kbit SRAM" },
      { label: "Connector", value: "Gold-plated edge" },
    ],
  },
  {
    slug: "snes-cart-shells",
    name: "SNES Cartridge Shells",
    tagline: "Premium shells for Super Nintendo releases",
    description:
      "Precision-molded Super Nintendo cartridge shells with authentic feel. Designed for homebrew publishers who demand professional fit and finish on their physical releases.",
    category: "hardware",
    platform: "snes",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Material", value: "ABS plastic" },
      { label: "Colors", value: "Gray, smoke, clear, custom" },
      { label: "Region", value: "NTSC / PAL compatible" },
    ],
  },
  {
    slug: "gba-pcb-kit",
    name: "GBA PCB Kit",
    tagline: "Game Boy Advance homebrew boards",
    description:
      "Custom PCBs for Game Boy Advance development. Supports up to 32 Mbit ROM with optional SRAM or FRAM save storage. Gold-plated connectors ensure years of reliable play.",
    category: "hardware",
    platform: "gba",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "ROM", value: "Up to 32 Mbit" },
      { label: "Save", value: "SRAM or FRAM" },
      { label: "Connector", value: "Gold-plated" },
    ],
  },
  {
    slug: "genesis-cart-shells",
    name: "Genesis Cartridge Shells",
    tagline: "Sega Genesis / Mega Drive shells",
    description:
      "Replacement cartridge shells for the Sega Genesis and Mega Drive. Authentic form factor with snap-fit design. Available in standard black or custom colors for limited-edition releases.",
    category: "hardware",
    platform: "genesis",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Material", value: "ABS plastic" },
      { label: "Compatibility", value: "Genesis / Mega Drive" },
      { label: "Colors", value: "Black, clear, custom" },
    ],
  },
  {
    slug: "custom-manual-design",
    name: "Custom Manual Design",
    tagline: "Professional game manuals that feel authentic",
    description:
      "Full-service manual design and printing for your homebrew game. Our designers create authentic-feeling instruction booklets that match the era of your target platform, from NES to GBA.",
    category: "service",
    platform: "multi",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Pages", value: "8–32 pages" },
      { label: "Print", value: "Full color or period-accurate B&W" },
      { label: "Finish", value: "Saddle-stitched or perfect bound" },
      { label: "Turnaround", value: "2–3 weeks" },
    ],
  },
  {
    slug: "label-printing",
    name: "Custom Label Printing",
    tagline: "High-quality cart labels with precise die-cuts",
    description:
      "Precision die-cut adhesive labels for all major cartridge formats. Printed on premium vinyl with UV-resistant inks for lasting color. We handle design, proofing, and production.",
    category: "service",
    platform: "multi",
    image: "/assets/images/HoskBrew_Full_Color.svg",
    specs: [
      { label: "Material", value: "Premium vinyl" },
      { label: "Finish", value: "Gloss or matte laminate" },
      { label: "MOQ", value: "25 labels" },
      { label: "Platforms", value: "NES, SNES, GB, GBA, Genesis" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: Product["category"],
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
