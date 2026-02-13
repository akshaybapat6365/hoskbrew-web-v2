"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { AssetRegistry } from "@/lib/assets";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-bg pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(27,143,126,0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(212,168,67,0.06), transparent 50%)",
        }}
      />

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
              className="text-display text-brand-text"
            >
              Your Game.{" "}
              <span className="text-brand-primary">Real Cartridges.</span>
            </motion.h1>

            <motion.p variants={staggerItem} className="text-subhead max-w-lg">
              HoskBrew manufactures premium cartridges, packaging, and manuals
              for indie developers shipping physical games on NES, SNES, Game
              Boy, GBA, and Genesis.
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
                <span className="inline-block h-2 w-2 rounded-full bg-brand-success" />
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
            <div className="absolute h-[420px] w-[420px] rounded-full bg-brand-primary/5 blur-[80px]" />
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative h-[380px] w-[380px] sm:h-[440px] sm:w-[440px]"
            >
              <Image
                src={AssetRegistry.mascot.color}
                alt="HoskBrew octopus mascot"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(27,143,126,0.25)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(11,14,17,0.9)_100%)]" />
    </section>
  );
}
