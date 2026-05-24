"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const placeholderLogos = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
  "Partner 8",
  "Partner 9",
  "Partner 10",
  "Partner 11",
  "Partner 12",
];

export default function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.4;

    const animate = () => {
      scrollPos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }
      track.style.transform = `translateX(${-scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 lg:py-20 px-0 overflow-hidden">
      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-16">
        <hr className="section-divider" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-10">
        <ScrollReveal>
          <h3 className="section-label text-[#d5dbe6] text-center mb-6">
            Our Network
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white text-center mb-4">
            Backed by Industry Leaders
          </h2>
        </ScrollReveal>
      </div>

      {/* Carousel with fade masks */}
      <div className="relative">
        <div
          className="carousel-mask flex py-6"
        >
          <div
            ref={trackRef}
            className="flex items-center gap-14 sm:gap-20 lg:gap-28 shrink-0"
            style={{ willChange: "transform" }}
          >
            {/* Render twice for seamless loop */}
            {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="h-10 sm:h-12 w-36 sm:w-44 rounded-md border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center shrink-0"
              >
                <span className="text-[#64748b] text-xs font-medium tracking-wider uppercase">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
