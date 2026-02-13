/**
 * Brand color palette for HoskBrew.
 *
 * These values mirror the Visual Center brand guide and are intended to be the
 * single source of truth for any non-Tailwind use (canvas, charts, shadows).
 */
export const brandColors = {
  bg: "#0B0E11",
  bgElevated: "#151921",
  surface: "#1C2233",
  surfaceHover: "#232D40",
  border: "#2A3347",
  borderHover: "#374463",

  text: "#E8E6E3",
  textMuted: "#8B8D94",
  textDim: "#5A5D66",

  primary: "#1B8F7E",
  primaryLight: "#24B8A0",
  primaryDark: "#14705F",

  accent: "#D4A843",
  accentLight: "#E0BC5E",
  accentDark: "#B08A2E",

  highlight: "#C74634",
  highlightLight: "#D95A48",

  success: "#2D9F6B",
  warning: "#D4A843",
  error: "#C74634",
} as const;

/**
 * Common glow presets (box-shadow values) for the UI.
 */
export const glowPresets = {
  primarySoft:
    "0 0 0 1px rgba(27, 143, 126, 0.24), 0 0 22px rgba(27, 143, 126, 0.22)",
  primaryStrong:
    "0 0 0 1px rgba(36, 184, 160, 0.35), 0 0 36px rgba(27, 143, 126, 0.40)",
  accentSoft:
    "0 0 0 1px rgba(212, 168, 67, 0.22), 0 0 24px rgba(212, 168, 67, 0.20)",
  highlightSoft:
    "0 0 0 1px rgba(199, 70, 52, 0.22), 0 0 26px rgba(199, 70, 52, 0.22)",
  surfaceLift:
    "0 10px 30px rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(42, 51, 71, 0.85)",
} as const;
