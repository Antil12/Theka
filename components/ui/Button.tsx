"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  magnetic?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  magnetic = true,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic physics
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const rx = useSpring(0, springConfig);
  const ry = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || !magnetic) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Magnetic pull effect (clamped to prevent overflow clipping)
    rx.set(Math.max(-15, Math.min(15, x * 0.15)));
    ry.set(Math.max(-10, Math.min(10, y * 0.15)));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rx.set(0);
    ry.set(0);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-label tracking-[0.1em] uppercase transition-colors duration-300 overflow-hidden whitespace-nowrap";

  const variants = {
    primary: "bg-gold text-void border border-gold hover:bg-gold-bright",
    ghost:
      "bg-transparent text-silk hover:text-void hover:bg-gold border border-gold/30 hover:border-gold",
    outline: "bg-transparent text-gold hover:text-void border border-gold",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-8 py-4 text-[11px]",
    lg: "px-10 py-5 text-[12px] w-full sm:w-auto",
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        setIsHovered(true);
        if (props.onMouseEnter) props.onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        if (props.onMouseLeave) props.onMouseLeave(e);
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ x: rx, y: ry }}
      />
      <motion.span
        className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${isHovered && (variant === "ghost" || variant === "outline") ? "text-void" : ""}`}
        style={{ x: rx, y: ry }}
      >
        {children}
      </motion.span>
      {/* Background fill animation for ghost/outline */}
      {(variant === "ghost" || variant === "outline") && (
        <motion.div
          className="absolute inset-0 z-0 bg-gold origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      )}
    </button>
  );
}
