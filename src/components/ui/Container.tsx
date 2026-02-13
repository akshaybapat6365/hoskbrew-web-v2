import { cn } from "@/lib/utils";

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
};

/**
 * Responsive content container with opinionated max-widths.
 */
export function Container({
  className,
  children,
  size = "default",
}: ContainerProps) {
  const sizes = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1440px]",
  } as const;

  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
