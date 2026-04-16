"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pathname = usePathname();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Outer ring has lerp lag
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has a touch screen
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none)").matches
    ) {
      return; // Do not show custom cursor on touch devices
    }

    const mouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    // Apply cursor interactions to elements dynamically
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for links or buttons
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }

      // Check for images ending up in an explore state
      if (
        target.tagName === "IMG" ||
        target.closest("[data-cursor='explore']")
      ) {
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * {
          cursor: none !important;
        }
      `,
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] flex items-center justify-center rounded-full border border-gold mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHoveringImage ? 80 : isHoveringLink ? 60 : 36,
          height: isHoveringImage ? 80 : isHoveringLink ? 60 : 36,
          backgroundColor: isHoveringImage
            ? "rgba(201,164,76,0.9)"
            : isHoveringLink
              ? "rgba(201,164,76,0.2)"
              : "rgba(0,0,0,0)",
          borderWidth: isHoveringImage ? "0px" : "1px",
        }}
        transition={{
          type: "tween",
          duration: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {isHoveringImage && (
          <span className="font-label text-[10px] tracking-widest text-void font-semibold">
            EXPLORE
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] bg-gold rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: !isHoveringImage && !isHoveringLink ? 6 : 0,
          height: !isHoveringImage && !isHoveringLink ? 6 : 0,
          opacity: !isHoveringImage && !isHoveringLink ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
