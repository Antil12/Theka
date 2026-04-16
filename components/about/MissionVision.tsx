"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  const cards = [
    {
      numeral: "I",
      title: "Our Mission",
      desc: "To craft spirits that compel the world to slow down, if only for a single sip. We blend relentless innovation with unwavering respect for tradition.",
    },
    {
      numeral: "II",
      title: "Our Vision",
      desc: "To be the definitive luxury spirit of generations to come. Not by chasing trends, but by setting a standard of quality that demands a conversation with time.",
    },
  ];

  return (
    <section className="w-full bg-obsidian py-32 border-y border-border-dim/50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative bg-[#0A0A0A] border border-border-dim/50 p-12 md:p-16 overflow-hidden hover:border-gold/30 transition-colors duration-500 cursor-none"
            >
              {/* Internal glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,76,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="font-display text-[60px] sm:text-[80px] md:text-[120px] leading-none text-gold/10 absolute top-8 right-8 pointer-events-none group-hover:text-gold/20 transition-colors duration-700">
                {card.numeral}
              </div>

              <h2 className="font-editorial text-[32px] text-gold mb-6 relative z-10">
                {card.title}
              </h2>
              <p className="font-body text-[16px] md:text-[18px] text-silk/80 leading-relaxed relative z-10 max-w-[85%]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
