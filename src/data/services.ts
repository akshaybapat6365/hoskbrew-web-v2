import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "cartridge-manufacturing",
    name: "Cartridge Manufacturing",
    tagline: "From prototype to production run",
    description:
      "End-to-end cartridge manufacturing for NES, SNES, Game Boy, GBA, and Genesis. We handle PCB fabrication, ROM flashing, shell molding, assembly, and quality testing. Whether you need 50 units or 5,000, we deliver production-quality cartridges ready for retail.",
    icon: "cpu",
    features: [
      "PCB fabrication with gold-plated connectors",
      "ROM programming and verification",
      "Custom shell colors and finishes",
      "Rigorous QA testing on real hardware",
      "Inventory management and fulfillment",
    ],
    leadTime: "4–6 weeks",
  },
  {
    slug: "packaging-design",
    name: "Packaging & Design",
    tagline: "Authentic packaging that sells",
    description:
      "Professional packaging design that captures the look and feel of each console era. From NES-style cardboard boxes to GBA clamshells, we design and print packaging that makes your release feel like it belongs on a store shelf in 1992.",
    icon: "package",
    features: [
      "Era-accurate box design (NES, SNES, GB, GBA, Genesis)",
      "Full-color instruction manual design",
      "Die-cut label printing on premium vinyl",
      "Insert cards, stickers, and extras",
      "Design proofs and revision rounds included",
    ],
    leadTime: "2–3 weeks",
  },
  {
    slug: "qa-testing",
    name: "QA & Testing",
    tagline: "Every cartridge tested on real hardware",
    description:
      "Comprehensive quality assurance testing on original console hardware. Every cartridge is verified for boot, gameplay, save functionality, and edge cases. We catch the bugs that emulators miss.",
    icon: "shield-check",
    features: [
      "Boot and load testing on original hardware",
      "Save/load cycle verification",
      "Multi-region compatibility testing",
      "Edge case and stress testing",
      "Detailed QA reports with screenshots",
    ],
    leadTime: "1–2 weeks",
  },
  {
    slug: "fulfillment",
    name: "Fulfillment & Distribution",
    tagline: "We ship so you can focus on creating",
    description:
      "Warehousing, pick-and-pack, and worldwide shipping for your homebrew releases. We integrate with your online store to handle orders automatically, from individual collectors to bulk distributor orders.",
    icon: "truck",
    features: [
      "Climate-controlled warehousing",
      "Pick, pack, and ship worldwide",
      "Store integration (Shopify, BigCommerce, custom)",
      "Tracking and delivery confirmation",
      "Returns handling",
    ],
    leadTime: "Ongoing",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
