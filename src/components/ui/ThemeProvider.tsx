"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "arcade" | "console" | "handheld";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "arcade";
  try {
    const saved = localStorage.getItem("hoskbrew-theme") as Theme;
    if (saved && ["arcade", "console", "handheld"].includes(saved)) {
      return saved;
    }
  } catch {
    // localStorage not available
  }
  return "arcade";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("arcade");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(getInitialTheme());
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("hoskbrew-theme", newTheme);
    } catch {
      // localStorage not available
    }
    if (typeof document !== "undefined") {
      document.body.className =
        document.body.className.replace(/theme-\w+/g, "").trim() +
        ` theme-${newTheme}`;
    }
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
