"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "GAMES" },
  { href: "/services", label: "SERVICES" },
  { href: "/retronomicon", label: "NEWS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-brand-primary/30">
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

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-pixel text-xs uppercase tracking-wider transition-all duration-200",
                pathname === link.href
                  ? "text-brand-accent bg-brand-primary/20 border border-brand-primary/50"
                  : "text-brand-text-muted hover:text-brand-text hover:bg-brand-surface/50 border border-transparent hover:border-brand-border",
              )}
            >
              <span className="relative z-10">{link.label}</span>
              {pathname === link.href && (
                <>
                  <span className="absolute top-0 left-0 w-1 h-1 bg-brand-accent" />
                  <span className="absolute top-0 right-0 w-1 h-1 bg-brand-accent" />
                  <span className="absolute bottom-0 left-0 w-1 h-1 bg-brand-accent" />
                  <span className="absolute bottom-0 right-0 w-1 h-1 bg-brand-accent" />
                </>
              )}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button size="sm" variant="primary" className="text-pixel text-xs">
              INSERT COIN
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
            className="md:hidden bg-black border-b-2 border-brand-primary/30 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-pixel text-sm py-3 px-4 border transition-all",
                      pathname === link.href
                        ? "text-brand-accent bg-brand-primary/20 border-brand-primary"
                        : "text-brand-text border-brand-border/30 hover:border-brand-primary/50",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-brand-primary mr-2">▶</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full text-pixel" variant="primary">
                    INSERT COIN
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
