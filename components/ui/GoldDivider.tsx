"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GoldDividerProps {
  className?: string;
  width?: string;
  delay?: number;
}

export default function GoldDivider({
  className = "",
  width = "120px",
  delay = 0,
}: GoldDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`flex justify-center w-full ${className}`}>
      <motion.div
        className="h-[1px] bg-gold"
        initial={{ width: 0 }}
        animate={isInView ? { width } : { width: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
      />
    </div>
  );
}
