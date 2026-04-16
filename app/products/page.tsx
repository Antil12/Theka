"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import WordReveal from "@/components/ui/WordReveal";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="flex flex-col w-full min-h-screen pb-24">
      {/* Header Banner */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-void pointer-events-none"
          style={{ y }}
        >
          <Image
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1920&q=85"
            alt="Theka Bar"
            fill
            priority
            className="object-cover opacity-30 filter sepia-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center mt-[80px]">
          <h1 className="font-display text-[36px] sm:text-[42px] md:text-[72px] text-pure uppercase tracking-wide leading-none mb-4">
            <WordReveal>OUR COLLECTION</WordReveal>
          </h1>
          <div className="font-label text-[10px] text-ash tracking-widest uppercase">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="mx-3">/</span>
            <span className="text-gold">Products</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <SectionWrapper noPadding className="mt-[-40px] z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 items-start">
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductGrid selectedCategory={selectedCategory} />
        </div>
      </SectionWrapper>
    </div>
  );
}
