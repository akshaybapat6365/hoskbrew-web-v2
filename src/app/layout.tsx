import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NoiseOverlay, VignetteOverlay } from "@/components/ui/Overlays";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HoskBrew — Retro Gaming Cartridge Manufacturing",
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
        className={`${inter.variable} ${pixel.variable} bg-brand-bg text-brand-text antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        <NoiseOverlay opacity={0.03} />
        <VignetteOverlay intensity={0.4} />

        <Header />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
