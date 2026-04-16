"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Store Locator", href: "/store-locator" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Scrolled state for background styling
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on fast scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-500 flex items-center h-[80px] px-6 md:px-12 ${
          isScrolled && !isMobileMenuOpen
            ? "bg-[rgba(8,8,8,0.85)] backdrop-blur-[20px] saturate-180 border-b border-gold/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-100 group">
            <div className="w-[3px] h-[20px] bg-gold mr-4" />
            <span className="font-display text-[22px] tracking-[0.55em] text-gold transition-all duration-400 group-hover:tracking-[0.65em]">
              THEKA
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 translate-x-[20px]">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 + 0.5 }}
                >
                  <Link href={link.href} className="relative group p-2">
                    <span
                      className={`font-label text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? "text-pure" : "text-pure"} hover:text-gold`}
                    >
                      {link.name}
                    </span>
                    {/* Active/Hover Underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-[1px] bg-gold transition-transform duration-300 origin-left 
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      style={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side Options */}
          <div className="flex items-center gap-6">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[101]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-[1.5px] bg-gold block mb-[4px]"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-[1.5px] bg-gold block mb-[4px]"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-[1.5px] bg-gold block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[90] bg-[rgba(8,8,8,0.97)] backdrop-blur-md flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 text-left">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-[36px] sm:text-[48px] md:text-[56px] text-pure hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex gap-6"
              >
                <div className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center text-gold">
                  In
                </div>
                <div className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center text-gold">
                  Tw
                </div>
                <div className="w-10 h-10 rounded-full border border-border-dim flex items-center justify-center text-gold">
                  Yt
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
