export function clampIndex(count: number, nextIndex: number): number {
  if (count <= 0) return -1;
  const mod = ((nextIndex % count) + count) % count;
  return mod;
}
