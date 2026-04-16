"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // pixels per second roughly
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  children,
  speed = 25,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden w-full flex whitespace-nowrap relative ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* We need double content to make infinite loop smooth */}
      <motion.div
        className="flex items-center whitespace-nowrap min-w-max"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: 1000 / speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex px-4">{children}</div>
        <div className="flex px-4">{children}</div>
      </motion.div>
    </div>
  );
}
