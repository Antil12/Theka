import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  innerClassName = "",
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full relative ${noPadding ? "" : "py-[80px] md:py-[160px]"} ${className}`}
    >
      <div
        className={`max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 w-full h-full ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
