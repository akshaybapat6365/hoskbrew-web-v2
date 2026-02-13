import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-bg relative">
      <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_004.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-retro text-brand-text text-shadow-crt">
              START YOUR <span className="text-brand-highlight">QUEST</span>
            </h1>
            <p className="text-xl font-sans text-brand-text/80 leading-relaxed max-w-lg">
              Whether you need 500 custom cartridges, a new PCB design, or just
              want to chat about 8-bit mappers — we're ready.
            </p>

            <div className="bg-brand-surface/20 p-8 border-l-4 border-brand-primary space-y-4">
              <h3 className="font-retro text-2xl text-brand-text">
                HQ LOCATION
              </h3>
              <p className="font-sans text-brand-text/70">
                Hoskbrew Industries
                <br />
                123 Pixel Avenue, Sector 7G
                <br />
                Retro City, CA 90210
              </p>
              <p className="font-mono text-brand-primary pt-2">
                SIGNAL: hello@hoskbrew.com
              </p>
            </div>

            <div className="relative h-64 w-full rounded-lg overflow-hidden border-2 border-brand-surface/50">
              <div className="absolute inset-0 bg-brand-surface/40 flex items-center justify-center">
                <p className="font-retro text-brand-text/50 animate-pulse">
                  MAP MODULE LOADING...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-bg-elevated/80 backdrop-blur-md p-8 border border-brand-text/10 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
