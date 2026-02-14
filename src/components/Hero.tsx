"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "./ui/Button";
import { AssetRegistry } from "@/lib/assets";
import { ChevronRight } from "lucide-react";

function mulberry32(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export default function Hero() {
  const [coinInserted, setCoinInserted] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const particles = useMemo(() => {
    const rnd = mulberry32(12345);
    return [...Array(20)].map(() => ({
      x: rnd() * 100,
      y: rnd() * 100,
      opacity: rnd() * 0.5 + 0.2,
      duration: rnd() * 5 + 5,
      delay: rnd() * 5,
    }));
  }, []);

  useEffect(() => {
    if (coinInserted) {
      const timer = setTimeout(() => setShowDemo(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [coinInserted]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-bg to-black" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 212, 255, 0.15), transparent 50%),
              radial-gradient(ellipse 60% 40% at 20% 80%, rgba(0, 255, 136, 0.1), transparent 50%),
              radial-gradient(ellipse 50% 30% at 80% 60%, rgba(255, 51, 102, 0.08), transparent 50%)
            `
          }}
        />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 z-[1]"
      >
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60vh]"
          style={{
            background: `
              linear-gradient(to top, rgba(0, 212, 255, 0.05) 0%, transparent 100%),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 39px,
                rgba(0, 212, 255, 0.1) 40px
              )
            `,
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'bottom center'
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-primary rounded-sm"
            initial={{
              x: particle.x + "%",
              y: particle.y + "%",
              opacity: particle.opacity
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-pixel text-brand-accent mb-4 block">
                ARCADE MODE
              </span>
              <h1 className="text-display text-brand-text mb-4">
                <span className="block">HOSKBREW</span>
                <span className="block phosphor-glow-green text-arcade text-brand-accent mt-2">
                  GAME STUDIOS
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-arcade text-xl text-brand-text-muted mb-8 max-w-lg"
            >
              Premium retro gaming experiences.
              <br />
              Crafted with passion for the golden age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-8"
            >
              {!coinInserted ? (
                <motion.button
                  onClick={() => setCoinInserted(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-transparent border-2 border-brand-primary neon-glow-cyan"
                >
                  <span className="text-pixel text-brand-primary group-hover:text-brand-accent transition-colors">
                    INSERT COIN
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute -right-2 -top-2 w-3 h-3 bg-brand-accent rounded-full"
                  />
                </motion.button>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex gap-4"
                >
                  <Button href="/products" variant="primary" size="lg">
                    <span className="text-pixel">START GAME</span>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    <span className="text-pixel">CREDITS</span>
                  </Button>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-8 text-pixel text-sm"
            >
              <div className="text-center">
                <div className="text-brand-accent text-2xl">16</div>
                <div className="text-brand-text-dim">BIT GAMES</div>
              </div>
              <div className="text-center">
                <div className="text-brand-primary text-2xl">50+</div>
                <div className="text-brand-text-dim">LEVELS</div>
              </div>
              <div className="text-center">
                <div className="text-brand-highlight text-2xl">∞</div>
                <div className="text-brand-text-dim">FUN</div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]"
            >
              <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full" />
              
              <Image
                src={AssetRegistry.mascot.color}
                alt="HoskBrew mascot"
                fill
                className="object-contain drop-shadow-[0_0_60px_rgba(0,212,255,0.3)]"
                priority
              />

              {coinInserted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 border-4 border-brand-accent rounded-full"
                />
              )}
            </motion.div>

            {showDemo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm"
              >
                <div className="bg-black/80 border border-brand-primary/50 p-4 rounded crt-screen">
                  <div className="text-pixel text-xs text-brand-accent mb-2">
                    NOW PLAYING: CRYSTAL MINES
                  </div>
                  <div className="aspect-video bg-brand-bg-elevated relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-pixel text-brand-text-dim">[ GAMEPLAY PREVIEW ]</span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 h-1 bg-brand-border">
                      <motion.div 
                        className="h-full bg-brand-accent"
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-20 pointer-events-none crt-scanlines opacity-[0.15]" />

      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}
      />
    </section>
  );
}
