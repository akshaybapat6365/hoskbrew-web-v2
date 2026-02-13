"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { AssetRegistry } from "@/lib/assets";
import { PixelParticles } from "@/components/ui/PixelParticles";
import {
  fadeInLeft,
  fadeInRight,
  glowPulse,
  floatAnimation,
  staggerContainer,
  staggerItem,
  typewriter,
  typewriterChar,
} from "@/lib/motion";

export default function Hero() {
  const tagline =
    "HoskBrew manufactures premium cartridges, packaging, and manuals for indie developers shipping physical games on NES, SNES, Game Boy, GBA, and Genesis.";

  return (
    <section className="pixel-grid-bg relative flex min-h-[92vh] items-center overflow-hidden bg-brand-bg pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 72% 38%, rgba(0,122,255,0.14), transparent 60%), radial-gradient(ellipse 60% 42% at 18% 82%, rgba(68,207,108,0.10), transparent 55%)",
        }}
      />

      <PixelParticles className="opacity-70" />

      <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.22]" />

      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={staggerItem}
              className="text-label text-brand-accent w-fit"
            >
              Retro Gaming Hardware & Homebrew
            </motion.span>

            <motion.h1
              variants={fadeInLeft}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-brand-text leading-[0.86]"
            >
              Your Game.{" "}
              <span className="text-brand-primary retro-glow-blue">
                Real Cartridges.
              </span>
            </motion.h1>

            <motion.p
              variants={typewriter}
              initial="hidden"
              animate="show"
              className="text-subhead max-w-lg whitespace-pre-wrap"
            >
              {Array.from(tagline).map((ch, i) => (
                <motion.span key={`${ch}-${i}`} variants={typewriterChar}>
                  {ch}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button href="/products" size="lg" variant="primary">
                Browse Products
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Get a Quote
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-6 pt-4 text-sm text-brand-text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-accent" />
                Accepting orders
              </span>
              <span>NES · SNES · GB · GBA · Genesis</span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-center"
          >
            <motion.div
              variants={glowPulse}
              initial="hidden"
              animate="show"
              className="absolute h-[480px] w-[480px] rounded-full bg-brand-primary/10 blur-[100px]"
            />

            <div className="absolute h-[400px] w-[400px] sm:h-[440px] sm:w-[440px] rounded-3xl border border-brand-border/70 bg-brand-surface/20 shadow-[inset_0_0_0_1px_rgba(0,122,255,0.10)]" />
            <div className="pixel-grid-bg absolute h-[400px] w-[400px] sm:h-[440px] sm:w-[440px] rounded-3xl opacity-60" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] sm:h-[440px] sm:w-[440px] rounded-3xl crt-scanlines opacity-[0.14]" />

            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="float"
              className="relative h-[440px] w-[440px] sm:h-[520px] sm:w-[520px]"
            >
              <Image
                src={AssetRegistry.mascot.color}
                alt="HoskBrew octopus mascot"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(0,122,255,0.3)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.75)_100%)]" />
    </section>
  );
}
