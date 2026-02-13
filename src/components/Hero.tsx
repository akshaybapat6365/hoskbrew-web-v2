"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";
import { GlitchText, Scanline } from "./ui/Effects";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-retro-void">
      <Scanline />

      <div className="absolute inset-0 perspective-[1000px] pointer-events-none">
        <div className="absolute bottom-[-50%] left-[-50%] w-[200%] h-[100%] bg-grid opacity-20 transform rotate-x-[60deg] animate-[scanline_4s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 bg-retro-gray/50 border border-retro-white/10 rounded-full">
            <span className="text-retro-phosphor font-mono text-xs animate-pulse">
              ● SYSTEM READY
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-retro text-retro-white leading-[0.9]">
            LEVEL <span className="text-retro-accent">UP</span>
            <br />
            YOUR <GlitchText text="RETRO" />
          </h1>

          <p className="text-xl font-sans text-retro-white/60 max-w-lg leading-relaxed">
            Premium cartridges, manuals, and manufacturing for the{" "}
            <span className="text-retro-white font-bold">
              homebrew revolution
            </span>
            .
          </p>

          <div className="flex gap-4 pt-4">
            <Button size="lg" variant="cyber">
              Insert Coin
            </Button>
            <Button size="lg" variant="ghost">
              Read Docs_
            </Button>
          </div>
        </motion.div>

        <motion.div
          style={{ y, rotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[500px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-retro-accent/5 blur-[100px] rounded-full animate-pulse" />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={AssetRegistry.MASCOT_HERO}
              alt="Hoskbrew Mascot"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(255,0,85,0.3)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
    </section>
  );
}
