import type { Metadata } from "next";
import localFont from "next/font/local";
import { Press_Start_2P, VT323 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import {
  NoiseOverlay,
  PixelGridOverlay,
  ScanlineOverlay,
  VignetteOverlay,
} from "@/components/ui/Overlays";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arcade",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/inter/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "HoskBrew - Retro Gaming Cartridge Manufacturing",
  description:
    "Custom cartridge manufacturing, PCB fabrication, and full-service production for indie retro game developers. Makers of Crystal Mines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pressStart2P.variable} ${vt323.variable} bg-brand-bg text-brand-text antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <NoiseOverlay opacity={0.04} />
          <PixelGridOverlay />
          <ScanlineOverlay />
          <VignetteOverlay intensity={0.4} />

          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
