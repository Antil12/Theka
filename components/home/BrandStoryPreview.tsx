"use client";

import SectionWrapper from "../ui/SectionWrapper";
import ImageReveal from "../ui/ImageReveal";
import Button from "../ui/Button";
import Link from "next/link";

export default function BrandStoryPreview() {
  return (
    <SectionWrapper className="bg-void relative border-t border-border-dim/30">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Content (60% visually on large) */}
        <div className="flex-1 w-full lg:w-[60%] flex flex-col items-start relative z-10">
          <div className="absolute top-0 left-[-40px] hidden md:block">
            <span className="font-display text-[180px] leading-none text-gold/10">
              &ldquo;
            </span>
          </div>

          <div className="pl-0 md:pl-12 pt-8">
            <h3 className="font-display italic text-[32px] md:text-[42px] lg:text-[52px] text-pure leading-[1.1] mb-12">
              We didn&apos;t start a company.
              <br />
              We began a{" "}
              <span className="text-gold shimmer-text">
                conversation with time
              </span>
              .
            </h3>

            <p className="font-body text-ash text-[16px] md:text-[18px] leading-relaxed max-w-xl mb-12">
              Every drop of THEKA represents decades of relentless pursuit. From
              the high-altitude fields where our grains struggle against the
              elements, to the deep silence of our barrel rooms where time works
              its profound alchemy. This isn&apos;t just alcohol; it&apos;s
              heritage captured in glass.
            </p>

            <Link href="/about">
              <Button variant="outline" size="md">
                Discover Our Roots
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image (40% visually) */}
        <div className="flex-1 w-full lg:w-[40%]">
          <ImageReveal
            src="https://images.unsplash.com/photo-1626332714432-acccedc3691e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Theka Distillery Barrels"
            aspectRatio="3/4"
            className="w-full shadow-2xl shadow-gold/5"
            imageClassName="filter grayscale-[0.2] contrast-[1.1]"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
