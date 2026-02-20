import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "circuit-boards",
    name: "Circuit Boards",
    tagline: "High quality PCBs and flashing",
    description:
      "Source PCBs directly through us and have us flash your ROMs on site during assembly. We work with you to test your ROMs for quality assurance.",
    icon: "cpu",
    features: "Includes PCBs for most popular systems and unique PCB options.",
  },
  {
    slug: "cartridge-manufacturing",
    name: "Cartridge Manufacturing",
    tagline: "High quality injection molding, US manufacturing.",
    description:
      "Whether you need PCBs or supply your own we can manage full cartridge production with PCBs and Shells for most popular retro systems. Huge selection of colors, including transparent and glow in the dark!",
    icon: "package",
    features:
      "Includes shells for most retro systems, custom colors and finishes, high quality art labels, with or without OEM logos, and dust sleeves.",
  },
  {
    slug: "packaging-design",
    name: "Packaging Design",
    tagline: "Professional packaging options",
    description:
      "Authentic replica packaging for that classic look or new packaging designed to be practical and attractive. From NES-style cardboard boxes to GBA clamshells, and Sega plastic cases. Complete your packaging with manuals and spacing inserts.",
    icon: "box",
    features:
      "Includes era-accurate box designs, full-color instruction manual printing, inserts and extras, and shrink wrapping.",
  },
  {
    slug: "fulfillment-distribution",
    name: "Fulfillment & Distribution",
    tagline: "We ship so you can focus on creating",
    description:
      "Warehousing, pick-and-pack, and worldwide shipping for your homebrew releases. Doing a crowdfunding campaign or a large initial release? We can fulfill your shipping list right from our warehouse. Otherwise we freight ship to your door.",
    icon: "truck",
    features:
      "Includes pick, pack, and ship worldwide, tracking and delivery confirmation, and bulk or freight shipping.",
  },
  {
    slug: "bonus-parts",
    name: "Bonus Parts",
    tagline: "Offer something special to your customers",
    description:
      "Custom controller or system shell parts add a unique offering to accompany your games. Have any ideas, always ask - we love to fulfill special requests!",
    icon: "sparkles",
    features:
      "Includes controller shells & buttons, system shells, and custom parts requests.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
