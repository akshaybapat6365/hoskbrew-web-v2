"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";

/**
 * Hero section - clean white background with full-color logo.
 * Copy: PREMIUM RETAIL SERVICE / YOUR GAME. REAL HARDWARE. / From ROM to Retail
 * CTA: Browse Products button + Contact Us text link
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[86svh] items-center justify-center bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <span className="mb-4 text-sm font-medium uppercase tracking-widest text-[#11192C]/60">
              PREMIUM RETAIL SERVICE
            </span>
            <h1 className="mb-5 text-4xl font-black uppercase leading-[0.92] tracking-tight text-[#11192C] md:text-5xl lg:text-6xl">
              <span className="block">YOUR GAME.</span>
              <span className="block">REAL HARDWARE.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-[#11192C]/70 md:text-xl">
              We manufacture, package, and ship your retro game on real
              cartridges. From ROM to retail.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
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
