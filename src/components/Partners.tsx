"use client";

import ScrollReveal from "./ScrollReveal";

export default function Partners() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-12 border-t border-[rgba(255,255,255,0.07)]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="font-serif italic text-[22px] leading-[1em] text-[#d5dbe6] mb-10 text-center">
            Our Partners
          </h3>
        </ScrollReveal>

        {/* Placeholder partner logos */}
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-40">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-32 rounded bg-white/10 flex items-center justify-center"
            >
              <span className="text-[#d5dbe6] text-xs font-medium tracking-wider uppercase">
                Partner {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
