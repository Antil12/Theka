"use client";

import { motion } from "framer-motion";
import { Store } from "../../types";
import Button from "../ui/Button";

interface StoreCardProps {
  store: Store;
  index: number;
}

export default function StoreCard({ store, index }: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-[#111] border border-border-dim/50 p-6 sm:p-8 cursor-pointer flex flex-col justify-between h-full hover:border-border-glow transition-colors"
    >
      {/* Sliding gold left border accent on hover */}
      <div className="absolute left-[-1px] top-6 bottom-6 w-[2px] bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-[0.25,0.46,0.45,0.94]" />

      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-editorial text-[22px] text-pure group-hover:text-gold transition-colors">
            {store.name}
          </h3>
          <span className="bg-gold/10 text-gold font-label text-[9px] uppercase px-2 py-1 tracking-widest border border-gold/20">
            {store.city}
          </span>
        </div>

        <p className="font-body text-[14px] text-ash mb-4">{store.address}</p>

        <div className="flex flex-col gap-2 font-label text-[11px] text-silk/60 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {store.hours}
          </div>
          <div className="flex items-center gap-2 group-hover:text-gold transition-colors">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {store.phone}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-[9px] border-border-dim group-hover:border-gold"
        >
          Get Directions →
        </Button>
      </div>
    </motion.div>
  );
}
