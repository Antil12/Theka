"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import WordReveal from "@/components/ui/WordReveal";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-[120px] pb-24 bg-void">
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Info */}
          <div className="flex-1 lg:max-w-md">
            <h1 className="font-display text-[36px] sm:text-[52px] md:text-[72px] text-pure uppercase tracking-wide leading-none mb-6">
              <WordReveal>CONTACT</WordReveal>
            </h1>
            <p className="font-body text-ash text-[18px] mb-12">
              For general inquiries, corporate gifting, or press, please reach
              out to us using the form or our direct lines below.
            </p>

            <div className="flex flex-col gap-10">
              <div>
                <h3 className="font-label text-gold text-[10px] tracking-widest uppercase mb-3 border-b border-border-dim pb-2">
                  Global Headquarters
                </h3>
                <address className="not-italic font-body text-pure text-[15px] leading-relaxed">
                  Theka Distillers Private Limited.
                  <br />
                  14, The Heritage Estate, Mount Road,
                  <br />
                  Mumbai, Maharashtra 400001,
                  <br />
                  India
                </address>
              </div>

              <div>
                <h3 className="font-label text-gold text-[10px] tracking-widest uppercase mb-3 border-b border-border-dim pb-2">
                  Direct Inquiries
                </h3>
                <div className="flex flex-col gap-2 font-body text-[15px]">
                  <a
                    href="mailto:concierge@thekadistillers.com"
                    className="text-pure hover:text-gold transition-colors"
                  >
                    concierge@thekadistillers.com
                  </a>
                  <a
                    href="tel:+912224000000"
                    className="text-pure hover:text-gold transition-colors"
                  >
                    +91 22 2400 0000
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-label text-gold text-[10px] tracking-widest uppercase mb-3 border-b border-border-dim pb-2">
                  Business Hours
                </h3>
                <p className="font-body text-[15px] text-pure">
                  Monday - Friday
                  <br />
                  <span className="text-ash">09:00 AM - 06:00 PM (IST)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-[1.5]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-obsidian border border-border-dim/50 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

              <h2 className="font-editorial text-[28px] text-pure mb-8">
                Send a Message
              </h2>

              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-[10px] text-ash tracking-widest uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void border border-border-dim focus:border-gold py-3 px-4 text-pure font-body outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-[10px] text-ash tracking-widest uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void border border-border-dim focus:border-gold py-3 px-4 text-pure font-body outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-[10px] text-ash tracking-widest uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-void border border-border-dim focus:border-gold py-3 px-4 text-pure font-body outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-[10px] text-ash tracking-widest uppercase">
                    Topic
                  </label>
                  <select className="w-full bg-void border border-border-dim focus:border-gold py-3 px-4 text-pure font-body outline-none transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Distribution & Sales</option>
                    <option>Press & Media</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label text-[10px] text-ash tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-void border border-border-dim focus:border-gold py-3 px-4 text-pure font-body outline-none transition-colors resize-none"
                  />
                </div>

                <div className="mt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    SEND INQUIRY
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
