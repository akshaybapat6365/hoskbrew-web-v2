import { cn } from "@/lib/utils";
import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

/**
 * Styled text input with optional label and error state.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, className, id, ...props }, ref) {
    const inputId =
      id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-brand-text"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-md border border-brand-border bg-brand-surface px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-text-dim transition-colors focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary",
            error &&
              "border-brand-error focus:border-brand-error focus:ring-brand-error",
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-brand-error">{error}</p>}
      </div>
    );
  },
);
