import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
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
      <section className="relative bg-[#11192C] pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[0.9]">
              Get in Touch
            </h1>
            <p className="text-white/60 max-w-2xl text-base">
              Whether you need a quote for cartridge manufacturing, have questions
              about our services, or want to discuss a custom project — we&apos;re
              here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0f] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <div className="flex flex-col gap-4">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-lg p-4 bg-white/5 border border-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10">
                      <item.icon className="h-5 w-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/40">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg p-5 bg-white/5 border border-white/10">
                <h3 className="mb-4 font-black uppercase tracking-tight text-lg text-white">
                  What to Include
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-white/50">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    Target platform(s) — NES, SNES, GB, GBA, Genesis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    Estimated quantity needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    ROM size and mapper requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    Packaging needs (shell, manual, box, labels)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    Target timeline for delivery
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-6 lg:col-span-3">
              <h2 className="mb-6 text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
