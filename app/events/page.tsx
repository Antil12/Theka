"use client";

import { events } from "@/lib/events";
import EventCard from "@/components/events/EventCard";
import PromoBanner from "@/components/events/PromoBanner";
import WordReveal from "@/components/ui/WordReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => !e.isPast);
  const pastEvents = events.filter((e) => e.isPast);

  return (
    <div className="w-full flex flex-col pt-[120px] pb-24 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-display text-[36px] sm:text-[52px] md:text-[72px] text-pure uppercase tracking-wide leading-none mb-6">
          <WordReveal>THEKA EVENTS</WordReveal>
        </h1>
        <p className="font-body text-ash text-[18px] max-w-xl mx-auto">
          Exclusive experiences, masterclasses, and curated tastings reserved
          for the ambitious.
        </p>
      </div>

      <PromoBanner />

      <SectionWrapper className="!py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-[32px] text-pure uppercase relative">
            Upcoming <span className="text-gold italic">Experiences</span>
          </h2>
          <div className="h-[1px] flex-1 bg-border-dim ml-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-void border-y border-border-dim/30 !py-24">
        <div className="flex items-center justify-between mb-12 text-center md:text-left flex-col md:flex-row">
          <h2 className="font-display text-[32px] text-ash uppercase relative mb-4 md:mb-0">
            <span className="italic">A Night to Remember</span> (Past Events)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-70">
          {pastEvents.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
