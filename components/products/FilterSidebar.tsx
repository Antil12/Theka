"use client";

import { motion, AnimatePresence } from "framer-motion";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CATEGORIES = ["All", "Whiskey", "Vodka", "Wine", "Rum", "Gin"];

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
}: FilterSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-[120px] self-start mb-12 lg:mb-0"
    >
      <div className="bg-[#111] border border-border-dim/50 p-8 rounded-sm">
        {/* Category Filter */}
        <div className="mb-10">
          <h3 className="font-label text-[11px] uppercase tracking-widest text-ash mb-6">
            Category
          </h3>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat.toLowerCase())}
                  className="relative flex items-center justify-between group overflow-hidden w-full px-4 py-3 rounded-sm border border-gold/10"
                >
                  <span
                    className={`relative z-10 font-label text-[12px] uppercase tracking-wider transition-colors duration-300 ${isSelected ? "text-void font-semibold" : "text-pure group-hover:text-gold"}`}
                  >
                    {cat}
                  </span>

                  {/* Sliding Background */}
                  <div
                    className={`absolute inset-0 bg-gold transition-transform duration-500 origin-left ease-[0.25,0.46,0.45,0.94] ${isSelected ? "scale-x-100" : "scale-x-0 group-hover:bg-[rgba(201,164,76,0.1)] group-hover:scale-x-100"}`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSelectedCategory("all");
          }}
          className="font-label text-[10px] text-ash tracking-widest uppercase hover:text-white transition-colors underline decoration-gold/30 underline-offset-4 w-full text-center mt-4"
        >
          Clear Filters
        </button>
      </div>
    </motion.aside>
  );
}
