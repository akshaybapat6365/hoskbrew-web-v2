/**
 * Supported logo variants.
 */
export type LogoVariant =
  | "full"
  | "horizontal"
  | "stacked"
  | "stackedStar"
  | "raised"
  | "raisedStar";

/**
 * Supported logo color modes.
 */
export type LogoColor =
  | "color"
  | "black"
  | "white"
  | "oneColor"
  | "oneColorBlack";

/**
 * Typed asset registry for the public `/assets/images` directory.
 */
export const AssetRegistry = {
  logos: {
    full: {
      color: "/assets/images/HoskBrew_Full_Color.svg",
      black: "/assets/images/HoskBrew_Full_Black.svg",
      oneColor: "/assets/images/HoskBrew_Full_OneColor.svg",
      oneColorBlack: "/assets/images/HoskBrew_Full_OneColor_Black.svg",
    },
    horizontal: {
      color: "/assets/images/HoskBrew_Horizontal_Color.svg",
      black: "/assets/images/HoskBrew_Horizontal_Black.svg",
      white: "/assets/images/HoskBrew_Horizontal_White.svg",
    },
    stacked: {
      color: "/assets/images/HoskBrew_Stacked_Color.svg",
      black: "/assets/images/HoskBrew_Stacked_Black.svg",
      white: "/assets/images/HoskBrew_Stacked_White.svg",
    },
    stackedStar: {
      color: "/assets/images/HoskBrew_Stacked_Star_Color.svg",
      black: "/assets/images/HoskBrew_Stacked_Star_Black.svg",
      white: "/assets/images/HoskBrew_Stacked_Star_White.svg",
    },
    raised: {
      color: "/assets/images/HoskBrew_Raised_Color.svg",
      black: "/assets/images/HoskBrew_Raised_Black.svg",
      oneColor: "/assets/images/HoskBrew_Raised_OneColor.svg",
      oneColorBlack: "/assets/images/HoskBrew_Raised_OneColor_Black.svg",
    },
    raisedStar: {
      color: "/assets/images/HoskBrew_Raised_Star_Color.svg",
      black: "/assets/images/HoskBrew_Raised_Star_Black.svg",
      oneColor: "/assets/images/HoskBrew_Raised_Star_OneColor.svg",
      oneColorBlack: "/assets/images/HoskBrew_Raised_Star_OneColor_Black.svg",
    },
  },
  mascot: {
    color: "/assets/images/Color_Octopus_New.png",
    bw: "/assets/images/B_W_Octopus_New.png",
    wb: "/assets/images/W_B_Octopus_New.png",
  },
  ads: {
    crystalMines: "/assets/images/Crystal_Mines_Ad.png",
    hoskbrew: "/assets/images/Hoskbrew%20ad.png",
  },
} as const;

type LogoRegistry = typeof AssetRegistry.logos;

/**
 * Picks the best available logo path for a given runtime context.
 */
export function getLogoForContext(options?: {
  variant?: LogoVariant;
  colorMode?: LogoColor;
  /** Defaults to `dark` (the site background). */
  background?: "dark" | "light";
}): string {
  const variant: LogoVariant = options?.variant ?? "horizontal";
  const background = options?.background ?? "dark";
  const requested = options?.colorMode;

  const variantMap = AssetRegistry.logos[variant] as Record<string, string>;

  if (requested && variantMap[requested]) return variantMap[requested];

  const preferred = background === "dark" ? "white" : "black";
  if (variantMap[preferred]) return variantMap[preferred];
  if (variantMap.color) return variantMap.color;

  const first = Object.values(variantMap)[0];
  return (
    first ??
    (AssetRegistry.logos.full.color satisfies LogoRegistry["full"]["color"])
  );
}
