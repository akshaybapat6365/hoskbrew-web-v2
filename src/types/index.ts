export type ProductCategory = "game" | "hardware" | "accessory" | "service";
export type Platform = "nes" | "snes" | "gb" | "gba" | "genesis" | "multi";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  platform: Platform;
  price: string;
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
  priceRange?: string;
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
