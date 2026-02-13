import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Hoskbrew v2 | Retro Hardware Foundry",
  description:
    "High-fidelity retro gaming hardware, cartridges, and homebrew support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pixel.variable} bg-retro-void text-retro-white antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-retro-accent selection:text-retro-black`}
      >
        <div className="fixed inset-0 pointer-events-none z-[100] bg-noise opacity-50 mix-blend-overlay" />
        <div className="fixed inset-0 pointer-events-none z-[90] shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />

        <Header />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
