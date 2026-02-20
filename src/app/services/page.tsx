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
      <section className="relative border-b border-white/10 bg-[#11192C] pt-28 pb-10 sm:pt-32 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              What We Offer
            </span>
            <h1 className="mb-4 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
              Services
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              End-to-end manufacturing, packaging, quality assurance, and
              fulfillment. Everything you need to ship your retro game on real
              cartridges.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-b border-white/10 bg-[#11192C] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service, idx) => {
              const isLast = idx === services.length - 1;
              const isOdd = services.length % 2 !== 0;

              return (
                <article
                  key={service.slug}
                  className={`flex flex-col gap-3 rounded-xl border border-white/10 bg-[#0B1120] p-5 transition-all duration-300 hover:border-white/20 sm:p-6${isLast && isOdd ? " md:col-span-2 md:mx-auto md:w-full md:max-w-3xl" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                        {service.name}
                      </h2>
                      <p className="text-sm text-white/50 font-medium">
                        {service.tagline}
                      </p>
                    </div>
                    <span className="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/5 px-2 text-[11px] font-semibold tracking-wider text-white/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-white/40">
                    {service.description}
                  </p>

                  <div className="mt-auto border-t border-white/[0.08] pt-3">
                    <p className="text-xs font-medium leading-relaxed text-brand-primary/80">
                      {service.features}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crystal Mines gallery */}
      <section className="bg-[#11192C] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-4xl sm:mb-8">
            <h2 className="mb-3 text-2xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-3xl">
              Crystal Mines
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-white/50 md:text-base">
              A showcase of our manufacturing, packaging, and fulfillment
              capabilities from PCB to retail-ready product.
            </p>
          </div>

          <InteractiveGallery images={crystalMinesImages} />
        </div>
      </section>
    </>
  );
}
