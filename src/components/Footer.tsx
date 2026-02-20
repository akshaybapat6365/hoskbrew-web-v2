import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AssetRegistry } from "@/lib/assets";

/**
 * Footer - CTA left, logo right, black background
 * Logo at half the previous size
 */
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          {/* CTA - left side */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Not sure what you need?
            </h2>
            <p className="text-white/60 max-w-lg text-base leading-relaxed">
              Reach out and we&apos;ll help you figure out the right
              manufacturing path for your project with no commitment required.
            </p>
            <div>
              <Button href="/contact" variant="primary" size="lg">
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Logo - right side at HALF size */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link href="/" aria-label="HoskBrew home">
              <Image
                src={AssetRegistry.logos.full.color}
                alt="HoskBrew"
                width={150}
                height={75}
                className="object-contain"
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
