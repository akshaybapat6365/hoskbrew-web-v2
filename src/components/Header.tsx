"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { cn } from "@/lib/utils";

/** @description Main navigation links */
const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/retronomicon", label: "RetroNomicon" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** @description Site-wide header with responsive navigation */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg-elevated/90 backdrop-blur-md border-b border-brand-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" aria-label="HoskBrew home">
          <Logo
            variant="horizontal"
            colorMode="white"
            width={140}
            height={42}
            className="max-h-[42px]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide transition-colors relative",
                pathname === link.href
                  ? "text-brand-primary"
                  : "text-brand-text-muted hover:text-brand-text",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
              )}
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" variant="primary">
              Get a Quote
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden text-brand-text hover:text-brand-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-bg-elevated border-b border-brand-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-3 border-b border-brand-border/20 last:border-0 transition-colors",
                    pathname === link.href
                      ? "text-brand-primary"
                      : "text-brand-text hover:text-brand-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full" variant="primary">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
