"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";

/**
 * Hero section — clean white background with full-color logo.
 * Copy: PREMIUM RETAIL SERVICE / YOUR GAME. REAL HARDWARE. / From ROM to Retail
 * CTA: Browse Products button + Contact Us text link
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-sm uppercase tracking-widest text-[#11192C]/60 mb-4 font-medium">
              PREMIUM RETAIL SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#11192C] leading-[0.95] mb-6">
              <span className="block">YOUR GAME.</span>
              <span className="block">REAL HARDWARE.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#11192C]/70 mb-8 max-w-lg font-sans">
              From ROM to Retail — we manufacture, package, and ship your retro
              game on real cartridges.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              <Image
                src={AssetRegistry.logos.full.color}
                alt="HoskBrew"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
