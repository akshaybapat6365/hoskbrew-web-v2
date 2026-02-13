"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Alex Hosk",
    role: "Founder & Lead Engineer",
    image: "/assets/images/HoskBrew_Raised_OneColor_Black.png",
    bio: "Obsessed with 6502 assembly and injection molding tolerances.",
  },
  {
    name: "Sarah Bit",
    role: "Art Director",
    image: "/assets/images/HoskBrew_Raised_Star_Color.png",
    bio: "Pixel artist extraordinaire. Makes sure every sprite fits the grid.",
  },
  {
    name: "Logi Tech",
    role: "Operations",
    image: "/assets/images/HoskBrew_Stacked_White.png",
    bio: "Keeps the fulfillment center running like a well-oiled machine.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-retro-black">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_008.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-retro text-retro-white"
          >
            PRESERVING THE <span className="text-retro-accent">BIT</span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-sans text-retro-white/80 max-w-3xl mx-auto leading-relaxed">
            Hoskbrew exists to support the retro gaming renaissance. We believe
            physical media matters, and that new games for old consoles deserve
            professional-grade production.
          </p>
        </div>
      </section>

      <section className="py-24 bg-retro-gray/10 border-y border-retro-gray/30">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-retro text-retro-secondary">
              ORIGIN STORY
            </h2>
            <p className="text-lg font-sans text-retro-white/70">
              It started in a garage with a soldering iron and a stack of broken
              Game Boys. Frustrated by the lack of high-quality replacement
              parts and the difficulty of producing physical cartridges for
              homebrew games, we decided to build the infrastructure ourselves.
            </p>
            <p className="text-lg font-sans text-retro-white/70">
              Today, we help indie developers worldwide bring their 8-bit and
              16-bit dreams to life, from PCB fabrication to full box-set
              manufacturing.
            </p>
          </div>
          <div className="relative h-[400px] bg-retro-black border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]">
            <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_002.png')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-retro text-retro-white text-center mb-16">
            THE <span className="text-retro-accent">CREW</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-retro-gray/20 border border-retro-white/10 p-6 text-center hover:bg-retro-gray/40 transition-colors"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-retro-secondary group-hover:scale-110 transition-transform">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-retro text-retro-white">
                  {member.name}
                </h3>
                <p className="text-retro-secondary font-mono text-sm uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-retro-white/70 font-sans italic">
                  "{member.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
