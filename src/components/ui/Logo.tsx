import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  getLogoForContext,
  type LogoColor,
  type LogoVariant,
} from "@/lib/assets";

export type LogoProps = {
  /** Logo layout variant (full/horizontal/stacked/etc). */
  variant: LogoVariant;
  /** Color mode to request; falls back if unsupported for a variant. */
  colorMode: LogoColor;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * Brand logo renderer backed by the typed AssetRegistry.
 */
export function Logo({
  variant,
  colorMode,
  className,
  width = 240,
  height = 80,
}: LogoProps) {
  const src = getLogoForContext({ variant, colorMode });

  return (
    <Image
      src={src}
      alt="HoskBrew"
      width={width}
      height={height}
      className={cn("h-auto w-auto", className)}
    />
  );
}
