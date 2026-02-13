"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "plastic" | "cyber" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "plastic", size = "md", children, ...props },
    ref,
  ) => {
    const variants = {
      plastic:
        "bg-brand-surface-hover text-brand-text border-b-4 border-r-4 border-brand-bg-elevated shadow-lg active:border-b-0 active:border-r-0 active:translate-y-1 active:translate-x-1 transition-all",
      cyber:
        "bg-transparent text-brand-highlight border border-brand-highlight shadow-[0_0_10px_rgba(255,0,85,0.5)] hover:bg-brand-highlight hover:text-brand-bg-elevated hover:shadow-[0_0_20px_rgba(255,0,85,0.8)] transition-all uppercase tracking-widest",
      ghost: "bg-transparent text-brand-text hover:bg-brand-text/10",
    };

    const sizes = {
      sm: "px-3 py-1 text-xs",
      md: "px-6 py-2 text-sm",
      lg: "px-8 py-4 text-base font-bold",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-retro focus:outline-none focus:ring-2 focus:ring-brand-highlight focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button };
