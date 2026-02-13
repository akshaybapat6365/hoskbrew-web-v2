```
 ██╗  ██╗ ██████╗ ███████╗██╗  ██╗██████╗ ██████╗ ███████╗██╗    ██╗
 ██║  ██║██╔═══██╗██╔════╝██║ ██╔╝██╔══██╗██╔══██╗██╔════╝██║    ██║
 ███████║██║   ██║███████╗█████╔╝ ██████╔╝██████╔╝█████╗  ██║ █╗ ██║
 ██╔══██║██║   ██║╚════██║██╔═██╗ ██╔══██╗██╔══██╗██╔══╝  ██║███╗██║
 ██║  ██║╚██████╔╝███████║██║  ██╗██████╔╝██║  ██║███████╗╚███╔███╔╝
 ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝
                    🎮  W E B  v 2  🎮
```

**Retro gaming cartridge manufacturing for indie developers.**

Custom NES, SNES, Game Boy, GBA & Genesis cartridges — from PCB to packaging to your player's hands.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)](https://www.framer.com/motion)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)

---

## What is HoskBrew?

HoskBrew manufactures premium physical cartridges for indie retro game developers. We handle the full pipeline: custom PCB fabrication, shell molding, label printing, manual booklets, box packaging, quality assurance, and fulfillment. Our flagship title is **Crystal Mines** for Game Boy.

We also publish **RetroNomicon Quarterly** — a digital zine for the homebrew development community covering hardware teardowns, ROM hacking guides, and dev tool reviews.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    HOSKBREW WEB v2                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐  ┌──────────┐  ┌────────────┐            │
│  │  Pages   │  │Components│  │   Design    │            │
│  │─────────│  │──────────│  │────────────│            │
│  │ Home     │  │ Hero     │  │ Brand Tokens│            │
│  │ Products │  │ Header   │  │ Typography  │            │
│  │ Services │  │ Footer   │  │ Motion Lib  │            │
│  │ Retro-   │  │ Card     │  │ Color System│            │
│  │  Nomicon │  │ Button   │  │ Overlays    │            │
│  │ About    │  │ Badge    │  │ Particles   │            │
│  │ Contact  │  │ Forms    │  │ Glow FX     │            │
│  └─────────┘  └──────────┘  └────────────┘            │
│                                                         │
│  ┌───────────────────────────────────────────┐          │
│  │              Data Layer                    │          │
│  │  products.ts  │  services.ts  │  types/   │          │
│  └───────────────────────────────────────────┘          │
│                                                         │
│  Stack: Next.js 16 (App Router) + Tailwind v4          │
│         + Framer Motion + TypeScript                    │
└─────────────────────────────────────────────────────────┘
```

## Visual Design System

```
┌──────────────────────────────────────────┐
│            BRAND COLOR PALETTE           │
├──────────────────────────────────────────┤
│                                          │
│  ██ Azure     #007AFF  (Primary/CTA)     │
│  ██ Emerald   #44CF6C  (Accent/Success)  │
│  ██ Oxford    #11192C  (Background)      │
│  ██ Highlight #FF3B30  (Warning/Error)   │
│  ██ White     #F0F0F0  (Body Text)       │
│                                          │
│  Typography: Inter (Black/Bold/Regular)  │
│  Pixel Font: Pixelify Sans (labels only) │
│                                          │
│  Effects: CRT scanlines, pixel grid,     │
│           neon glow, floating particles, │
│           noise texture, vignette        │
└──────────────────────────────────────────┘
```

## Pages

| Route              | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `/`                | Hero with floating mascot, featured product, services preview, RetroNomicon CTA |
| `/products`        | Filterable product grid (by category & platform)                                |
| `/products/[slug]` | SSG product detail pages (8 products)                                           |
| `/services`        | Manufacturing services with features & pricing                                  |
| `/retronomicon`    | Quarterly publication — current issue & archives                                |
| `/about`           | Company story, values, capabilities                                             |
| `/contact`         | Contact form with inquiry type selection                                        |

## Quick Start

```bash
git clone https://github.com/akshaybapat6365/hoskbrew-web-v2.git
cd hoskbrew-web-v2
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── products/           # Products listing + [slug] detail
│   ├── services/           # Services landing
│   ├── retronomicon/       # Publication page
│   ├── about/              # Company page
│   ├── contact/            # Contact form
│   ├── globals.css         # @theme tokens + retro utilities
│   ├── layout.tsx          # Root layout + overlays
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots config
├── components/
│   ├── Hero.tsx            # Animated hero with mascot
│   ├── Header.tsx          # Responsive nav
│   ├── Footer.tsx          # Site footer
│   ├── ContactForm.tsx     # Contact form logic
│   ├── home/               # Home page sections
│   ├── layout/             # PageHeader, SectionHeader
│   └── ui/                 # Button, Card, Badge, Input, etc.
├── data/                   # Static data (products, services)
├── lib/                    # Utils, colors, motion, assets
└── types/                  # TypeScript type definitions
```

## Asset Guidelines

```
┌─────────────────────────────────────────┐
│          🐙 MASCOT USAGE 🐙            │
├─────────────────────────────────────────┤
│                                         │
│  ✅ Color_Octopus_New.png   (Hero)      │
│  ✅ B_W_Octopus_New.png     (Watermark) │
│  ✅ W_B_Octopus_New.png     (Logo alt)  │
│                                         │
│  ❌ B&W Octopus Vector.png  (DO NOT)    │
│  ❌ Color Octopus Vector.png (DO NOT)   │
│                                         │
│  Logo variants available:               │
│  Full / Horizontal / Stacked / Raised   │
│  Colors: Color / Black / White / 1Color │
└─────────────────────────────────────────┘
```

## License

Private — © HoskBrew. All rights reserved.
