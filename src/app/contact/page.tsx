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
      <section className="relative border-b border-white/10 bg-[#11192C] pt-28 pb-10 sm:pt-32 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-white/40 font-medium mb-3 block">
              Talk to Us
            </span>
            <h1 className="mb-4 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              Whether you need a quote for cartridge manufacturing, have
              questions about our services, or want to discuss a custom project,
              we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#11192C] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-5 lg:gap-9">
            {/* Left column - contact info + what to include */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {/* Contact info cards */}
              <div className="grid grid-cols-1 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-[#11192C] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      <item.icon className="h-4 w-4 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/30 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white hover:text-brand-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to include - card grid, no bullets */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#11192C]">
                <div className="border-b border-white/10 px-5 py-3">
                  <h3 className="font-black uppercase tracking-tight text-sm text-white">
                    What to Include
                  </h3>
                  <p className="text-xs text-white/30 mt-0.5">
                    Help us respond faster with these details.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-px bg-white/10">
                  {INCLUDE_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 bg-[#11192C] px-5 py-3"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">
                          {item.label}
                        </span>
                        <span className="text-xs text-white/35 mt-0.5">
                          {item.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - form */}
            <div className="rounded-xl border border-white/10 bg-[#11192C] p-5 sm:p-6 lg:col-span-3">
              <div className="mb-4 sm:mb-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-tight mb-1">
                  Send a Message
                </h2>
                <p className="text-sm text-white/40">
                  Tell us about your project and we&apos;ll be in touch shortly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
