"use client";

import Image from "next/image";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  type RefObject,
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
import {
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  X,
} from "lucide-react";
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
import { clampIndex } from "./offeringsGalleryUtils";

type ViewerMode = "modal" | "immersive";
type ViewerLayout = "focus" | "grid";

type BackdropOption = {
  value: OfferingBackdrop;
  label: string;
  icon: ReactNode;
};

const BACKDROPS: BackdropOption[] = [
  { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
  { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
  { value: "grid", label: "Pattern", icon: <Grid2X2 className="h-4 w-4" /> },
];

const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

function stageBackdropClasses(backdrop: OfferingBackdrop): string {
  if (backdrop === "light") return "bg-[#F0F0F0] text-brand-bg";
  if (backdrop === "grid") return "bg-brand-bg-elevated pixel-grid-bg-strong";
  return "bg-brand-bg-elevated";
}

function cardBackdropClasses(backdrop: OfferingBackdrop): string {
  if (backdrop === "light") return "bg-[#F0F0F0]";
  if (backdrop === "grid") return "bg-brand-bg-elevated pixel-grid-bg";
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

function prefetchStaticImage(src: string | undefined) {
  if (!src) return;
  if (typeof window === "undefined") return;
  const img = new window.Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = src;
}

const OfferingsGrid = memo(function OfferingsGrid({
  items,
  onOpen,
  defaultBackdrop,
}: {
  items: OfferingItem[];
  onOpen: (item: OfferingItem) => void;
  defaultBackdrop: OfferingBackdrop;
}) {
  return (
    <StaggerGroup
      staggerDelay={0.06}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item, i) => {
        const cardBackdrop = item.recommendedBackdrop ?? defaultBackdrop;
        return (
          <AnimateOnScroll key={item.id} effect="pixelReveal" delay={i * 0.02}>
            <motion.button
              type="button"
              onClick={() => onOpen(item)}
              variants={cardHover}
              initial="initial"
              whileHover="hover"
              className="text-left group relative overflow-hidden rounded-lg retro-border-glow scanline-sweep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label={`Open preview: ${item.title}`}
            >
              <div
                className={cn(
                  "relative w-full aspect-[4/3] overflow-hidden",
                  cardBackdropClasses(cardBackdrop),
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
                <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.10]" />
              </div>

              <div className="flex flex-col gap-2 p-5 bg-brand-bg">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">{item.group}</Badge>
                  <Badge variant="accent">{item.edition}</Badge>
                </div>
                <h3 className="font-sans font-black uppercase text-lg text-brand-text leading-[0.95] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-text-muted line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.button>
          </AnimateOnScroll>
        );
      })}
    </StaggerGroup>
  );
});

function ViewerToggle({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs transition-all cursor-pointer",
        active
          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
          : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text",
      )}
      aria-pressed={active}
      aria-label={`${label}: ${value}`}
    >
      <span className="text-label text-[10px] leading-none tracking-[0.18em]">
        {value}
      </span>
    </button>
  );
}

