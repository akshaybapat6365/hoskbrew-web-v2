import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Cpu, Package, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  "shield-check": ShieldCheck,
  truck: Truck,
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Cpu;

  return (
    <>
      <section className="relative border-b border-brand-border bg-brand-bg-elevated pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,122,255,0.18), transparent 70%)",
          }}
        />

        <Container>
          <div className="flex flex-col gap-8 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                <Icon className="h-7 w-7 text-brand-primary" />
              </div>
              <div className="flex items-center gap-3">
                {service.leadTime && (
                  <Badge variant="primary">{service.leadTime}</Badge>
                )}
              </div>
            </div>

            <h1 className="font-black uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl text-brand-text leading-[0.9]">
              {service.name}
            </h1>
            <p className="text-subhead">{service.tagline}</p>
            <p className="text-body max-w-2xl">{service.description}</p>

            <div className="flex gap-3 pt-2">
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section spacing="normal">
        <h2 className="font-black uppercase tracking-tight text-2xl md:text-3xl text-brand-text leading-[0.92] mb-8">
          What&apos;s Included
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feat) => (
            <li
              key={feat}
              className="flex items-start gap-3 rounded-lg border border-brand-border bg-brand-bg-elevated p-5 transition-colors hover:border-brand-primary/40"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
              <span className="text-sm text-brand-text-muted">{feat}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="elevated" spacing="normal">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-black uppercase tracking-tight text-2xl md:text-3xl text-brand-text leading-[0.92]">
            Ready to get started?
          </h2>
          <p className="text-subhead max-w-lg">
            Tell us about your project and we&apos;ll put together a custom
            quote for {service.name.toLowerCase()}.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
