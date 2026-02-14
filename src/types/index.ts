export type ProductCategory = "game" | "hardware" | "accessory" | "service";
export type Platform = "nes" | "snes" | "gb" | "gba" | "genesis" | "multi";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  platform: Platform;
  image: string;
  featured?: boolean;
  specs?: { label: string; value: string }[];
  gallery?: string[];
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  leadTime?: string;
};

export type RetroNomiconIssue = {
  slug: string;
  number: number;
  title: string;
  coverImage: string;
  publishDate: string;
  topics: string[];
  description: string;
};

export type OfferingBackdrop = "dark" | "light" | "grid";

export type OfferingGroup = "Packaging" | "Manual" | "Cartridge" | "Bundle";

export type OfferingEdition = "Classic" | "Supernova";

export type OfferingItem = {
  id: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  group: OfferingGroup;
  edition: OfferingEdition;
  order: number;
  recommendedBackdrop?: OfferingBackdrop;
  tags?: string[];
};

export type OfferingCollection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  items: OfferingItem[];
  defaultBackdrop: OfferingBackdrop;
};
