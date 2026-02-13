"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github } from "lucide-react";
import { AssetRegistry } from "@/lib/assets";
import { Logo } from "@/components/ui/Logo";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-border bg-brand-bg-elevated py-12">
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 opacity-[0.03]">
        <Image
          src={AssetRegistry.mascot.bw}
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link href="/" aria-label="HoskBrew home">
            <Logo variant="stacked" colorMode="white" width={160} height={80} />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-brand-text-muted">
            Premium cartridge manufacturing, packaging, and fulfillment for
            indie retro game developers worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-text">
            Navigate
          </h3>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-text-muted transition-colors hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-text">
            Connect
          </h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-brand-border bg-brand-surface text-brand-text-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-auto text-xs text-brand-text-dim">
            © {new Date().getFullYear()} HoskBrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
