import TimelineSection from "@/components/about/TimelineSection";
import MissionVision from "@/components/about/MissionVision";
import FoundersSection from "@/components/about/FoundersSection";
import WordReveal from "@/components/ui/WordReveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-void pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1761095596767-0ea94add8e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxjb2hvbCUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D"
            alt="Theka Distillery Background"
            fill
            priority
            className="object-cover opacity-40 filter sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center mt-[80px]">
          <h1 className="font-display text-[36px] sm:text-[52px] md:text-[80px] text-pure uppercase tracking-wide leading-none mb-6">
            <WordReveal>OUR STORY</WordReveal>
          </h1>
          <p className="font-body text-ash text-[18px] md:text-[22px] italic max-w-lg mx-auto leading-relaxed">
            Born from tradition. Aged in ambition.
          </p>
        </div>
      </div>

      <TimelineSection />
      <MissionVision />
      <FoundersSection />
    </div>
  );
}
