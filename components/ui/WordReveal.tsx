"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WordRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: any;
}

export default function WordReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "span",
}: WordRevealProps) {
  // Simple word split, keeping spaces
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      y: "120%",
      opacity: 0,
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={1}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden pb-1 align-bottom"
        >
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
          {/* Add a space after each word except the last one */}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
