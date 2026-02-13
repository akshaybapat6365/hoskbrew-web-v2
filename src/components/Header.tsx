"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";
import { GlitchText } from "./ui/Effects";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/retronomicon", label: "RetroNomicon" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-retro-black/80 backdrop-blur-md border-b border-retro-gray/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="relative h-12 w-48 transition-transform hover:scale-105"
        >
          <Image
            src={AssetRegistry.LOGO_MAIN}
            alt="Hoskbrew Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-retro-white hover:text-retro-accent font-retro text-sm uppercase tracking-wider transition-colors relative group"
            >
              <GlitchText text={link.label} />
            </Link>
          ))}
          <Button size="sm" variant="cyber">
            Shop Now
          </Button>
        </nav>

        <button
          className="md:hidden text-retro-white hover:text-retro-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-retro-black border-b border-retro-gray overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-retro-white hover:text-retro-accent font-retro text-lg uppercase py-2 border-b border-retro-gray/20 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4" variant="cyber">
                Shop Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
