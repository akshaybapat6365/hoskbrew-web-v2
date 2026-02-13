"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github } from "lucide-react";
import { AssetRegistry } from "@/lib/assets";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-elevated border-t-4 border-brand-border py-12 relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <Image
          src={AssetRegistry.mascot.bw}
          alt="Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link href="/" className="inline-block" aria-label="HoskBrew home">
            <Logo variant="stacked" colorMode="white" width={192} height={96} />
          </Link>
          <p className="text-brand-text/80 max-w-sm font-sans text-xs">
            SYSTEM_STATUS: ONLINE
            <br />
            VERSION: 2.0.4-BETA
            <br />
            UPTIME: 99.9%
          </p>
        </div>

        <div className="space-y-4">
          <h3
            className="font-retro text-brand-highlight text-lg uppercase glitch"
            data-text="EXPLORE"
          >
            Explore
          </h3>
          <ul className="space-y-2 font-mono text-xs text-brand-text/80">
            <li>
              <Link
                href="/products"
                className="hover:text-brand-primary transition-colors"
              >
                [{">"}] PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-brand-primary transition-colors"
              >
                [{">"}] SERVICES
              </Link>
            </li>
            <li>
              <Link
                href="/retronomicon"
                className="hover:text-brand-primary transition-colors"
              >
                [{">"}] RETRONOMICON
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-brand-primary transition-colors"
              >
                [{">"}] ABOUT_US
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-retro text-brand-highlight text-lg uppercase">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-brand-surface border border-brand-text/20 hover:border-brand-highlight hover:text-brand-highlight transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-brand-surface border border-brand-text/20 hover:border-brand-highlight hover:text-brand-highlight transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-brand-surface border border-brand-text/20 hover:border-brand-highlight hover:text-brand-highlight transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-brand-surface border border-brand-text/20 hover:border-brand-highlight hover:text-brand-highlight transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-brand-text/50 mt-4">
            © {new Date().getFullYear()} Hoskbrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
