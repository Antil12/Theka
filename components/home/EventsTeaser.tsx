"use client";

import { events } from "../../lib/events";
import SectionWrapper from "../ui/SectionWrapper";
import WordReveal from "../ui/WordReveal";
import ImageReveal from "../ui/ImageReveal";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EventsTeaser() {
  const upcomingEvents = events.filter((e) => !e.isPast).slice(0, 3);

  return (
    <SectionWrapper
      id="events"
      className="bg-obsidian border-y border-border-dim/30"
    >
      <div className="flex flex-col text-center items-center justify-center mb-20 relative">
        <div className="absolute top-[-40px] w-[1px] h-16 bg-gradient-to-b from-transparent to-gold opacity-50" />

        <span className="font-label text-gold text-[10px] tracking-[0.3em] uppercase mb-6 mt-8 block">
          Exclusive Access
        </span>
        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[56px] text-pure uppercase leading-none mb-6">
          <WordReveal>CURATED EXPERIENCES</WordReveal>
        </h2>
        <p className="font-body text-ash text-[16px] max-w-xl">
          Immerse yourself in the world of THEKA. Join us for private tastings,
          masterclasses, and unreleased vintage reveals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="group relative bg-[#111111] overflow-hidden"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* Date Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gold text-void font-label text-[10px] py-2 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                {new Date(event.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </div>

              <ImageReveal
                src={event.image}
                alt={event.title}
                className="w-full h-full"
                imageClassName="group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out"
              />

              {/* Inner glow on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 z-10 pointer-events-none" />
            </div>

            {/* Content Box */}
            <div className="p-8 relative min-h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-[22px] text-pure mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="font-label text-ash text-[10px] tracking-widest uppercase mb-4 flex items-center gap-2">
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
              </div>

              {/* Slide up button */}
              <div className="overflow-hidden h-[36px] mt-4">
                <motion.div
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }} // Desktop only approx
                  animate={{ y: "100%" }}
                  className="w-full h-full group-hover:!translate-y-0 transition-transform duration-500 ease-[0.25,0.46,0.45,0.94]"
                >
                  <Link
                    href="/events"
                    className="inline-flex items-center text-gold font-label text-[11px] uppercase tracking-widest gap-2 pb-1 border-b border-gold cursor-pointer"
                  >
                    Learn More{" "}
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                </motion.div>

                {/* Default visible state for mobile / before hover */}
                <div className="absolute bottom-8 text-ash group-hover:opacity-0 transition-opacity duration-300 pointer-events-none w-full pr-16 line-clamp-2">
                  <p className="font-body text-[13px] italic">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/events">
          <Button variant="outline">View All Events</Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