function OfferingsViewer({
  selected,
  filtered,
  selectedIndex,
  originId,
  mode,
  layout,
  stageBackdrop,
  stageLoaded,
  setLayout,
  setMode,
  setStageBackdrop,
  onClose,
  onPrev,
  onNext,
  onJump,
  modalRef,
  closeButtonRef,
}: {
  selected: OfferingItem;
  filtered: OfferingItem[];
  selectedIndex: number;
  originId: string | null;
  mode: ViewerMode;
  layout: ViewerLayout;
  stageBackdrop: OfferingBackdrop;
  stageLoaded: boolean;
  setLayout: (layout: ViewerLayout) => void;
  setMode: (mode: ViewerMode) => void;
  setStageBackdrop: (b: OfferingBackdrop) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (id: string) => void;
  modalRef: RefObject<HTMLDivElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
}) {
  const isImmersive = mode === "immersive";
  const isGridLayout = layout === "grid";

  const overlayClasses = isImmersive
    ? "fixed inset-0 z-[120] bg-black/90"
    : "fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4";

  const shellClasses = isImmersive
    ? "relative h-screen w-screen overflow-hidden bg-brand-bg"
    : "relative w-[96vw] max-w-[1680px] h-[90vh] overflow-hidden rounded-2xl border border-brand-border bg-brand-bg-elevated shadow-[0_0_0_1px_rgba(0,122,255,0.18),0_0_120px_rgba(0,122,255,0.14)]";

  const stageLayoutId =
    originId && originId === selected.id && !isImmersive
      ? `offering-media-${originId}`
      : undefined;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="offering-title"
      aria-describedby="offering-desc"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className={overlayClasses}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 10, scale: 0.99, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 10, scale: 0.99, opacity: 0 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={shellClasses}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.10] animate-[crt-flicker_9s_infinite] motion-reduce:animate-none" />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-brand-border/60 bg-brand-bg-elevated/70 px-4 py-3 backdrop-blur-sm">
            <div className="flex min-w-0 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">{selected.group}</Badge>
                <Badge variant="accent">{selected.edition}</Badge>
                <span className="text-xs text-brand-text-dim font-mono">
                  {selectedIndex + 1}/{filtered.length}
                </span>
              </div>

              <h3
                id="offering-title"
                className="font-sans font-black uppercase tracking-tight text-xl sm:text-2xl text-brand-text leading-[0.95]"
              >
                {selected.title}
              </h3>
              <p id="offering-desc" className="text-sm text-brand-text-muted">
                {selected.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setMode(isImmersive ? "modal" : "immersive")}
                className="inline-flex items-center justify-center rounded-full border border-brand-border bg-brand-bg px-3 py-2 text-sm text-brand-text-muted transition-all hover:border-brand-border-hover hover:text-brand-text cursor-pointer"
                aria-label={isImmersive ? "Exit immersive" : "Enter immersive"}
              >
                {isImmersive ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-brand-bg transition-all hover:bg-brand-primary hover:text-brand-bg hover:border-brand-primary cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.85fr_1fr] overflow-hidden">
            <div
              className={cn("relative", stageBackdropClasses(stageBackdrop))}
            >
              {isGridLayout ? (
                <div className="absolute inset-0 overflow-auto p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
                    {filtered.map((item) => {
                      const active = item.id === selected.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => onJump(item.id)}
                          className={cn(
                            "group relative aspect-square overflow-hidden rounded-xl border bg-brand-bg/35 backdrop-blur-sm transition-all cursor-pointer",
                            active
                              ? "border-brand-primary shadow-[0_0_0_1px_rgba(0,122,255,0.35),0_0_32px_rgba(0,122,255,0.14)]"
                              : "border-brand-border hover:border-brand-border-hover",
                          )}
                          aria-label={`Select: ${item.title}`}
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            unoptimized
                            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 220px"
                          />
                          <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.08]" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <motion.div
                  className="absolute inset-0"
                  layoutId={stageLayoutId}
                >
                  <AnimatePresence initial={false} mode="sync">
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selected.src}
                        alt={selected.alt}
                        fill
                        unoptimized
                        className="object-contain p-4 sm:p-6 lg:p-7"
                        sizes="(max-width: 1024px) 100vw, 1100px"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}

              {!isGridLayout && !stageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg border border-brand-border bg-brand-bg/70 px-4 py-2 text-xs text-brand-text-muted backdrop-blur-sm">
                    Loading
                  </div>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 crt-scanlines opacity-[0.10]" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-bg/70 px-4 py-2 text-sm text-brand-text-muted backdrop-blur-sm transition-all hover:border-brand-border-hover hover:text-brand-text cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-bg/70 px-4 py-2 text-sm text-brand-text-muted backdrop-blur-sm transition-all hover:border-brand-border-hover hover:text-brand-text cursor-pointer"
                    aria-label="Next"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <span className="text-xs text-brand-text-dim font-mono bg-brand-bg/60 border border-brand-border/60 px-3 py-2 rounded-full backdrop-blur-sm">
                  Esc closes - Left/Right navigates
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-brand-border/60 bg-brand-bg p-4 sm:p-5 lg:border-t-0 lg:border-l">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                  Layout
                </span>
                <div className="flex flex-wrap gap-2">
                  <ViewerToggle
                    label="Layout"
                    value="Focus"
                    active={layout === "focus"}
                    onClick={() => setLayout("focus")}
                  />
                  <ViewerToggle
                    label="Layout"
                    value="Grid"
                    active={layout === "grid"}
                    onClick={() => setLayout("grid")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                  View
                </span>
                <div className="flex flex-wrap gap-2">
                  <ViewerToggle
                    label="View"
                    value="Modal"
                    active={mode === "modal"}
                    onClick={() => setMode("modal")}
                  />
                  <ViewerToggle
                    label="View"
                    value="Immersive"
                    active={mode === "immersive"}
                    onClick={() => setMode("immersive")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wide text-brand-text-dim">
                  Backdrop
                </span>
                <div className="flex flex-wrap gap-2">
                  {BACKDROPS.map((b) => (
                    <button
                      key={b.value}
                      type="button"
                      onClick={() => setStageBackdrop(b.value)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-all cursor-pointer",
                        stageBackdrop === b.value
                          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                          : "border-brand-border text-brand-text-muted hover:border-brand-border-hover hover:text-brand-text",
                      )}
                      aria-pressed={stageBackdrop === b.value}
                      aria-label={`Backdrop: ${b.label}`}
                    >
                      {b.icon}
                      <span className="text-label text-[10px] leading-none tracking-[0.18em]">
                        {b.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <div className="rounded-xl border border-brand-border bg-brand-bg/55 p-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-brand-border bg-brand-bg-elevated">
                      <Image
                        src={selected.src}
                        alt={selected.alt}
                        fill
                        unoptimized
                        className="object-contain p-2"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-brand-text-dim">
                        Selected
                      </div>
                      <div className="truncate text-sm font-semibold text-brand-text">
                        {selected.title}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button href="/contact" variant="primary" size="lg">
                    Ask About This Build
                  </Button>
                  <Button href="/products" variant="outline">
                    Back to Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
  const [group, setGroup] = useState<OfferingGroup | "all">(defaultGroup);
  const [edition, setEdition] = useState<OfferingEdition | "all">("all");

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [originId, setOriginId] = useState<string | null>(null);
  const [viewerMode, setViewerMode] = useState<ViewerMode>("modal");
  const [viewerLayout, setViewerLayout] = useState<ViewerLayout>("focus");
  const [stageBackdrop, setStageBackdrop] = useState<OfferingBackdrop>(
    collection.defaultBackdrop,
  );

  const [stageLoaded, setStageLoaded] = useState(false);

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
      setOriginId(item.id);
      setSelectedId(item.id);
      setViewerLayout("focus");
      setViewerMode("modal");
      setStageBackdrop((current) => {
        if (current !== collection.defaultBackdrop) return current;
        return item.recommendedBackdrop ?? collection.defaultBackdrop;
      });
      setStageLoaded(false);
    },
    [collection.defaultBackdrop],
  );

  const close = useCallback(() => {
    setSelectedId(null);
    setOriginId(null);
    setStageLoaded(false);

    const el = lastActiveRef.current;
    if (el && typeof el.focus === "function") {
      setTimeout(() => el.focus(), 0);
    }
  }, []);

  const goNext = useCallback(() => {
    const count = filtered.length;
    if (count <= 0) return;
    if (selectedIndex < 0) return;
    const nextIndex = clampIndex(count, selectedIndex + 1);
    const next = filtered[nextIndex];
    if (next) {
      setSelectedId(next.id);
      setStageLoaded(false);
    }
  }, [filtered, selectedIndex]);

  const goPrev = useCallback(() => {
    const count = filtered.length;
    if (count <= 0) return;
    if (selectedIndex < 0) return;
    const prevIndex = clampIndex(count, selectedIndex - 1);
    const prev = filtered[prevIndex];
    if (prev) {
      setSelectedId(prev.id);
      setStageLoaded(false);
    }
  }, [filtered, selectedIndex]);

  const jumpTo = useCallback((id: string) => {
    setSelectedId(id);
    setStageLoaded(false);
  }, []);

  useEffect(() => {
    if (!selected) return;

    if (typeof window === "undefined") return;

    let cancelled = false;

    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => {
      if (!cancelled) setStageLoaded(true);
    };
    img.onerror = () => {
      if (!cancelled) setStageLoaded(true);
    };
    img.src = selected.src;

    const prev = filtered[clampIndex(filtered.length, selectedIndex - 1)];
    const next = filtered[clampIndex(filtered.length, selectedIndex + 1)];
    prefetchStaticImage(prev?.src);
    prefetchStaticImage(next?.src);

    return () => {
      cancelled = true;
    };
  }, [selected?.id, selected?.src, filtered, selectedIndex, selected]);

  useEffect(() => {
    if (!selectedId) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key.toLowerCase() === "g") {
        setViewerLayout((v) => (v === "grid" ? "focus" : "grid"));
      }
      if (e.key.toLowerCase() === "f") {
        setViewerMode((v) => (v === "immersive" ? "modal" : "immersive"));
      }

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
              <h2 className="text-heading text-brand-text">
                {collection.name}
              </h2>
              <p className="text-body max-w-3xl">{collection.description}</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
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

        <OfferingsGrid
          items={filtered}
          onOpen={open}
          defaultBackdrop={collection.defaultBackdrop}
        />
      </div>

      <AnimatePresence>
        {selected && (
          <OfferingsViewer
            selected={selected}
            filtered={filtered}
            selectedIndex={selectedIndex}
            originId={originId}
            mode={viewerMode}
            layout={viewerLayout}
            stageBackdrop={stageBackdrop}
            stageLoaded={stageLoaded}
            setLayout={setViewerLayout}
            setMode={setViewerMode}
            setStageBackdrop={setStageBackdrop}
            onClose={close}
            onPrev={goPrev}
            onNext={goNext}
            onJump={jumpTo}
            modalRef={modalRef}
            closeButtonRef={closeButtonRef}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
