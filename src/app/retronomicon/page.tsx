"use client";

import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AssetRegistry } from "@/lib/assets";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";
import { BookOpen, Download, Mail, Sparkles } from "lucide-react";

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

export default function RetroNomiconPage() {
  return (
    <>
      <PageHeader
        title="RetroNomicon"
        subtitle="The indie developer's quarterly guide to retro game development with tutorials, hardware deep dives, and community spotlights."
        label="Publication"
      />

      <Section spacing="loose">
        <div className="relative">
          <div
            className="relative bg-brand-surface border-4 border-brand-border p-8 md:p-12"
            style={{ boxShadow: "0 0 60px rgba(0, 212, 255, 0.1)" }}
          >
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-brand-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-brand-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-brand-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-brand-primary" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border/50">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-brand-accent" />
                </motion.div>
                <span className="text-pixel text-lg text-brand-primary uppercase tracking-widest">
                  Magazine Kiosk
                </span>
              </div>
              <div className="flex items-center gap-2 text-pixel text-xs text-brand-text-dim">
                <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                NOW AVAILABLE
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <AnimateOnScroll effect="fadeLeft">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden border-4 border-brand-border bg-brand-bg-elevated group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-brand-bg-elevated to-brand-bg">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Image
                        src={AssetRegistry.mascot.wb}
                        alt="RetroNomicon cover mascot"
                        width={200}
                        height={200}
                        className="opacity-30 drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                      />
                    </motion.div>
                    <span className="font-pixel uppercase tracking-widest text-5xl text-brand-text/30">
                      #{CURRENT_ISSUE.number}
                    </span>
                  </div>

                  <div className="absolute inset-0 crt-scanlines opacity-10 pointer-events-none" />

                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-brand-primary to-brand-primary-dark p-6"
                    style={{ boxShadow: "0 -10px 40px rgba(0, 212, 255, 0.3)" }}
                  >
                    <h2 className="font-pixel uppercase tracking-wide text-2xl md:text-3xl text-brand-bg leading-tight">
                      {CURRENT_ISSUE.title}
                    </h2>
                    <p className="font-pixel text-sm text-brand-bg/70 mt-1">
                      {CURRENT_ISSUE.date}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnScroll>

              <AnimateOnScroll effect="fadeRight" delay={0.1}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="accent" className="font-pixel text-xs">
                      Latest Issue
                    </Badge>
                    <Badge variant="default" className="font-pixel text-xs">
                      #{CURRENT_ISSUE.number}
                    </Badge>
                  </div>

                  <h2 className="text-heading text-brand-text retro-glow-blue">
                    Inside This Issue
                  </h2>

                  <ol className="flex flex-col gap-3">
                    {CURRENT_ISSUE.articles.map((article, i) => (
                      <motion.li
                        key={article}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 border-b border-brand-border/30 pb-3 last:border-0 group"
                      >
                        <span className="text-label text-brand-accent font-pixel">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-brand-text group-hover:text-brand-primary transition-colors">
                          {article}
                        </span>
                      </motion.li>
                    ))}
                  </ol>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button
                      variant="arcade"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Subscribe
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Preview
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-pixel text-xs text-brand-text-dim">
                Published quarterly • Free for subscribers
              </p>
              <div className="flex items-center gap-4 text-pixel text-xs text-brand-text-dim">
                <span>PREVIOUS: #3</span>
                <span className="w-px h-4 bg-brand-border" />
                <span>NEXT: #5</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
