import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

/**
 * Simplified footer — black background, small logo, CTA section.
 * No nav column, no social icons, no arcade effects.
 */
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
          {/* CTA — left aligned */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Not sure what you need?
            </h2>
            <p className="text-white/60 max-w-lg text-base leading-relaxed">
              Reach out and we&apos;ll help you figure out the right
              manufacturing path for your project — no commitment required.
            </p>
            <div>
              <Button href="/contact" variant="primary" size="lg">
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Logo — right side */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link href="/" aria-label="HoskBrew home">
              <Logo
                variant="stacked"
                colorMode="white"
                width={40}
                height={20}
              />
            </Link>
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} HoskBrew. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
