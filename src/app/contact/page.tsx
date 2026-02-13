import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | HoskBrew",
  description:
    "Get a quote for cartridge manufacturing, packaging, or any of our homebrew production services.",
};

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@hoskbrew.com",
    href: "mailto:hello@hoskbrew.com",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1-2 business days",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Whether you need a quote for cartridge manufacturing, have questions about our services, or want to discuss a custom project — we're here to help."
        label="Contact"
      />

      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <AnimateOnScroll
            effect="fadeLeft"
            className="flex flex-col gap-8 lg:col-span-2"
          >
            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  className="relative overflow-hidden flex items-start gap-4 rounded-lg p-4 retro-border-glow bg-brand-bg-elevated scanline-sweep"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-primary/10">
                    <item.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brand-text-dim">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-brand-text">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-lg p-5 retro-border-glow bg-brand-bg-elevated">
              <h3 className="mb-3 font-black uppercase tracking-tight text-lg text-brand-text leading-[0.95] glitch-hover">
                What to Include
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-brand-text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  Target platform(s) — NES, SNES, GB, GBA, Genesis
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  Estimated quantity needed
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  ROM size and mapper requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  Packaging needs (shell, manual, box, labels)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  Target timeline for delivery
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll
            effect="fadeRight"
            delay={0.1}
            className="rounded-lg border border-brand-border bg-brand-bg-elevated p-6 lg:col-span-3 retro-border-glow"
          >
            <h2 className="mb-6 text-heading text-brand-text retro-glow-blue">
              Send us a message
            </h2>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </Section>
    </>
  );
}
