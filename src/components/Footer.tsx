import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AssetRegistry } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-[0.92] mb-3">
                Not sure what you need?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Reach out and we&apos;ll help you figure out the right
                manufacturing path for your project. No commitment required.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg">
              Talk to Us
            </Button>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <Link href="/" aria-label="HoskBrew home">
              <Image
                src={AssetRegistry.logos.stacked.white}
                alt="HoskBrew"
                width={320}
                height={154}
                className="h-auto w-[220px] object-contain sm:w-[280px] md:w-[320px]"
              />
            </Link>
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} HoskBrew. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
