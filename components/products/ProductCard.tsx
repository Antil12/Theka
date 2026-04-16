"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const [showRipple, setShowRipple] = useState(false);

  // 3D Parallax Tilt
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const imgY = useTransform(y, [-100, 100], [-10, 10]);
  const imgX = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize to -100 to 100
    x.set((mouseX / width) * 200 - 100);
    y.set((mouseY / height) * 200 - 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setClickPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 800);
  };

  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
    >
      <Link
        href={`/products/${product.id}`}
        className="block w-full flex-1 flex flex-col"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardClick}
          className="group relative w-full flex-1 flex flex-col bg-carbon border border-border-dim rounded-sm cursor-none transition-colors duration-300 hover:border-border-glow hover:z-10"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            className="w-full flex-1 flex flex-col preserve-3d"
            style={{ rotateX, rotateY }}
          >
            {/* Top gold reflection when tilted */}
            <motion.div
              className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none rounded-t-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? (x.get() > 0 ? 0.2 : 0.0) : 0 }}
            />

            {/* Image Area */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0A0A0A] p-6 flex flex-col justify-between shrink-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50 z-0" />

              <div className="flex justify-between items-start z-10 w-full">
                {product.badge ? <Badge>{product.badge}</Badge> : <div />}
                {/* Wishlist Heart Icon (Mock) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </motion.div>
              </div>

              {/* The Bottle Image (Parallax) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0 p-8"
                style={{ x: imgX, y: imgY }}
              >
                <div className="relative w-full h-[120%] transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index <= 2}
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] filter transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </motion.div>

              {/* Sound indicator effect (visual) */}
              {showRipple && (
                <div
                  className="absolute pointer-events-none z-30"
                  style={{
                    left: clickPos.x,
                    top: clickPos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="ripple-ring border-gold animate-ripple" />
                  <div className="ripple-ring border-gold animate-ripple animation-delay-150" />
                  <div className="ripple-ring border-gold animate-ripple animation-delay-300" />
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 relative bg-carbon z-20 border-t border-border-dim/50 flex flex-col flex-1 pb-14">
              <h3 className="font-editorial text-[20px] text-pure mb-2 group-hover:text-gold transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="font-body text-[13px] text-ash line-clamp-2 mb-4 h-10">
                {product.shortDescription}
              </p>

              <div className="flex justify-between items-end mt-auto">
                <div>
                  <span className="font-data text-gold tracking-widest text-[14px]">
                    ABV{" "}
                    <span className="text-white text-[16px]">
                      {product.alcoholPercentage}%
                    </span>
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-data text-[28px] text-white">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Reveal Button */}
              <div className="absolute inset-x-0 bottom-0 h-[48px] overflow-hidden rounded-b-sm">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full h-full"
                >
                  <div className="w-full h-full bg-gold text-void font-label text-[11px] uppercase tracking-widest flex items-center justify-center font-bold">
                    View Details
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
