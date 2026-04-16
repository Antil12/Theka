"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  delay?: number;
  aspectRatio?: string;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
  delay = 0,
  aspectRatio,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Golden Curtain that slides right (scaleX 1 -> 0) */}
      <motion.div
        className="absolute inset-0 bg-gold z-10 origin-right"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay }}
      />

      {/* Image holding div that scales down 1.1 -> 1.0 */}
      <motion.div
        className="w-full h-full relative"
        initial={{ scale: 1.15, filter: "brightness(0.8)" }}
        animate={
          isInView
            ? { scale: 1, filter: "brightness(1)" }
            : { scale: 1.15, filter: "brightness(0.8)" }
        }
        transition={{ duration: 1.4, ease: "easeOut", delay: delay + 0.1 }}
      >
        <Image
          src={src}
          alt={alt}
          fill={!width && !height}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover w-full h-full ${imageClassName}`}
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
