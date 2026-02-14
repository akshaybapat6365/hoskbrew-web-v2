"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AssetRegistry } from "@/lib/assets";

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function Preloader({ onComplete, minDuration = 2000 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = minDuration;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [minDuration, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      >
        {/* CRT Overlay Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 crt-scanlines opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        {/* Mascot Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-32 h-32 mb-8"
        >
          <Image
            src={AssetRegistry.mascot.color}
            alt="Loading..."
            fill
            className="object-contain drop-shadow-[0_0_30px_rgba(0,122,255,0.5)]"
            priority
          />

          {/* Glow Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              background: `conic-gradient(from 0deg, transparent, rgba(0,122,255,0.5), transparent)`,
              mask: `radial-gradient(circle, transparent 60%, black 61%)`,
              WebkitMask: `radial-gradient(circle, transparent 60%, black 61%)`,
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-4">
          <div className="font-mono text-sm uppercase tracking-widest text-brand-accent">
            <span className="blink-cursor">Loading</span>
            <span className="loading-dots inline-flex ml-2">
              <span className="inline-block w-1 h-1 bg-brand-accent rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-brand-accent rounded-full mx-0.5" />
              <span className="inline-block w-1 h-1 bg-brand-accent rounded-full mx-0.5" />
            </span>
          </div>

          {/* 8-bit Progress Bar */}
          <div className="w-64 h-3 bg-brand-bg-elevated border border-brand-border relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-primary to-brand-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />

            {/* Pixelated Edges */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/20" />
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="font-mono text-xs text-brand-text-dim">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Power On Effect at End */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white pointer-events-none"
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
