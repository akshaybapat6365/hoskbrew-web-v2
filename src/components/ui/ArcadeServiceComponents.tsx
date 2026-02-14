"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, Package, ShieldCheck, Truck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  package: Package,
  "shield-check": ShieldCheck,
  truck: Truck,
};

interface ArcadeServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

/**
 * Arcade machine styled service card with glowing edges
 */
export function ArcadeServiceCard({
  service,
  index,
  className,
}: ArcadeServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Cpu;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn("relative", className)}
    >
      {/* Arcade Machine Frame */}
      <div className="relative bg-brand-surface border-4 border-brand-border overflow-hidden">
        {/* Neon Glow Border */}
        <div className="absolute inset-0 border border-brand-primary/20" />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-brand-primary" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-brand-primary" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-brand-primary" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-brand-primary" />

        {/* Top Marquee */}
        <div className="relative bg-brand-primary/10 border-b border-brand-primary/30 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-pixel text-xs text-brand-primary uppercase tracking-widest">
              MACHINE {String(index + 1).padStart(2, "0")}
            </span>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-brand-accent rounded-full" />
              <span className="w-2 h-2 bg-brand-highlight rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* Screen Area */}
        <div className="p-6">
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-5 gap-6 items-start",
              !isEven && "md:direction-rtl",
            )}
          >
            {/* Content */}
            <div
              className={cn(
                "flex flex-col gap-4",
                !isEven ? "md:col-span-3 md:order-2" : "md:col-span-3",
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-heading text-brand-text">{service.name}</h3>
              </div>

              <p className="text-subhead">{service.tagline}</p>
              <p className="text-body">{service.description}</p>

              {/* Features List */}
              <ul className="mt-2 flex flex-col gap-2">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-brand-text-muted"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-brand-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Bar */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-brand-bg font-pixel text-xs uppercase tracking-wider hover:bg-brand-primary-light transition-colors"
                >
                  Learn More
                </a>
                {service.leadTime && (
                  <span className="text-pixel text-[10px] text-brand-text-dim">
                    LEAD TIME: {service.leadTime}
                  </span>
                )}
              </div>
            </div>

            {/* Icon Display */}
            <div
              className={cn(
                "hidden md:flex md:col-span-2 items-center justify-center",
                !isEven && "md:order-1",
              )}
            >
              <motion.div
                className="relative w-32 h-32 bg-brand-bg-elevated border-2 border-brand-border flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.1)",
                    "0 0 40px rgba(0, 212, 255, 0.2)",
                    "0 0 20px rgba(0, 212, 255, 0.1)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 crt-scanlines opacity-20 pointer-events-none" />
                <Icon className="w-16 h-16 text-brand-border-hover" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Panel with Buttons */}
        <div className="bg-brand-bg-elevated border-t border-brand-border/50 px-6 py-3">
          <div className="flex items-center justify-between">
            <span className="text-pixel text-[10px] text-brand-text-dim">
              CREDITS: 01
            </span>
            <div className="flex gap-2">
              <motion.div
                className="w-8 h-8 bg-brand-highlight rounded-full border-2 border-brand-highlight"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.div
                className="w-8 h-8 bg-brand-accent rounded-full border-2 border-brand-accent"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SkillTreeProps {
  skills: { name: string; level: number; maxLevel: number }[];
  className?: string;
}

/**
 * RPG-style skill tree visualization
 */
export function SkillTree({ skills, className }: SkillTreeProps) {
  return (
    <div
      className={cn(
        "bg-brand-surface border-2 border-brand-border p-6",
        className,
      )}
    >
      <h3 className="text-heading text-brand-text mb-6 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-brand-accent" />
        Skill Tree
      </h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="text-pixel text-xs text-brand-text w-32">
              {skill.name}
            </span>

            {/* Level Bars */}
            <div className="flex gap-1 flex-1">
              {[...Array(skill.maxLevel)].map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "h-3 flex-1 border",
                    i < skill.level
                      ? "bg-brand-primary border-brand-primary"
                      : "bg-brand-bg-elevated border-brand-border",
                  )}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                />
              ))}
            </div>

            <span className="text-pixel text-[10px] text-brand-accent w-12 text-right">
              {skill.level}/{skill.maxLevel}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon?: string;
  unlocked?: boolean;
  className?: string;
}

/**
 * Achievement badge with locked/unlocked states
 */
export function AchievementBadge({
  title,
  description,
  unlocked = false,
  className,
}: AchievementBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative p-4 border-2",
        unlocked
          ? "bg-brand-accent/10 border-brand-accent"
          : "bg-brand-bg-elevated border-brand-border opacity-60 grayscale",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-10 h-10 flex items-center justify-center border-2",
            unlocked
              ? "bg-brand-accent/20 border-brand-accent text-brand-accent"
              : "bg-brand-surface border-brand-border text-brand-text-dim",
          )}
        >
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <h4
            className={cn(
              "text-pixel text-sm",
              unlocked ? "text-brand-accent" : "text-brand-text-dim",
            )}
          >
            {title}
          </h4>{" "}
          <p className="text-pixel text-[10px] text-brand-text-muted">
            {description}
          </p>
        </div>

        {unlocked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-brand-highlight text-brand-bg font-pixel text-xs flex items-center justify-center"
          >
            ✓
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
