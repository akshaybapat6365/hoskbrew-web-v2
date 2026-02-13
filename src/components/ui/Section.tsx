import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  spacing?: "tight" | "normal" | "loose";
  background?: "primary" | "elevated" | "accent" | "transparent";
};

/**
 * Page section wrapper that standardizes spacing and background treatment.
 */
export function Section({
  id,
  className,
  children,
  spacing = "normal",
  background = "transparent",
}: SectionProps) {
  const spacingClasses = {
    tight: "py-10 sm:py-12",
    normal: "py-16 sm:py-20",
    loose: "py-24 sm:py-28",
  } as const;

  const backgroundClasses = {
    transparent: "bg-transparent",
    primary: "bg-brand-bg",
    elevated: "bg-brand-bg-elevated",
    accent:
      "bg-brand-accent/10 border-y border-brand-accent/25 shadow-[inset_0_1px_0_rgba(68,207,108,0.16)]",
  } as const;

  return (
    <section
      id={id}
      className={cn(
        "relative",
        backgroundClasses[background],
        spacingClasses[spacing],
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
