import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/Button";
import {
  Cpu,
  Package,
  Box,
  Truck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  box: Box,
  truck: Truck,
  sparkles: Sparkles,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | HoskBrew Services`,
    description: service.tagline,
  };
}

/**
 * Individual service detail page.
 * Dark background (#11192C) matching the services listing.
 */
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Cpu;

  return (
    <>
      <section className="relative bg-[#11192C] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <Icon className="h-7 w-7 text-white/80" />
              </div>
            </div>

            <h1 className="font-black uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl text-white leading-[0.9]">
              {service.name}
            </h1>
            <p className="text-lg text-white/70">{service.tagline}</p>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed">
              {service.description}
            </p>

            <div className="flex gap-3 pt-2">
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11192C] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-black uppercase tracking-tight text-2xl md:text-3xl text-white leading-[0.92] mb-8">
            What&apos;s Included
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 max-w-3xl">
            <p className="text-lg text-white/70 leading-relaxed font-medium">
              {service.features}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#11192C] py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="font-black uppercase tracking-tight text-2xl md:text-3xl text-white leading-[0.92]">
              Ready to get started?
            </h2>
            <p className="text-white/60 max-w-lg text-base">
              Tell us about your project and we&apos;ll put together a custom
              quote for {service.name.toLowerCase()}.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
