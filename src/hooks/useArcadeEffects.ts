"use client";

import { useState, useEffect, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useScreenShake(_intensity = 5, duration = 500) {
  const [isShaking, setIsShaking] = useState(false);

  const triggerShake = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, duration);
  }, [duration]);

  return { isShaking, triggerShake };
}

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onSuccess: () => void) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[position]) {
        const newPosition = position + 1;
        if (newPosition === KONAMI_CODE.length) {
          onSuccess();
          setPosition(0);
        } else {
          setPosition(newPosition);
        }
      } else {
        setPosition(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, onSuccess]);

  return { progress: (position / KONAMI_CODE.length) * 100 };
}

export function useParallax(speed = 0.5) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { y };
}

export function useMultiLayerParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    background: { y: scrollY * 0.1 },
    midground: { y: scrollY * 0.3 },
    foreground: { y: scrollY * 0.5 },
    near: { y: scrollY * 0.8 },
  };
}

export function useTypewriter(text: string, speed = 50, trigger = true) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayText("");
      setIsComplete(false);
      return;
    }

    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  return { displayText, isComplete };
}

export function useBlinkingCursor(interval = 530) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((v) => !v);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return visible;
}

function getVisitorCount(): number {
  if (typeof window === "undefined") return 12345;
  try {
    const stored = localStorage.getItem("hb-visitor-count");
    if (stored) {
      let baseCount = parseInt(stored, 10);
      if (Math.random() > 0.7) {
        baseCount += Math.floor(Math.random() * 3) + 1;
        localStorage.setItem("hb-visitor-count", baseCount.toString());
      }
      return baseCount;
    } else {
      const baseCount = Math.floor(Math.random() * 40000) + 10000;
      localStorage.setItem("hb-visitor-count", baseCount.toString());
      return baseCount;
    }
  } catch {
    return 12345;
  }
}

export function useVisitorCounter() {
  const [count] = useState(() => getVisitorCount());
  return count;
}
