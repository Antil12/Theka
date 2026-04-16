"use client";

import CountUp from "../ui/CountUp";

export default function StatsBanner() {
  const stats = [
    { value: 100, suffix: "K+", label: "Bottles Sold" },
    { value: 15, suffix: "+", label: "Years of Craft" },
    { value: 8, suffix: "", label: "Global Awards" },
    { value: 50, suffix: "+", label: "Varieties" },
  ];

  return (
    <div className="w-full bg-[#111111] border-y border-border-dim py-[80px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center relative group"
            >
              {/* Optional divider lines between items (desktop) */}
              {i !== 0 && (
                <div className="hidden lg:block absolute left-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-border-glow to-transparent opacity-30" />
              )}

              <div className="font-data text-[36px] sm:text-[48px] md:text-[64px] text-gold mb-2 leading-none flex items-center group-hover:scale-110 transition-transform duration-500 will-change-transform">
                <CountUp to={stat.value} duration={2} />
                <span className="text-[24px] sm:text-[32px] md:text-[48px] ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="font-label text-[10px] md:text-[12px] uppercase tracking-widest text-pure">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
