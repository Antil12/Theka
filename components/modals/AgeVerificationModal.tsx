"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isVerified = localStorage.getItem("theka_verified");

    if (!isVerified) {
      // Small delay before showing modal as requested
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("theka_verified", "true");
    setShowModal(false);
  };

  const handleReject = () => {
    // Flash red then redirect
    const overlay = document.getElementById("age-modal-overlay");
    if (overlay) {
      overlay.style.backgroundColor = "rgba(123, 30, 30, 0.4)"; // crimson flash
    }
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 500);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          id="age-modal-overlay"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 transition-colors duration-300"
          initial={{
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(8,8,8,0)",
          }}
          animate={{
            backdropFilter: "blur(24px)",
            backgroundColor: "rgba(8,8,8,0.85)",
          }}
          exit={{
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(8,8,8,0)",
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Parallax Background Whiskey Glass Elements can go here if needed, keeping simple for now */}
          <motion.div
            className="w-full max-w-[560px] bg-obsidian border border-border-glow p-10 md:p-14 text-center shadow-[inset_0_0_80px_rgba(201,164,76,0.05)] relative overflow-hidden"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold opacity-50 m-4" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold opacity-50 m-4" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold opacity-50 m-4" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold opacity-50 m-4" />

            <h2 className="font-display text-[40px] sm:text-[48px] text-gold tracking-[0.3em] sm:tracking-[0.5em] mb-6">
              THEKA
            </h2>

            <div className="w-[80px] h-[1px] bg-gold mx-auto mb-10 opacity-70" />

            <p className="font-editorial text-[24px] text-pure mb-4">
              This content is intended for adults of legal drinking age.
            </p>

            <p className="font-body text-ash text-[15px] mb-12 max-w-[80%] mx-auto">
              By entering, you confirm you are 21 years or older.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto mb-8">
              <Button size="lg" className="w-full" onClick={handleVerify}>
                I AM OF LEGAL AGE
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full"
                onClick={handleReject}
              >
                I AM UNDERAGE
              </Button>
            </div>

            <p className="font-label text-[10px] text-ash tracking-widest uppercase">
              THEKA supports responsible drinking.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
