import type { OfferingCollection, OfferingGroup, OfferingItem } from "@/types";
import { crystalMinesOffering } from "@/data/offerings/crystalMines";

export const offeringCollections = [
  crystalMinesOffering,
] satisfies OfferingCollection[];

export function getOfferingCollectionBySlug(
  slug: string,
): OfferingCollection | undefined {
  return offeringCollections.find((c) => c.slug === slug);
}

export function getOfferingItemsByGroup(
  collection: OfferingCollection,
  group: OfferingGroup,
): OfferingItem[] {
  return collection.items
    .filter((i) => i.group === group)
    .sort((a, b) => a.order - b.order);
}

export function getOfferingGroups(
  collection: OfferingCollection,
): OfferingGroup[] {
  const groups = new Set<OfferingGroup>();
  for (const item of collection.items) groups.add(item.group);
  return Array.from(groups);
}
