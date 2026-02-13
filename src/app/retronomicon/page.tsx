import Image from "next/image";
import { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AssetRegistry } from "@/lib/assets";
import { AnimateOnScroll, StaggerGroup } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "RetroNomicon | HoskBrew",
  description:
    "RetroNomicon Quarterly — the indie developer's guide to retro game development, hardware deep dives, and community spotlights.",
};

const CURRENT_ISSUE = {
  number: 4,
  title: "The Mapper Issue",
  date: "Q1 2026",
  articles: [
    "MMC5 Mapper: The Impossible Chip",
    "Interview: The Micro Mages Team",
    "Homebrew PCB Layout Guide",
    "Sound Design for Game Boy",
    "Community Showcase: Best of 2025",
  ],
};

const PAST_ISSUES = [
  {
    number: 3,
    title: "Sound Chips",
    date: "Q4 2025",
    topics: ["PSG synthesis", "VRC6 deep dive", "Audio tool roundup"],
  },
  {
    number: 2,
    title: "Sprite Limits",
    date: "Q3 2025",
    topics: [
      "Flicker techniques",
      "Metasprites",
      "Hardware sprites vs software",
    ],
  },
  {
    number: 1,
    title: "Getting Started",
    date: "Q2 2025",
    topics: ["Dev environment setup", "First homebrew", "Toolchain guide"],
  },
];

export default function RetroNomiconPage() {
  return (
    <>
      <PageHeader
        title="RetroNomicon"
        subtitle="The indie developer's quarterly guide to retro game development — tutorials, hardware deep dives, and community spotlights."
        label="Publication"
      />

      <Section spacing="loose">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimateOnScroll effect="fadeLeft">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-brand-border bg-brand-bg-elevated retro-border-glow">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                <Image
                  src={AssetRegistry.mascot.wb}
                  alt="RetroNomicon cover mascot"
                  width={180}
                  height={180}
                  className="opacity-20"
                />
                <span className="font-black uppercase tracking-tight text-4xl text-brand-text/20">
                  Issue #{CURRENT_ISSUE.number}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-brand-primary p-5">
                <h2 className="font-black uppercase tracking-tight text-2xl text-brand-bg leading-[0.95]">
                  {CURRENT_ISSUE.title}
                </h2>
                <p className="text-sm text-brand-bg/70">{CURRENT_ISSUE.date}</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll effect="fadeRight" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Badge variant="accent">Latest Issue</Badge>
                <Badge variant="default">#{CURRENT_ISSUE.number}</Badge>
              </div>

              <h2 className="text-heading text-brand-text retro-glow-blue">
                Inside This Issue
              </h2>

              <ol className="flex flex-col gap-3">
                {CURRENT_ISSUE.articles.map((article, i) => (
                  <li
                    key={article}
                    className="flex items-start gap-3 border-b border-brand-border/30 pb-3 last:border-0"
                  >
                    <span className="text-label text-brand-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-brand-text">{article}</span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="accent" size="lg">
                  Subscribe — $12/yr
                </Button>
                <Button variant="ghost" size="lg">
                  Preview PDF
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      <Section background="elevated" spacing="normal">
        <SectionHeader
          label="Archive"
          title="Past Issues"
          description="Catch up on previous quarters of RetroNomicon."
        />

        <StaggerGroup
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {PAST_ISSUES.map((issue, i) => (
            <AnimateOnScroll key={issue.number} delay={i * 0.1}>
              <div className="relative overflow-hidden group flex flex-col justify-between rounded-lg p-6 transition-all retro-border-glow bg-brand-bg scanline-sweep">
                <div>
                  <div className="mb-4 flex items-center justify-between text-xs text-brand-text-dim">
                    <span>Issue #{issue.number}</span>
                    <span>{issue.date}</span>
                  </div>
                  <h3 className="mb-3 font-black uppercase tracking-tight text-lg text-brand-text group-hover:text-brand-primary transition-colors leading-[0.95] glitch-hover">
                    {issue.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {issue.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2 text-sm text-brand-text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-text-dim" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="ghost" size="sm" className="mt-4 self-start">
                  Read Issue →
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </StaggerGroup>
      </Section>
    </>
  );
}
