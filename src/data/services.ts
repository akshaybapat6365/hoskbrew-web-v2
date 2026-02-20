import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "circuit-boards",
    name: "Circuit Boards",
    tagline: "High quality PCBs and flashing",
    description:
      "Source PCBs directly through us and have us flash your ROMs on site during assembly. We work with you to test your ROMs for quality assurance.",
    icon: "cpu",
    features: ["PCBs for most popular systems", "Unique PCBs available"],
  },
  {
    slug: "cartridge-manufacturing",
    name: "Cartridge Manufacturing",
    tagline: "High quality injection molding, US manufacturing.",
    description:
      "Whether you need PCBs or supply your own we can manage full cartridge production with PCBs and Shells for most popular retro systems. Huge selection of colors, including transparent and glow in the dark!",
    icon: "package",
    features: [
      "Shells for most Retro-Systems",
      "Custom colors and finishes",
      "High quality art labels",
      "With or Without OEM Logos",
      "Dust Sleeves available",
    ],
  },
  {
    slug: "packaging-design",
    name: "Packaging Design",
    tagline: "Professional packaging options",
    description:
      "Authentic replica packaging for that classic look or new packaging designed to be practical and attractive. From NES-style cardboard boxes to GBA clamshells, and Sega plastic cases. Complete your packaging with manuals and spacing inserts.",
    icon: "box",
    features: [
      "Era-accurate box designs",
      "Full-color instruction manual printing",
      "Inserts and extras",
      "Shrink wrapping available",
    ],
  },
  {
    slug: "fulfillment-distribution",
    name: "Fulfillment & Distribution",
    tagline: "We ship so you can focus on creating",
    description:
      "Warehousing, pick-and-pack, and worldwide shipping for your homebrew releases. Doing a crowdfunding campaign or a large initial release? We can fulfill your shipping list right from our warehouse. Otherwise we freight ship to your door.",
    icon: "truck",
    features: [
      "Pick, pack, and ship worldwide",
      "Tracking and delivery confirmation",
      "Bulk or Freight Shipping",
    ],
  },
  {
    slug: "bonus-parts",
    name: "Bonus Parts",
    tagline: "Offer something special to your customers",
    description:
      "Custom controller or system shell parts add a unique offering to accompany your games. Have any ideas, always ask - we love to fulfill special requests!",
    icon: "sparkles",
    features: [
      "Controller Shells & buttons",
      "System Shells",
      "Custom parts request",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
