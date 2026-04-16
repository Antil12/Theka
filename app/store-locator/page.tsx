"use client";

import { useState, useEffect } from "react";
import { stores as initialStores } from "@/lib/stores";
import StoreCard from "@/components/store/StoreCard";
import MapPlaceholder from "@/components/store/MapPlaceholder";
import WordReveal from "@/components/ui/WordReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function StoreLocatorPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStores, setFilteredStores] = useState(initialStores);
  const [placeholderCity, setPlaceholderCity] = useState("New York");

  // Rotating placeholder
  useEffect(() => {
    const cities = [
      "New York",
      "London",
      "Dubai",
      "Mumbai",
      "Tokyo",
      "Paris",
      "Singapore",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % cities.length;
      setPlaceholderCity(cities[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Soft filter execution
  useEffect(() => {
    if (!searchTerm) {
      setFilteredStores(initialStores);
      return;
    }
    const term = searchTerm.toLowerCase();
    setFilteredStores(
      initialStores.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.city.toLowerCase().includes(term) ||
          s.address.toLowerCase().includes(term),
      ),
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen pt-[120px] pb-24 bg-obsidian">
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="font-display text-[36px] sm:text-[52px] md:text-[72px] text-pure uppercase tracking-wide leading-none mb-6">
            <WordReveal>FIND A BOUTIQUE</WordReveal>
          </h1>
          <p className="font-body text-ash text-[18px] max-w-xl mx-auto">
            Experience THEKA in person at our flagship locations and exclusive
            global partners.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto mb-16 relative group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gold group-focus-within:text-gold-bright transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search by city, e.g. ${placeholderCity}...`}
            className="w-full bg-carbon border border-border-dim focus:border-gold py-5 pl-16 pr-6 rounded-none font-body text-pure text-[16px] placeholder:text-ash/50 outline-none transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus:shadow-[0_0_0_3px_rgba(201,164,76,0.15)]"
          />
        </div>

        <MapPlaceholder />

        <div className="mt-20">
          <div className="flex justify-between items-end mb-8 border-b border-border-dim/30 pb-4">
            <h2 className="font-editorial text-[28px] text-pure">
              Our Locations
            </h2>
            <span className="font-label text-ash text-[10px] tracking-widest uppercase">
              {filteredStores.length} Boutiques
            </span>
          </div>

          {filteredStores.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-ash text-[18px]">
                No locations found matching &quot;{searchTerm}&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStores.map((store, i) => (
                <StoreCard key={store.id} store={store} index={i} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
