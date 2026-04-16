"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    {
      year: 2008,
      title: "The Foundation",
      desc: "Founded in a small Rajasthan village with two copper stills and a dream.",
      align: "left",
    },
    {
      year: 2011,
      title: "The First Release",
      desc: "First national distribution of our signature 12-year expression.",
      align: "right",
    },
    {
      year: 2015,
      title: "Global Recognition",
      desc: "Awarded Gold at the Asia Spirits Awards, putting us on the world map.",
      align: "left",
    },
    {
      year: 2019,
      title: "A Milestone",
      desc: "Reached 1,00,000 bottles sold globally across our premium range.",
      align: "right",
    },
    {
      year: 2023,
      title: "Expanding Horizons",
      desc: "International export begins to Europe and North America.",
      align: "left",
    },
  ];

  return (
    <section ref={containerRef} className="w-full relative py-24 bg-void">
      <div className="max-w-[1000px] mx-auto px-6 relative">
        {/* Animated Vertical Spine */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-dim -translate-x-1/2" />
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-[2px] bg-gold -translate-x-1/2 origin-top"
          style={{ height: lineHeight }}
        />

        <div className="flex flex-col gap-24 relative z-10 pt-16 pb-16">
          {milestones.map((item, i) => {
            const isLeft = item.align === "left";
            return (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* Milestone Dot on the Spine */}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-[50%] flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{
                      once: true,
                      amount: 1,
                      margin: "-40% 0px -40% 0px",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-4 h-4 bg-void border-2 border-gold rounded-full z-20"
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-[42%] pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 text-left"}`}
                >
                  <div className="font-data text-[48px] sm:text-[64px] text-gold/20 leading-none mb-2">
                    {item.year}
                  </div>
                  <h3 className="font-editorial text-[22px] text-pure mb-3 relative inline-block">
                    {item.title}
                    <div
                      className={`absolute top-[40%] w-6 h-[1px] bg-gold ${isLeft ? "right-[-24px] md:right-auto md:left-[105%]" : "left-[-48px] md:left-[-32px]"} hidden md:block opacity-30`}
                    />
                  </h3>
                  <p className="font-body text-[15px] text-ash">{item.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
