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

const INCLUDE_ITEMS = [
  { label: "Platform", detail: "NES, SNES, GB, GBA, or Genesis" },
  { label: "Quantity", detail: "Estimated units needed" },
  { label: "ROM specs", detail: "Size and mapper requirements" },
  { label: "Packaging", detail: "Shell, manual, box, labels" },
  { label: "Timeline", detail: "Target delivery date" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#11192C] pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4 block">
              Talk to Us
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg leading-8 text-white/60">
              Whether you need a quote for cartridge manufacturing, have questions about our services, or want to discuss a custom project, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#0A0F1A] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            {/* Left column - Form */}
            <div className="rounded-2xl bg-[#11192C] p-8 sm:p-10 ring-1 ring-white/10 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  Send a Message
                </h2>
                <p className="text-base text-white/60">
                  Tell us about your project and we'll be in touch shortly.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right column - Info */}
            <div className="flex flex-col gap-12">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-6">
                  Contact Information
                </h3>
                <dl className="space-y-6">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">{item.label}</span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10">
                          <item.icon className="h-6 w-6 text-brand-primary" aria-hidden="true" />
                        </div>
                      </dt>
                      <dd className="flex flex-col">
                        <span className="text-sm font-semibold uppercase tracking-wide text-white/40 mb-1">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="text-base font-semibold text-white hover:text-brand-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-base font-semibold text-white">{item.value}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-6">
                  What to Include
                </h3>
                <p className="text-base text-white/60 mb-6">
                  Help us respond faster by including these details in your message:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INCLUDE_ITEMS.map((item) => (
                    <div key={item.label} className="rounded-xl bg-[#11192C] p-5 ring-1 ring-white/5">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-2">{item.label}</h4>
                      <p className="text-sm text-white/50">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
