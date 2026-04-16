"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import FrozenRoute from "./FrozenRoute";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>

        {/* Transition Overlay Sweep Down -> Sweep Up */}
        <motion.div
          className="fixed inset-0 z-[999] bg-void flex items-center justify-center pointer-events-none"
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          exit={{ top: "0%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo flashes during transition */}
          <motion.div
            className="font-display text-gold text-2xl sm:text-4xl tracking-[0.3em] sm:tracking-[0.55em]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              times: [0, 0.3, 0.7, 1],
            }}
          >
            T H E K A
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
