"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 bg-gold h-[2px] z-[9999] opacity-80 mix-blend-screen"
      style={{ scaleX, transformOrigin: "0%", width: "100%" }}
    />
  );
}
