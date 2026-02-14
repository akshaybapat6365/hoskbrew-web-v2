import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "var(--color-brand-bg)",
          "bg-elevated": "var(--color-brand-bg-elevated)",
          surface: "var(--color-brand-surface)",
          "surface-hover": "var(--color-brand-surface-hover)",
          border: "var(--color-brand-border)",
          "border-hover": "var(--color-brand-border-hover)",

          text: "var(--color-brand-text)",
          "text-muted": "var(--color-brand-text-muted)",
          "text-dim": "var(--color-brand-text-dim)",

          primary: "var(--color-brand-primary)",
          "primary-light": "var(--color-brand-primary-light)",
          "primary-dark": "var(--color-brand-primary-dark)",

          accent: "var(--color-brand-accent)",
          "accent-light": "var(--color-brand-accent-light)",
          "accent-dark": "var(--color-brand-accent-dark)",

          highlight: "var(--color-brand-highlight)",
          "highlight-light": "var(--color-brand-highlight-light)",

          success: "var(--color-brand-success)",
          warning: "var(--color-brand-warning)",
          error: "var(--color-brand-error)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        scanlines:
          "linear-gradient(rgba(17, 25, 44, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(0, 122, 255, 0.04), rgba(68, 207, 108, 0.02), rgba(0, 122, 255, 0.04))",
        grid: "linear-gradient(to right, var(--color-brand-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-brand-border) 1px, transparent 1px)",
      },
      animation: {
        glitch: "glitch 1s linear infinite",
        scanline: "scanline 8s linear infinite",
        fadeInUp: "fadeInUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeInDown: "fadeInDown 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        scaleIn: "scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        slideInLeft: "slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        slideInRight: "slideInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        glitch: {
          "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
          "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
          "62%": { transform: "translate(0,0) skew(5deg)" },
        },
        scanline: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-22px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(22px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
