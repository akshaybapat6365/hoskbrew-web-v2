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
} from "@/lib/motion";

export default function Hero() {
  const tagline =
    "HoskBrew manufactures premium cartridges, packaging, and manuals for indie developers shipping physical games on NES, SNES, Game Boy, GBA, and Genesis.";

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-bg pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 62% at 74% 34%, rgba(68,207,108,0.10), transparent 60%), radial-gradient(ellipse 56% 44% at 18% 84%, rgba(0,122,255,0.06), transparent 62%), radial-gradient(ellipse 65% 50% at 52% 18%, rgba(255,255,255,0.03), transparent 64%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 pixel-grid-bg opacity-[0.45]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.14]" />

      <PixelParticles className="opacity-70" />

      <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.18]" />

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
              Premium Retro Hardware
            </motion.span>

            <motion.h1
              variants={fadeInLeft}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-brand-text leading-[0.86]"
            >
              Your Game.{" "}
              <span className="text-brand-accent retro-glow-green">
                Real Hardware.
              </span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-subhead max-w-xl">
              {tagline}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button href="/products" size="lg" variant="primary">
                Browse Products
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Talk to Us
              </Button>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex items-center gap-6 pt-4 text-sm text-brand-text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-accent" />
                Scheduling builds
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
              className="absolute h-[520px] w-[520px] rounded-full bg-brand-accent/10 blur-[110px]"
            />

            <div className="absolute h-[400px] w-[400px] sm:h-[460px] sm:w-[460px] rounded-3xl border border-brand-border/70 bg-brand-surface/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] sm:h-[460px] sm:w-[460px] rounded-3xl pixel-grid-bg opacity-[0.35]" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] sm:h-[460px] sm:w-[460px] rounded-3xl bg-noise opacity-[0.10]" />
            <div className="pointer-events-none absolute h-[400px] w-[400px] sm:h-[460px] sm:w-[460px] rounded-3xl crt-scanlines opacity-[0.10]" />

            <motion.div
              variants={floatAnimation}
              initial="initial"
              animate="float"
              className="relative h-[430px] w-[430px] sm:h-[520px] sm:w-[520px]"
            >
              <Image
                src={AssetRegistry.mascot.color}
                alt="HoskBrew octopus mascot"
                fill
                className="object-contain drop-shadow-[0_0_44px_rgba(68,207,108,0.18)]"
                priority
              />
              <div className="pointer-events-none absolute -bottom-3 left-8 right-8 h-10 rounded-full bg-black/50 blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.75)_100%)]" />
    </section>
  );
}
