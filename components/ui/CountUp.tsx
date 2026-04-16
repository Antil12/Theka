"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  from = 0,
  to,
  duration = 1.8,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(from);

  // Use a spring physics for realistic slowing down at the end
  const animatedValue = useSpring(count, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, to, count]);

  const displayedText = useTransform(animatedValue, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix;
  });

  return (
    <motion.span ref={ref} className={className}>
      {displayedText}
    </motion.span>
  );
}
