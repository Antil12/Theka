"use client";

import { motion } from "framer-motion";

export default function MapPlaceholder() {
  // Generate some random positions for "pins" to look interesting
  const pins = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    top: `${20 + Math.random() * 60}%`,
    left: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 2,
  }));

  return (
    <div className="w-full aspect-video md:aspect-[21/9] bg-[#0A0A0A] border border-dashed border-gold/30 relative overflow-hidden flex items-center justify-center p-8 rounded-sm">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold m-4 opacity-50" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold m-4 opacity-50" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold m-4 opacity-50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold m-4 opacity-50" />

      {/* Grid overlay for map feel */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C9A44C 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Map watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] z-0 pointer-events-none">
        <span className="font-display text-[20vw] text-pure select-none">
          MAP
        </span>
      </div>

      {/* Pins pinging randomly */}
      {pins.map((pin) => (
        <div
          key={pin.id}
          className="absolute z-10"
          style={{ top: pin.top, left: pin.left }}
        >
          <motion.div
            className="w-2 h-2 bg-gold rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: pin.delay }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gold rounded-full"
            animate={{ scale: [0, 2], opacity: [0.8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: pin.delay }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center bg-obsidian/80 backdrop-blur-sm p-8 border border-border-dim shadow-2xl">
        <div className="w-[3px] h-[20px] bg-gold mx-auto mb-4" />
        <h2 className="font-display text-[32px] tracking-[0.4em] text-gold mb-2">
          THEKA
        </h2>
        <p className="font-label text-[11px] text-pure uppercase tracking-[0.2em] mb-4">
          Global Network
        </p>
        <p className="font-body text-[14px] text-ash italic">
          Interactive Map Coming Soon
        </p>
      </div>
    </div>
  );
}
