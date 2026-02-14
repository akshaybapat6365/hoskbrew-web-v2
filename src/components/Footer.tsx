"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github, Trophy, Zap } from "lucide-react";
import { AssetRegistry } from "@/lib/assets";
import { Logo } from "@/components/ui/Logo";
import { useKonamiCode, useVisitorCounter } from "@/hooks/useArcadeEffects";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/retronomicon", label: "RetroNomicon" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "mailto:hello@hoskbrew.com", icon: Mail, label: "Email" },
  { href: "#", icon: Github, label: "GitHub" },
];

/**
 * Arcade-style footer with Konami code easter egg and visitor counter
 */
export default function Footer() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const visitorCount = useVisitorCounter();

  useKonamiCode(() => {
    setKonamiActivated(true);
    setTimeout(() => setKonamiActivated(false), 5000);
  });

  return (
    <>
      {/* Konami Code Easter Egg Overlay */}
      <AnimatePresence>
        {konamiActivated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-brand-surface border-4 border-brand-highlight p-8 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Trophy className="w-16 h-16 text-brand-highlight mx-auto mb-4" />
              </motion.div>
              <h2 className="text-heading text-brand-highlight mb-2">
                CHEAT CODE ACTIVATED!
              </h2>
              <p className="text-pixel text-brand-text">30 Lives Awarded</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="relative overflow-hidden border-t-4 border-brand-border bg-brand-bg-elevated">
        {/* Arcade Cabinet Top */}
        <div className="relative bg-brand-surface border-b-4 border-brand-border py-4">
          <div className="flex items-center justify-center gap-4">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-brand-accent rounded-full"
            />
            <span className="text-pixel text-sm text-brand-primary uppercase tracking-[0.3em]">
              HoskBrew Arcade
            </span>
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-3 h-3 bg-brand-accent rounded-full"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <Link href="/" aria-label="HoskBrew home">
                <Logo
                  variant="stacked"
                  colorMode="white"
                  width={120}
                  height={60}
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-brand-text-muted">
                Premium cartridge manufacturing, packaging, and fulfillment for
                indie retro game developers worldwide.
              </p>

              {/* Visitor Counter */}
              <div className="mt-4 p-3 bg-brand-bg border-2 border-brand-border inline-flex items-center gap-3 w-fit">
                <span className="text-pixel text-[10px] text-brand-text-dim uppercase">
                  Visitors
                </span>
                <div className="flex">
                  {visitorCount
                    .toString()
                    .padStart(6, "0")
                    .split("")
                    .map((digit, i) => (
                      <span
                        key={i}
                        className="w-5 h-7 bg-brand-primary text-brand-bg font-pixel text-sm flex items-center justify-center border-r border-brand-primary-dark last:border-r-0"
                      >
                        {digit}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h3 className="text-pixel text-sm text-brand-primary uppercase tracking-wider">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-text-muted transition-colors hover:text-brand-primary hover:translate-x-1 inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-border group-hover:bg-brand-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="text-pixel text-sm text-brand-primary uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center border-2 border-brand-border bg-brand-bg text-brand-text-muted transition-all hover:border-brand-primary hover:text-brand-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-4 p-3 bg-brand-bg border border-brand-border">
                <p className="text-pixel text-[10px] text-brand-text-dim uppercase mb-1">
                  Support
                </p>
                <a
                  href="mailto:hello@hoskbrew.com"
                  className="text-sm text-brand-text hover:text-brand-primary transition-colors"
                >
                  hello@hoskbrew.com
                </a>
              </div>
            </div>

            {/* Achievement / Easter Egg */}
            <div className="flex flex-col gap-3">
              <h3 className="text-pixel text-sm text-brand-primary uppercase tracking-wider">
                Secrets
              </h3>
              <div className="p-4 bg-brand-bg border-2 border-brand-border opacity-70">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-brand-highlight" />
                  <span className="text-pixel text-xs text-brand-highlight">
                    Konami Code?
                  </span>
                </div>
                <p className="text-pixel text-[10px] text-brand-text-dim">
                  Try: ↑↑↓↓←→←→BA
                </p>
              </div>

              {/* Mascot */}
              <div className="mt-2 flex justify-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 opacity-50"
                >
                  <Image
                    src={AssetRegistry.mascot.bw}
                    alt=""
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border bg-brand-bg py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-pixel text-[10px] text-brand-text-dim">
              © {new Date().getFullYear()} HoskBrew. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-pixel text-[10px] text-brand-text-dim">
              <span>PRESS START TO BEGIN</span>
              <span className="animate-pulse">◄ ►</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
