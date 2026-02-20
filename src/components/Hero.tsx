"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="inline-flex space-x-6">
              <span className="rounded-full bg-[#11192C]/10 px-3 py-1 text-sm font-semibold leading-6 text-[#11192C] ring-1 ring-inset ring-[#11192C]/20 uppercase tracking-wide">
                Premium Retail Service
              </span>
            </span>
          </div>
          <h1 className="mt-10 text-4xl font-black uppercase tracking-tight text-[#11192C] sm:text-6xl leading-[0.9]">
            <span className="block mb-2">Your Game.</span>
            <span className="block text-brand-primary">Real Hardware.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#11192C]/70">
            We manufacture, package, and ship your retro game on real
            cartridges. From ROM to retail.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <a href="/services" className="text-sm font-semibold leading-6 text-[#11192C] hover:text-brand-primary transition-colors uppercase tracking-widest">
              View Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src={AssetRegistry.logos.full.color}
                alt="HoskBrew Logo"
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
