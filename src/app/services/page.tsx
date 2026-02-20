import { Metadata } from "next";
import { services } from "@/data/services";
import { InteractiveGallery } from "@/components/ui/InteractiveGallery";

export const metadata: Metadata = {
  title: "Services | HoskBrew",
  description:
    "End-to-end cartridge manufacturing, packaging, quality assurance, and fulfillment for homebrew game developers.",
};

const crystalMinesImages = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/assets/images/offerings/crystal-mines/${num}.webp`,
    alt: `Crystal Mines product image ${num}`,
  };
});

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#11192C] pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4 block">
              What We Offer
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-tight mb-6">
              Services
            </h1>
            <p className="text-lg leading-8 text-white/60">
              End-to-end manufacturing, packaging, quality assurance, and fulfillment. Everything you need to ship your retro game on real cartridges.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#0A0F1A] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {services.map((service, idx) => {
                const isLast = idx === services.length - 1;
                const isOdd = services.length % 2 !== 0;

                return (
                  <article
                    key={service.slug}
                    className={`flex flex-col gap-6 rounded-2xl bg-[#11192C] p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 shadow-xl ${isLast && isOdd ? " lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-3xl" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-2">
                          {String(idx + 1).padStart(2, "0")} / {service.tagline}
                        </span>
                        <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                          {service.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base leading-7 text-white/60 flex-auto">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-6 border-t border-white/5">
                      <p className="text-sm font-medium leading-6 text-brand-primary/80">
                        {service.features}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Crystal Mines gallery */}
      <section className="bg-[#11192C] py-24 sm:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none mb-16 text-center lg:text-left lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl mb-4">
                 Crystal Mines
              </h2>
              <p className="text-lg leading-8 text-white/60">
                A showcase of our manufacturing, packaging, and fulfillment
                capabilities from PCB to retail-ready product.
              </p>
            </div>
          </div>

          <InteractiveGallery images={crystalMinesImages} />
        </div>
      </section>
    </>
  );
}
