import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AssetRegistry } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" aria-label="HoskBrew home">
              <Image
                src={AssetRegistry.logos.stacked.white}
                alt="HoskBrew"
                width={200}
                height={96}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-6 text-white/50 max-w-xs">
              End-to-end cartridge manufacturing, packaging, quality assurance, and fulfillment for homebrew game developers.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
             <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Ready to build?</h3>
                  <div className="mt-6 flex flex-col items-start gap-4">
                     <p className="text-sm leading-6 text-white/60">
                        Not sure what you need? Reach out and we'll help you figure out the right manufacturing path for your project. No commitment required.
                     </p>
                     <Button href="/contact" variant="primary">
                       Talk to Us
                     </Button>
                  </div>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="/services" className="text-sm leading-6 text-white/60 hover:text-white transition-colors">
                        Circuit Boards
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm leading-6 text-white/60 hover:text-white transition-colors">
                        Cartridge Manufacturing
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm leading-6 text-white/60 hover:text-white transition-colors">
                        Packaging Design
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="text-sm leading-6 text-white/60 hover:text-white transition-colors">
                        Fulfillment & Distribution
                      </a>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-white/40">
            &copy; {new Date().getFullYear()} HoskBrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
