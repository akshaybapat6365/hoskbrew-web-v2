# HoskBrew Website Enhancement Roadmap

## Current State Summary

### ✅ Completed (Deployed to Vercel)

#### Phase 1: Foundation

- **Brand Fonts**: Local Inter font family integrated (Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700, Black 900)
- **Image Optimization**: 16 offering images converted from PNG to WebP (63MB → 7.12MB, 88.7% reduction)
- **Performance**: All TypeScript checks passing, build optimized

#### Phase 2: Retro Aesthetic Foundation

- **New CSS Utilities**:
  - `.pixel-border` - Gradient pixel-style borders
  - `.crt-screen` - CRT monitor effect with scanlines
  - `.phosphor-glow` / `.phosphor-glow-green` - Phosphor text glow
  - `.chromatic-text` - RGB chromatic aberration animation
  - `.pixel-corners` - Clip-path pixelated corners
  - `.retro-card` - Card with hover glow and top accent line
  - `.terminal-text` - Monospace terminal-style text
  - `.screen-on` - Power-on animation
- **Animations**: `pixel-pulse`, `scanline-move`, `chromatic-shift`, `screen-power-on`

#### Phase 3.1: Products Page Reorganization

- **New Messaging**: "Built With Passion" showcase focus
- **Layout**: Featured Project section (Crystal Mines) + Stock Catalog section
- **Visual Hierarchy**: Better organization with specification display
- **Live URLs**:
  - https://hoskbrew-web-v2.vercel.app/products
  - https://hoskbrew-web-v2.vercel.app/products/offerings
  - https://hoskbrew-web-v2.vercel.app/products/offerings/crystal-mines

---

## 🎯 Remaining Implementation Plan

### Phase 3.2: Dual-Mode Gallery System

**Priority: HIGH | Estimated: 2-3 hours**

#### Objective

Transform the current `OfferingsGallery` component to support two viewing modes:

1. **Large Modal Mode** (current, enhanced): `max-w-5xl` with full controls
2. **Immersive Fullscreen Mode**: True fullscreen with minimal UI

#### Implementation Steps

**Step 1: Add View Mode State**

```typescript
// In OfferingsGallery.tsx
const [viewMode, setViewMode] = useState<"modal" | "immersive">("modal");
```

**Step 2: Create Mode Toggle UI**

- Add toggle button group in modal header
- Icons: `Maximize2` (immersive) vs `PanelTop` (modal)
- Store preference in localStorage

**Step 3: Immersive Mode Layout**

```css
/* Fullscreen styles */
.immersive-mode {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: black;
}
```

- Image fills viewport
- Floating minimal UI (backdrop toggle, close, info)
- Auto-hide controls after 3s inactivity
- Show on mouse move

**Step 4: Shared Component Refactor**

- Extract `GalleryImage` component for both modes
- Extract `GalleryControls` component
- Ensure layoutId animations work across mode switches

#### Files to Modify

- `src/components/offerings/OfferingsGallery.tsx` - Major refactor
- `src/app/globals.css` - Add immersive mode styles

---

### Phase 3.3: Fast Navigation System

**Priority: HIGH | Estimated: 2-3 hours**

#### Features to Implement

**A. Thumbnail Strip**

- Horizontal scrollable strip at bottom of modal
- Shows all filtered items as thumbnails
- Current item highlighted with border
- Click to jump
- Auto-scroll to keep current item visible

```typescript
// Thumbnail strip component
<ThumbnailStrip
  items={filtered}
  currentId={selectedId}
  onSelect={setSelectedId}
/>
```

**B. Number Key Shortcuts**

```typescript
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    // Number keys 1-9 jump to position
    if (e.key >= "1" && e.key <= "9") {
      const index = parseInt(e.key) - 1;
      if (filtered[index]) {
        setSelectedId(filtered[index].id);
      }
    }
    // 0 goes to last item
    if (e.key === "0") {
      setSelectedId(filtered[filtered.length - 1]?.id);
    }
  };
}, [filtered]);
```

**C. Slideshow Mode**

```typescript
const [slideshow, setSlideshow] = useState(false);
const [interval, setInterval] = useState(5000); // 5s default

useEffect(() => {
  if (!slideshow || !selected) return;
  const timer = setInterval(goNext, interval);
  return () => clearInterval(timer);
}, [slideshow, selected, interval]);
```

- Play/pause button
- Speed selector (3s, 5s, 10s)
- Shows progress bar
- Pause on user interaction

**D. Enhanced Keyboard Nav**

- `Home` key → First item
- `End` key → Last item
- `Space` → Toggle slideshow
- `F` → Toggle fullscreen/immersive mode

---

### Phase 4.1: Retro Component Library

**Priority: MEDIUM | Estimated: 3-4 hours**

#### Components to Create

**1. PixelButton**

```typescript
// 8-bit style button with pixel borders
<PixelButton variant="primary" size="lg">
  Click Me
</PixelButton>
```

- 2px solid borders with corner pixels
- Hover: color shift + glow
- Active: pressed state
- Variants: primary (azure), accent (green), ghost

**2. CRTCard**

```typescript
<CRTCard showScanlines={true} curvature={0.02}>
  <Content />
</CRTCard>
```

- Rounded corners with slight curve effect
- Optional animated scanlines overlay
- Phosphor glow on hover
- Screen flicker animation option

**3. GlitchText**

```typescript
<GlitchText intensity="medium" trigger="hover">
  Headline Text
</GlitchText>
```

- Random glitch animation
- Configurable intensity (subtle/medium/extreme)
- Trigger: hover, mount, or always
- RGB split effect

**4. TerminalBlock**

