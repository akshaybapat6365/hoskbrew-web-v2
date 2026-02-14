"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelSpriteProps {
  variant?: "mascot" | "coin" | "star" | "heart" | "gem" | "controller";
  size?: number;
  color?: string;
  animate?: boolean;
  className?: string;
}

/**
 * 8-bit pixel sprite component for arcade-style decorations
 */
export function PixelSprite({
  variant = "mascot",
  size = 32,
  color = "#00d4ff",
  animate = true,
  className,
}: PixelSpriteProps) {
  const spritePaths: Record<string, string> = {
    mascot: `M4,0 h24 v4 h4 v4 h4 v16 h-4 v4 h-4 v4 h-24 v-4 h-4 v-4 h-4 v-16 h4 v-4 h4 z`,
    coin: `M8,0 h16 v4 h8 v24 h-8 v4 h-16 v-4 h-8 v-24 h8 z`,
    star: `M16,0 l4,12 h12 l-10,8 l4,12 l-10,-8 l-10,8 l4,-12 l-10,-8 h12 z`,
    heart: `M8,4 q8,-8 16,0 q8,8 0,16 l-16,16 l-16,-16 q-8,-8 0,-16 q8,-8 16,0 z`,
    gem: `M16,0 l16,8 l-8,24 h-16 l-8,-24 z`,
    controller: `M0,8 h8 v-8 h16 v8 h8 v16 h-8 v8 h-16 v-8 h-8 z`,
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn("inline-block", className)}
      animate={
        animate
          ? {
              y: [0, -4, 0],
              rotate: variant === "coin" ? [0, 360] : [0, 0],
            }
          : {}
      }
      transition={{
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotate:
          variant === "coin"
            ? { duration: 3, repeat: Infinity, ease: "linear" }
            : {},
      }}
    >
      <path
        d={spritePaths[variant]}
        fill={color}
        style={{ imageRendering: "pixelated" }}
      />
    </motion.svg>
  );
}

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax layer for scroll-based depth effects
 */
export function ParallaxLayer({
  children,
  speed = 0.5,
  className,
}: ParallaxLayerProps) {
  return (
    <div
      className={cn("will-change-transform", className)}
      style={{
        transform: `translateY(calc(var(--scroll-y, 0px) * ${speed}))`,
      }}
    >
      {children}
    </div>
  );
}

interface ArcadeDecorationsProps {
  variant?: "corner" | "border" | "scanlines" | "grid";
  className?: string;
}

/**
 * Arcade-style decorative elements
 */
export function ArcadeDecorations({
  variant = "corner",
  className,
}: ArcadeDecorationsProps) {
  if (variant === "corner") {
    return (
      <div className={cn("absolute inset-0 pointer-events-none", className)}>
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-primary/50" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-primary/50" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-primary/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-primary/50" />
      </div>
    );
  }

  if (variant === "border") {
    return (
      <div className={cn("absolute inset-0 pointer-events-none", className)}>
        <div className="absolute inset-0 border-2 border-brand-primary/20" />
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-primary" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-primary" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-primary" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-primary" />
      </div>
    );
  }

  if (variant === "scanlines") {
    return (
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-50 opacity-[0.03]",
          className,
        )}
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          )`,
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 opacity-[0.02]",
        className,
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    />
  );
}

interface FloatingIconProps {
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Floating icon with arcade-style bobbing animation
 */
export function FloatingIcon({
  icon,
  delay = 0,
  className,
}: FloatingIconProps) {
  return (
    <motion.div
      className={cn("inline-flex", className)}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {icon}
    </motion.div>
  );
}

interface ScreenShakeWrapperProps {
  children: React.ReactNode;
  shake?: boolean;
  intensity?: number;
  className?: string;
}

/**
 * Wrapper that applies screen shake effect when triggered
 */
export function ScreenShakeWrapper({
  children,
  shake = false,
  intensity = 5,
  className,
}: ScreenShakeWrapperProps) {
  return (
    <motion.div
      className={className}
      animate={
        shake
          ? {
              x: [0, -intensity, intensity, -intensity, intensity, 0],
              y: [0, -intensity, intensity, intensity, -intensity, 0],
            }
          : {}
      }
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

/**
 * Text with glitch effect animation
 */
export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-brand-highlight opacity-0 hover:opacity-70"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          transform: "translateX(2px)",
          animation: "glitch-shift 3s infinite",
        }}
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-brand-accent opacity-0 hover:opacity-70"
        style={{
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
          transform: "translateX(-2px)",
          animation: "glitch-shift 3s infinite reverse",
        }}
      >
        {text}
      </span>
    </span>
  );
}
