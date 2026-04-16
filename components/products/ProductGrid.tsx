"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../lib/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string;
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filteredProducts = products.filter((p) => {
    return (
      selectedCategory === "all" ||
      p.type.toLowerCase() === selectedCategory.toLowerCase()
    );
  });

  return (
    <div className="flex-1 w-full">
      <div className="flex justify-between items-center mb-8 border-b border-border-dim/50 pb-4">
        <span className="font-label text-ash text-[11px] tracking-widest uppercase">
          Showing{" "}
          <span className="text-gold font-bold">{filteredProducts.length}</span>{" "}
          Results
        </span>
        <select className="bg-transparent text-pure font-label text-[11px] tracking-widest uppercase outline-none cursor-pointer border-none appearance-none pr-4">
          <option value="featured">Sort by: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <h3 className="font-editorial text-2xl text-ash mb-4">
            No products found
          </h3>
          <p className="font-body text-ash/60">
            Try adjusting your filters to discover more.
          </p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                key={product.id}
                layoutId={`card-${product.id}`}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
