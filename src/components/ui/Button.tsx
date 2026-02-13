"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & { href?: never };
type ButtonAsLink = ButtonBaseProps & {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-brand-bg font-semibold hover:bg-brand-primary-light shadow-[0_0_0_1px_rgba(0,122,255,0.32),0_1px_3px_rgba(0,0,0,0.45)] hover:shadow-[0_0_18px_rgba(0,122,255,0.40),0_0_42px_rgba(0,122,255,0.18)]",
  secondary:
    "bg-brand-surface text-brand-text border border-brand-border hover:border-brand-border-hover hover:bg-brand-surface-hover hover:shadow-[0_0_22px_rgba(0,122,255,0.08)]",
  accent:
    "bg-brand-accent text-brand-bg font-semibold hover:bg-brand-accent-light shadow-[0_0_0_1px_rgba(68,207,108,0.26),0_1px_3px_rgba(0,0,0,0.45)] hover:shadow-[0_0_18px_rgba(68,207,108,0.38),0_0_42px_rgba(68,207,108,0.16)]",
  ghost:
    "bg-transparent text-brand-text-muted hover:text-brand-text hover:bg-brand-surface/50",
  outline:
    "bg-transparent text-brand-primary border border-brand-primary/40 hover:bg-brand-primary/10 hover:border-brand-primary hover:shadow-[0_0_18px_rgba(0,122,255,0.25)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3.5 text-base gap-2.5",
};

/**
 * Brand button supporting both `<button>` and Next.js `<Link>` via `href` prop.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      children,
      ...rest
    } = props;

    const classes = cn(
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-md font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className,
    );

    if ("href" in props && props.href) {
      return (
        <Link href={props.href} className={classes}>
          {children as React.ReactNode}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...(rest as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  },
);