```typescript
<TerminalBlock>
  <TerminalLine delay={0}>Loading assets...</TerminalLine>
  <TerminalLine delay={500}>16 items found</TerminalLine>
  <TerminalLine delay={1000} blink>Ready</TerminalLine>
</TerminalBlock>
```

- Monospace text with typing animation
- Green phosphor glow
- Blinking cursor
- Sequential line reveals

---

### Phase 4.2: Layout & Animation Enhancements

**Priority: MEDIUM | Estimated: 2-3 hours**

#### A. Masonry Grid for Showcase

Replace current uniform grid with masonry:

```typescript
// Use CSS columns or react-masonry-css
<div className="columns-1 md:columns-2 lg:columns-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="break-inside-avoid mb-6">
      <ShowcaseCard item={item} />
    </div>
  ))}
</div>
```

- Better visual rhythm
- Variable aspect ratios
- Waterfall effect on scroll

#### B. Parallax Effects

```typescript
import { useScroll, useTransform } from "framer-motion";

const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
```

- Hero section: slower scroll rate
- Featured images: subtle parallax
- Background grid: very slow parallax

#### C. Page Transitions

```typescript
// Page transition wrapper
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0, filter: "brightness(2)" }}
    animate={{ opacity: 1, filter: "brightness(1)" }}
    exit={{ opacity: 0, filter: "brightness(2)" }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

### Phase 5: Content & Copy Improvements

**Priority: HIGH | Estimated: 1-2 hours**

#### Products Data Updates

Update `src/data/products.ts`:

- Change "price" to "starting at" or remove for showcase items
- Add "craftsmanship" field highlighting quality
- Add "materials" field (e.g., "Premium injection-molded ABS")
- Update descriptions to focus on quality/build, not purchasing

#### New Copy Examples

```typescript
// Before
{
  name: "Crystal Mines",
  description: "A brand-new puzzle-action game... Ships in a premium custom shell...",
  price: "$59.99",
}

// After
{
  name: "Crystal Mines",
  description: "Every element crafted in-house. From the injection-molded clear purple shell to the foil-stamped box. This is how we build.",
  showcaseNote: "Available as complete kit or individual components",
}
```

---

### Phase 6: Mobile & Polish

**Priority: MEDIUM | Estimated: 2-3 hours**

#### Mobile Gallery

- Swipe gestures for next/prev
- Bottom sheet for thumbnails
- Simplified filter UI (dropdown instead of chips)
- Touch-optimized button sizes (min 44px)

#### Accessibility

- `prefers-reduced-motion` support
- All images have descriptive alt text
- Keyboard-only navigation works fully
- Focus indicators visible

#### Performance Polish

- Preload next/prev images in gallery
- Intersection Observer for lazy loading
- Critical CSS extraction if needed

---

## 📋 Implementation Order Recommendation

### Week 1 (High Priority)

1. **Phase 3.3** - Fast navigation (thumbnails, keyboard shortcuts)
2. **Phase 3.2** - Dual-mode gallery (immersive fullscreen)
3. **Phase 5** - Content/copy updates

### Week 2 (Polish)

4. **Phase 4.1** - Retro component library
5. **Phase 4.2** - Layout enhancements
6. **Phase 6** - Mobile optimization

---

## 🎨 Design Principles

### Retro Aesthetic Guidelines

- **Intensity**: Moderate (your choice)
  - Subtle scanlines on all cards
  - Phosphor glow on headings
  - Pixel borders on interactive elements
  - Chromatic shift on hover (not constant)

### Color Usage

- Primary (Azure #007AFF): CTAs, links, accents
- Accent (Emerald #44CF6C): Success, secondary highlights
- Backgrounds: Keep dark (Oxford Blue #11192C)
- Text: Light gray (#F0F0F0) for readability

### Typography

- Headlines: Inter Black 900, uppercase, tight tracking
- Body: Inter Regular 400
- Labels/terminal: Inter Medium 500 or monospace
- Pixel text: Use sparingly (labels only)

---

## 🚀 Quick Wins (30 min each)

If you want immediate improvements:

1. **Add thumbnail strip to current gallery** - Copy pattern from any lightbox library
2. **Update product descriptions** - Focus on craftsmanship language
3. **Apply `.phosphor-glow` to all H2 headings** - One CSS class addition
4. **Add page transitions** - Wrap layout in AnimatePresence

---

## 🔍 Testing Checklist

Before each deployment:

- [ ] All 25 routes build successfully
- [ ] Gallery navigation works with keyboard only
- [ ] Mobile swipe gestures functional
- [ ] Images load correctly (WebP format)
- [ ] Fonts render correctly (local Inter)
- [ ] Reduced motion respected
- [ ] Lighthouse score >90

---

## 📁 Key Files Reference

### Recently Modified

- `src/app/layout.tsx` - Font loading (local Inter)
- `src/app/globals.css` - Retro CSS utilities
- `src/app/products/page.tsx` - New showcase layout
- `src/data/offerings/crystalMines.ts` - WebP image paths
- `src/data/products.ts` - Gallery array added

### To Be Modified (Future Phases)

- `src/components/offerings/OfferingsGallery.tsx` - Major refactor
- `src/components/ui/` - New retro components
- `src/app/products/[slug]/page.tsx` - Enhanced gallery display
- `src/app/page.tsx` - Home page retro enhancements

---

## 📊 Current Metrics

- **Build Time**: ~1.5s (Turbopack)
- **Total Routes**: 25
- **Image Assets**: 16 WebP files (7.12MB total)
- **Font Assets**: 6 TTF files (2MB total)
- **Lighthouse**: Pending audit

---

**Next Steps**: Choose which phase to tackle first based on your priorities. I recommend starting with Phase 3.3 (fast navigation) as it has immediate user impact.
