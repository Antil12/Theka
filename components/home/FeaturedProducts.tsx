"use client";

import { products } from "../../lib/products";
import ProductCard from "../products/ProductCard";
import SectionWrapper from "../ui/SectionWrapper";
import WordReveal from "../ui/WordReveal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <SectionWrapper
      id="featured"
      className="bg-obsidian border-t border-border-dim/30"
    >
      <div className="flex flex-col items-center md:items-end md:flex-row justify-between mb-16 gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[56px] text-pure uppercase leading-none mb-4">
            <WordReveal>OUR FINEST</WordReveal>
          </h2>
          <p className="font-body text-ash text-[16px] italic">
            Handpicked. Aged to perfection.
          </p>
        </div>

        <Link
          href="/products"
          className="group flex items-center justify-center md:justify-end gap-3 mt-4 md:mt-0"
        >
          <span className="font-label text-gold text-[11px] tracking-widest uppercase group-hover:text-gold-bright transition-colors">
            View All Collection
          </span>
          <motion.div
            className="w-8 h-[1px] bg-gold"
            initial={{ width: 32 }}
            whileHover={{ width: 48, x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {featured.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
