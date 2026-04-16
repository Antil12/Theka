"use client";

import { motion } from "framer-motion";
import { Event } from "../../types";
import ImageReveal from "../ui/ImageReveal";
import Button from "../ui/Button";

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const dateObj = new Date(event.date);
  const formattedDate = dateObj
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden bg-carbon ${event.isPast ? "grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" : ""}`}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        {/* Date Badge */}
        <div className="absolute top-4 left-4 z-20 bg-gold text-void font-label text-[10px] py-1.5 px-3 shadow-md">
          {formattedDate}
        </div>

        {event.isPast && (
          <div className="absolute top-4 right-4 z-20 bg-void/80 border border-ash/30 text-ash px-2 py-1 font-label text-[9px] tracking-widest uppercase">
            Past Event
          </div>
        )}

        <ImageReveal
          src={event.image}
          alt={event.title}
          className="w-full h-full"
          imageClassName="group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
        />

        {/* Border glow wrapper */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 pointer-events-none transition-colors duration-500 z-10" />
      </div>

      <div className="p-8 relative border-x border-b border-border-dim/50 border-t-0 flex flex-col justify-between h-[240px]">
        <div>
          <h3 className="font-editorial text-[24px] text-pure mb-2 group-hover:text-gold transition-colors line-clamp-2">
            {event.title}
          </h3>
          <p className="font-label text-[10px] text-ash tracking-widest uppercase mb-4 flex items-center gap-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {event.location}
          </p>
          <p className="font-body text-[14px] text-silk/70 line-clamp-3">
            {event.description}
          </p>
        </div>

        {!event.isPast && (
          <div className="absolute bottom-0 left-0 w-full h-[60px] overflow-hidden bg-carbon flex items-end">
            <motion.div
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }} // desktop approx
              className="w-full h-full group-hover:!translate-y-0 translate-y-full transition-transform duration-500 flex items-center justify-center p-4 bg-void/50 border-t border-gold/20"
            >
              <span className="font-label text-gold text-[11px] uppercase tracking-widest">
                Reserve Your Spot →
              </span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
