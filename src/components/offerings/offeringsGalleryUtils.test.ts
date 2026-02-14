import { describe, expect, it } from "vitest";
import { clampIndex } from "./offeringsGalleryUtils";

describe("clampIndex", () => {
  it("returns -1 when count <= 0", () => {
    expect(clampIndex(0, 1)).toBe(-1);
    expect(clampIndex(-1, 1)).toBe(-1);
  });

  it("wraps forward", () => {
    expect(clampIndex(5, 0)).toBe(0);
    expect(clampIndex(5, 4)).toBe(4);
    expect(clampIndex(5, 5)).toBe(0);
    expect(clampIndex(5, 6)).toBe(1);
  });

  it("wraps backward", () => {
    expect(clampIndex(5, -1)).toBe(4);
    expect(clampIndex(5, -2)).toBe(3);
    expect(clampIndex(5, -6)).toBe(4);
  });
});
