"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function PromoBanner() {
  return (
    <section className="w-full relative py-20 px-6 overflow-hidden flex items-center justify-center text-center">
      {/* Background Gradient & Animated Shimmer */}
      <div className="absolute inset-0 z-0 bg-[#0F0F0F]" />
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-r from-gold-dim via-gold to-gold-dim opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Texture mask */}
      <div
        className="absolute inset-0 z-20 mix-blend-overlay opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-30 flex flex-col md:flex-row items-center justify-between w-full max-w-[1180px] gap-8">
        <div className="flex flex-col text-left">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-gold mb-2 block">
            Featured Event
          </span>
          <h2 className="font-editorial text-[28px] sm:text-[32px] md:text-[42px] text-pure mb-2 font-bold select-none">
            THEKA MEMBERS NIGHT — MUMBAI
          </h2>
          <p className="font-body text-silk/80 max-w-lg">
            Join the inner circle for an exclusive evening at The St. Regis.
            Unreleased tastings, master blenders, and Michelin-starred pairings.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="text-void bg-gold hover:bg-gold-bright font-bold w-full md:w-auto border-none"
          >
            RESERVE YOUR SPOT
          </Button>
        </div>
      </div>
    </section>
  );
}
