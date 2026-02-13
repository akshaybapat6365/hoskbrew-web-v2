import { cn } from "@/lib/utils";
import React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

/**
 * Styled select dropdown with optional label and error state.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, error, options, placeholder, className, id, ...props },
    ref,
  ) {
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
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "w-full appearance-none rounded-md border border-brand-border bg-brand-surface px-4 py-2.5 text-sm text-brand-text transition-colors focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary",
            error &&
              "border-brand-error focus:border-brand-error focus:ring-brand-error",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-brand-error">{error}</p>}
      </div>
    );
  },
);
