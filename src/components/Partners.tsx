"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const placeholderLogos = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
  { name: "Partner 7" },
  { name: "Partner 8" },
  { name: "Partner 9" },
  { name: "Partner 10" },
  { name: "Partner 11" },
  { name: "Partner 12" },
];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (track.scrollWidth && scrollPos >= track.scrollWidth / 2) {
        scrollPos = 0;
      }
      track.style.transform = `translateX(${-scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="section-light py-16 lg:py-20 px-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-10">
        <ScrollReveal>
          <h3 className="font-serif italic text-[22px] leading-[1em] text-[#4a5568] text-center">
            Our Partners
          </h3>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none" 
          style={{
            background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
          }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #ffffff 0%, transparent 100%)",
          }}
        />

        {/* Scrolling track */}
        <div className="flex py-6" style={{ width: "max-content" }}>
          <div
            ref={trackRef}
            className="flex items-center gap-16 sm:gap-20 lg:gap-28"
            style={{ willChange: "transform" }}
          >
            {/* Render twice for seamless loop */}
            {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="h-10 sm:h-12 w-36 sm:w-44 rounded bg-[#e2e8f0] flex items-center justify-center shrink-0"
              >
                <span className="text-[#64748b] text-xs font-medium tracking-wider uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
