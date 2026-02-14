import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "accent" | "highlight" | "success";

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-brand-surface text-brand-text-muted border-brand-border",
  primary:
    "bg-brand-primary/15 text-brand-primary-light border-brand-primary/30",
  accent: "bg-brand-accent/15 text-brand-accent-light border-brand-accent/30",
  highlight:
    "bg-brand-highlight/15 text-brand-highlight-light border-brand-highlight/30",
  success: "bg-brand-success/15 text-brand-success border-brand-success/30",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "text-label inline-flex items-center rounded-full border px-2.5 py-0.5",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
