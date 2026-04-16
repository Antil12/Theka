"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <section className="w-full relative px-6 md:px-12 lg:px-24 py-[120px] bg-[#120A0A] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background styling for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2A0F0F_0%,_#120A0A_70%)] opacity-80 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='transparent'/%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="font-display text-[32px] sm:text-[42px] md:text-[56px] text-pure tracking-[0.02em] mb-4">
          JOIN THE INNER CIRCLE
        </h2>

        <p className="font-body text-[16px] md:text-[18px] text-ash/80 mb-10 font-[300]">
          Exclusive offers, early access to limited editions, and curated
          experiences delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 w-full"
        >
          <div className="relative flex-1 group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`w-full bg-void border border-border-dim rounded-none px-6 py-4 text-pure font-body text-[15px] focus:outline-none transition-all duration-300 placeholder:text-ash/50 focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,164,76,0.2)] ${status === "success" ? "opacity-50 pointer-events-none" : ""}`}
              required
              disabled={status !== "idle"}
            />
            {/* Floating Label / Focus Glow Effect is handled by Tailwind classes above */}
          </div>

          <div className="w-full sm:w-auto h-[54px] sm:h-auto">
            <Button
              type="submit"
              className="w-full h-full whitespace-nowrap"
              disabled={status !== "idle"}
            >
              {status === "idle" && "SUBSCRIBE"}
              {status === "submitting" && "JOINING..."}
              {status === "success" && "✓ WELCOME TO THEKA"}
            </Button>
          </div>
        </form>

        <p className="font-label text-[10px] text-ash/50 mt-6 tracking-widest uppercase">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
