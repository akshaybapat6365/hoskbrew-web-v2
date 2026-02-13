"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlitchText } from "@/components/ui/Effects";

export default function RetroNomiconPage() {
  const issues = [
    {
      id: 4,
      title: "THE MAPPER ISSUE",
      date: "Q1 2026",
      color: "border-brand-highlight",
    },
    {
      id: 3,
      title: "SOUND CHIPS",
      date: "Q4 2025",
      color: "border-brand-primary",
    },
    {
      id: 2,
      title: "SPRITE LIMITS",
      date: "Q3 2025",
      color: "border-brand-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-16 border-b-4 border-brand-text pb-8">
          <div className="flex justify-between items-end">
            <h1 className="text-6xl md:text-9xl font-retro text-brand-text leading-[0.8] tracking-tighter">
              RETRO
              <br />
              <span className="text-brand-highlight">NOMICON</span>
            </h1>
            <div className="hidden md:block text-right font-mono text-brand-text/60">
              <p>VOL. 02</p>
              <p>QUARTERLY</p>
              <p>ISSN 8008-135</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ rotate: -5, scale: 0.9 }}
            whileHover={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative aspect-[3/4] bg-brand-bg-elevated border-4 border-brand-text shadow-[20px_20px_0px_0px_#2d2d2d]"
          >
            <div className="absolute inset-4 border border-brand-text/20 flex items-center justify-center bg-brand-surface/50">
              <span className="font-retro text-brand-text/20 text-4xl -rotate-45">
                COVER ART_MISSING
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-brand-highlight p-4">
              <h2 className="font-retro text-brand-bg-elevated text-3xl">
                ISSUE #04
              </h2>
            </div>
          </motion.div>

          <div className="space-y-8 flex flex-col justify-center">
            <h2 className="text-4xl font-retro text-brand-text">
              <GlitchText text="INSIDE THIS ISSUE" />
            </h2>
            <ul className="space-y-6 font-mono text-lg text-brand-text/80">
              <li className="flex gap-4 border-b border-brand-text/10 pb-4">
                <span className="text-brand-highlight">01.</span>
                <span>MMC5 Mapper: The Impossible Chip</span>
              </li>
              <li className="flex gap-4 border-b border-brand-text/10 pb-4">
                <span className="text-brand-highlight">02.</span>
                <span>Interview: The Micro Mages Team</span>
              </li>
              <li className="flex gap-4 border-b border-brand-text/10 pb-4">
                <span className="text-brand-highlight">03.</span>
                <span>Homebrew PCB Layout Guide</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button size="lg" variant="cyber">
                SUBSCRIBE $12/YR
              </Button>
              <Button size="lg" variant="ghost">
                PREVIEW PDF
              </Button>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-retro text-brand-text mb-8 border-b border-brand-text/20 pb-2 inline-block">
          ARCHIVE_ACCESS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.slice(1).map((issue) => (
            <motion.div
              key={issue.id}
              whileHover={{ y: -10 }}
              className={`bg-brand-surface border-2 ${issue.color} p-6 h-64 flex flex-col justify-between group`}
            >
              <div className="flex justify-between font-mono text-xs text-brand-text/50">
                <span>VOL. 0{Math.floor(issue.id / 4) + 1}</span>
                <span>{issue.date}</span>
              </div>
              <h4 className="font-retro text-3xl text-brand-text group-hover:text-brand-highlight transition-colors">
                {issue.title}
              </h4>
              <Button size="sm" variant="ghost" className="self-start pl-0">
                READ_LOGS {">"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
