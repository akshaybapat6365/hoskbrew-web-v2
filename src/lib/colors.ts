/**
 * Brand color palette for HoskBrew.
 *
 * These values mirror the Visual Center brand guide and are intended to be the
 * single source of truth for any non-Tailwind use (canvas, charts, shadows).
 */
export const brandColors = {
  bg: "#11192C",
  bgElevated: "#1A2340",
  surface: "#232D4A",
  surfaceHover: "#2C3756",
  border: "#334166",
  borderHover: "#445580",

  text: "#F0F0F0",
  textMuted: "#9CA3AF",
  textDim: "#6B7280",

  primary: "#007AFF",
  primaryLight: "#3395FF",
  primaryDark: "#0062CC",

  accent: "#44CF6C",
  accentLight: "#66D888",
  accentDark: "#33A854",

  highlight: "#FF3B30",
  highlightLight: "#FF6259",

  success: "#44CF6C",
  warning: "#FFD60A",
  error: "#FF3B30",
} as const;

/**
 * Common glow presets (box-shadow values) for the UI.
 */
export const glowPresets = {
  primarySoft:
    "0 0 0 1px rgba(0, 122, 255, 0.24), 0 0 22px rgba(0, 122, 255, 0.22)",
  primaryStrong:
    "0 0 0 1px rgba(51, 149, 255, 0.35), 0 0 36px rgba(0, 122, 255, 0.40)",
  accentSoft:
    "0 0 0 1px rgba(68, 207, 108, 0.22), 0 0 24px rgba(68, 207, 108, 0.20)",
  highlightSoft:
    "0 0 0 1px rgba(255, 59, 48, 0.22), 0 0 26px rgba(255, 59, 48, 0.22)",
  surfaceLift:
    "0 10px 30px rgba(0, 0, 0, 0.40), 0 0 0 1px rgba(51, 65, 102, 0.85)",
} as const;
