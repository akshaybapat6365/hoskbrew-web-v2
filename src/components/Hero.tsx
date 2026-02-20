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
    <section className="relative bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center md:mx-0 md:items-start md:text-left">
            <span className="text-sm font-medium uppercase tracking-widest text-[#11192C]/60">
              PREMIUM RETAIL SERVICE
            </span>
            <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight text-[#11192C] md:text-5xl lg:text-6xl">
              <span className="block">YOUR GAME.</span>
              <span className="block">REAL HARDWARE.</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[#11192C]/70 md:text-xl">
              We manufacture, package, and ship your retro game on real
              cartridges. From ROM to retail.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative h-[210px] w-[210px] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]">
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
