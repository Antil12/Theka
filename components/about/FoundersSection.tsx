"use client";

import ImageReveal from "../ui/ImageReveal";
import { motion } from "framer-motion";

export default function FoundersSection() {
  const founders = [
    {
      name: "Priyansh",
      title: "Master Distiller",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      name: "Harshit",
      title: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80",
    },
    {
      name: "Elena Rostova",
      title: "Head of Maturation",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-void py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <span className="font-label text-gold text-[10px] tracking-widest uppercase mb-4 block">
            The Architects
          </span>
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[56px] text-pure">
            MEET THE MASTERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {founders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center text-center group cursor-none"
            >
              <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden mb-8 border-4 border-obsidian shadow-[0_0_0_1px_rgba(201,164,76,0.2)] group-hover:shadow-[0_0_0_2px_rgba(201,164,76,0.6)] transition-all duration-500 relative">
                <ImageReveal
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full rounded-full"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-110 filter saturate-100 group-hover:saturate-0"
                />
              </div>

              <motion.div className="overflow-hidden">
                <motion.h3 className="font-editorial text-[24px] text-pure mb-2 transition-colors duration-300 group-hover:text-gold">
                  {person.name}
                </motion.h3>
                <div className="w-12 h-[1px] bg-gold mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                <motion.p className="font-label text-ash text-[12px] uppercase tracking-widest">
                  {person.title}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
