import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Cpu, Package, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | HoskBrew",
  description:
    "End-to-end cartridge manufacturing, packaging, QA testing, and fulfillment for homebrew game developers.",
};

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  "shield-check": ShieldCheck,
  truck: Truck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="End-to-end manufacturing, packaging, quality assurance, and fulfillment — everything you need to ship your retro game on real cartridges."
        label="What We Do"
      />

      <Section spacing="loose">
        <div className="flex flex-col gap-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Cpu;
            const isReversed = i % 2 === 1;

            return (
              <div
                key={service.slug}
                className={`grid grid-cols-1 items-start gap-10 lg:grid-cols-5 ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                <div className="flex flex-col gap-5 lg:col-span-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-primary/10">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h2 className="text-heading text-brand-text">
                    {service.name}
                  </h2>
                  <p className="text-subhead">{service.tagline}</p>
                  <p className="text-body max-w-2xl">{service.description}</p>

                  <ul className="mt-2 flex flex-col gap-2">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-brand-text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Button href="/contact" variant="primary">
                      Get a Quote
                    </Button>
                    {service.leadTime && (
                      <span className="text-sm text-brand-text-dim">
                        Lead time: {service.leadTime}
                      </span>
                    )}
                    {service.priceRange && (
                      <span className="text-sm font-medium text-brand-accent">
                        {service.priceRange}
                      </span>
                    )}
                  </div>
                </div>

                <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-center">
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-brand-border bg-brand-bg-elevated">
                    <Icon className="h-20 w-20 text-brand-border-hover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="elevated" spacing="normal">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-heading text-brand-text">
            Not sure what you need?
          </h2>
          <p className="text-subhead max-w-lg">
            Reach out and we&apos;ll help you figure out the right manufacturing
            path for your project — no commitment required.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Talk to Us
          </Button>
        </div>
      </Section>
    </>
  );
}
