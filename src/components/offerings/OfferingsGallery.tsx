"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  type Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Grid2X2, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  OfferingBackdrop,
  OfferingCollection,
  OfferingEdition,
  OfferingGroup,
  OfferingItem,
} from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateOnScroll, StaggerGroup } from "@/components/ui/AnimateOnScroll";

type BackdropOption = {
  value: OfferingBackdrop;
  label: string;
  icon: ReactNode;
};

const BACKDROPS: BackdropOption[] = [
  { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
  { value: "grid", label: "Grid", icon: <Grid2X2 className="h-4 w-4" /> },
];

const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

function backdropClasses(backdrop: OfferingBackdrop): string {
  if (backdrop === "light") {
    return "bg-[#F0F0F0] text-brand-bg";
  }
  if (backdrop === "grid") {
    return "bg-brand-bg-elevated pixel-grid-bg";
  }
  return "bg-brand-bg-elevated";
}

function groupLabel(group: OfferingGroup | "all"): string {
  if (group === "all") return "All";
  return group;
}

function editionLabel(edition: OfferingEdition | "all"): string {
  if (edition === "all") return "All";
  return edition;
}

/**
 * @description Image-heavy gallery for a white-label offering collection.
 * Includes group + edition filters, backdrop toggles, and an animated Quick View.
 */
export function OfferingsGallery({
  collection,
  className,
  defaultGroup = "all",
  showIntro = true,
}: {
  collection: OfferingCollection;
  className?: string;
  defaultGroup?: OfferingGroup | "all";
  showIntro?: boolean;
}) {
  const [backdrop, setBackdrop] = useState<OfferingBackdrop>(
    collection.defaultBackdrop,
  );
  const [group, setGroup] = useState<OfferingGroup | "all">(defaultGroup);
  const [edition, setEdition] = useState<OfferingEdition | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const items = useMemo(() => {
    return [...collection.items].sort((a, b) => a.order - b.order);
  }, [collection.items]);

  const groups = useMemo(() => {
    const set = new Set<OfferingGroup>();
    for (const item of items) set.add(item.group);
    return ["all" as const, ...Array.from(set)];
  }, [items]);

  const editions = useMemo(() => {
    const set = new Set<OfferingEdition>();
    for (const item of items) set.add(item.edition);
    return ["all" as const, ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (group !== "all" && item.group !== group) return false;
      if (edition !== "all" && item.edition !== edition) return false;
      return true;
    });
  }, [items, group, edition]);

  const selectedIndex = useMemo(() => {
    if (!selectedId) return -1;
    return filtered.findIndex((i) => i.id === selectedId);
  }, [filtered, selectedId]);

  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : null;

  const open = useCallback(
    (item: OfferingItem) => {
      lastActiveRef.current = document.activeElement as HTMLElement | null;
      setSelectedId(item.id);
      setBackdrop(item.recommendedBackdrop ?? backdrop);
    },
    [backdrop],
  );

  const close = useCallback(() => {
    setSelectedId(null);
    const el = lastActiveRef.current;
    if (el && typeof el.focus === "function") {
      setTimeout(() => el.focus(), 0);
    }
  }, []);

  const goNext = useCallback(() => {
    if (selectedIndex < 0) return;
    const next = filtered[(selectedIndex + 1) % filtered.length];
    if (next) setSelectedId(next.id);
  }, [filtered, selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex < 0) return;
    const prev =
      filtered[(selectedIndex - 1 + filtered.length) % filtered.length];
    if (prev) setSelectedId(prev.id);
  }, [filtered, selectedIndex]);

  useEffect(() => {
    if (!selectedId) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();

      if (e.key === "Tab") {
        const root = modalRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((el) => {
          const visible = !!(
            el.offsetWidth ||
            el.offsetHeight ||
            el.getClientRects().length
          );
          const disabled =
            el.hasAttribute("disabled") ||
            el.getAttribute("aria-disabled") === "true";
          return visible && !disabled;
        });

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;

        const active = document.activeElement as HTMLElement | null;
        if (!active) return;

        if (e.shiftKey) {
          if (active === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selectedId, close, goNext, goPrev]);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  return (
    <LayoutGroup id={`offerings-${collection.slug}`}>
      <div className={cn("flex flex-col gap-8", className)}>
        <div className="flex flex-col gap-4">
          {showIntro && (
            <div className="flex flex-col gap-2">
              <h2 className="text-heading text-brand-text glitch-hover">
                {collection.name} Offerings
              </h2>
              <p className="text-body max-w-3xl">{collection.description}</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                Backdrop
              </span>
              <div className="flex flex-wrap gap-2">
                {BACKDROPS.map((b) => {
                  const active = backdrop === b.value;
                  return (
                    <button
                      key={b.value}
                      type="button"
                      onClick={() => setBackdrop(b.value)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-all cursor-pointer",
                        active
                          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                          : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text",
                      )}
                      aria-pressed={active}
                    >
                      {b.icon}
                      <span className="text-label text-[10px] leading-none tracking-[0.18em]">
                        {b.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                Group
              </span>
              <div className="flex flex-wrap gap-2">
                {groups.map((g) => {
                  const active = group === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGroup(g)}
                      className={cn(
                        "rounded-full border px-4 py-1.5 text-sm transition-all cursor-pointer",
                        active
                          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                          : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text",
                      )}
                      aria-pressed={active}
                    >
                      {groupLabel(g)}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                Edition
              </span>
              <div className="flex flex-wrap gap-2">
                {editions.map((e) => {
                  const active = edition === e;
                  return (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setEdition(e)}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs transition-all cursor-pointer",
                        active
                          ? "border-brand-accent bg-brand-accent/10 text-brand-accent"
                          : "border-brand-border text-brand-text-dim hover:text-brand-text-muted",
                      )}
                      aria-pressed={active}
                    >
                      {editionLabel(e)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <StaggerGroup
          staggerDelay={0.06}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <AnimateOnScroll
              key={item.id}
              effect="pixelReveal"
              delay={i * 0.02}
            >
              <motion.button
                type="button"
                onClick={() => open(item)}
                variants={cardHover}
                initial="initial"
                whileHover="hover"
                className="text-left group relative overflow-hidden rounded-lg retro-border-glow scanline-sweep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                aria-label={`Quick view: ${item.title}`}
              >
                <div
                  className={cn(
                    "relative w-full aspect-[4/3] overflow-hidden",
                    backdropClasses(backdrop),
                  )}
                >
                  <motion.div
                    layoutId={`offering-media-${item.id}`}
                    className="absolute inset-0"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.10] animate-[crt-flicker_7s_infinite] motion-reduce:animate-none" />
                </div>

                <div className="flex flex-col gap-2 p-5 bg-brand-bg">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="primary">{item.group}</Badge>
                    <Badge variant="accent">{item.edition}</Badge>
                  </div>
                  <h3 className="font-sans font-black uppercase text-lg text-brand-text leading-[0.95] tracking-tight glitch-hover">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-text-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.button>
            </AnimateOnScroll>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="offering-title"
            aria-describedby="offering-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={close}
          >
            <motion.div
              initial={{ y: 12, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-brand-border bg-brand-bg-elevated shadow-[0_0_0_1px_rgba(0,122,255,0.18),0_0_80px_rgba(0,122,255,0.12)]"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.12] animate-[crt-flicker_7s_infinite] motion-reduce:animate-none" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                  className={cn(
                    "relative min-h-[320px] lg:min-h-[520px]",
                    backdropClasses(backdrop),
                  )}
                >
                  <motion.div
                    layoutId={`offering-media-${selected.id}`}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selected.src}
                      alt={selected.alt}
                      fill
                      className="object-contain p-8"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </div>

                <div className="relative flex flex-col gap-5 p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="primary">{selected.group}</Badge>
                        <Badge variant="accent">{selected.edition}</Badge>
                      </div>
                      <h3
                        id="offering-title"
                        className="text-heading text-brand-text glitch-hover"
                      >
                        {selected.title}
                      </h3>
                      <p
                        id="offering-desc"
                        className="text-body text-brand-text-muted"
                      >
                        {selected.description}
                      </p>
                    </div>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={close}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-bg transition-all hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                      Backdrop
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {BACKDROPS.map((b) => {
                        const active = backdrop === b.value;
                        return (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => setBackdrop(b.value)}
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-all cursor-pointer",
                              active
                                ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                                : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text",
                            )}
                            aria-pressed={active}
                          >
                            {b.icon}
                            <span className="text-label text-[10px] leading-none tracking-[0.18em]">
                              {b.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                    <Button
                      id="offering-quote"
                      href="/contact"
                      variant="primary"
                      size="lg"
                    >
                      Request Quote
                    </Button>

                    <button
                      id="offering-prev"
                      type="button"
                      onClick={goPrev}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-sm text-brand-text-muted transition-all hover:border-brand-border-hover hover:text-brand-text cursor-pointer"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Prev
                    </button>
                    <button
                      id="offering-next"
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-sm text-brand-text-muted transition-all hover:border-brand-border-hover hover:text-brand-text cursor-pointer"
                      aria-label="Next"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-xs text-brand-text-dim font-mono">
                    Tip: Press Esc to close. Use Left/Right arrows to navigate.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
