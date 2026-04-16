"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WordReveal from "../ui/WordReveal";
import Button from "../ui/Button";
import Marquee from "../ui/Marquee";
import ScrollProgressBar from "../ui/ScrollProgressBar";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col justify-between overflow-hidden bg-void pt-[80px]"
    >
      <ScrollProgressBar />

      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="absolute inset-0 bg-void/50 z-10 mix-blend-multiply" />
        <Image
          src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&q=85"
          alt="Dark whiskey barrles"
          fill
          priority
          className="object-cover filter brightness-[0.35] sepia-[0.1]"
          sizes="100vw"
        />

        {/* Film grain noise overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(8,8,8,0.8)_100%)]" />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-30 flex flex-col items-center justify-center flex-grow w-full max-w-[1180px] mx-auto px-6 text-center mt-[-6vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-label text-[11px] text-gold tracking-[0.4em] mb-6 uppercase"
        >
          EST. 2008
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="h-[1px] bg-gold mb-10"
        />

        <h1 className="font-display text-[40px] min-[400px]:text-[48px] sm:text-[60px] md:text-[90px] lg:text-[120px] text-pure tracking-[-0.02em] leading-[1] mb-8">
          <WordReveal delay={0.8} className="block">
            CRAFTED FOR
          </WordReveal>
          <WordReveal
            delay={0.9}
            className="block italic text-gold shimmer-text pb-2 px-4 shadow-sm"
          >
            THE BOLD
          </WordReveal>
        </h1>

        {isMounted && (
          <motion.div
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.2em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="font-display text-xl sm:text-2xl md:text-3xl text-gold/80 uppercase mb-8 ml-[0.2em]"
          >
            T H E K A
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-body text-silk text-[16px] md:text-[18px] font-[300] max-w-md mx-auto mb-12"
        >
          Where every pour tells a story of craft, heritage and ambition
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-sm sm:max-w-none"
        >
          <Link href="/products" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Explore Collection
            </Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full">
              Our Story
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Absolute Bottom Marquee */}
      <div className="absolute inset-x-0 bottom-4 z-30">
        <Marquee speed={25} direction="left" className="opacity-80">
          <span className="font-label text-[10px] text-gold-dim tracking-[0.4em] uppercase mx-4">
            WHISKEY · VODKA · WINE · RUM · GIN · SINGLE MALT · RESERVE ·
          </span>
          <span className="font-label text-[10px] text-gold-dim tracking-[0.4em] uppercase mx-4">
            WHISKEY · VODKA · WINE · RUM · GIN · SINGLE MALT · RESERVE ·
          </span>
        </Marquee>
      </div>
    </section>
  );
}
