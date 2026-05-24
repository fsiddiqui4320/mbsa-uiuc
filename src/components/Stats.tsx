"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "Members", value: 0 },
  { label: "Programs", value: 1 },
  { label: "Events", value: 0 },
];

function AnimatedStat({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}+
    </span>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Divider */}
        <div className="mb-24">
          <hr className="section-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.15}>
              <motion.div className="text-center">
                {/* Number — scaled 4.5x to match UMich reference */}
                <div className="text-[16px] leading-[1em] font-normal text-white mb-0"
                  style={{ transform: "scale(4.5)", transformOrigin: "center center" }}
                >
                  <AnimatedStat target={stat.value} inView={inView} />
                </div>
                {/* Spacer for the scaled element */}
                <div className="h-[72px]" />
                {/* Label — Instrument Serif italic */}
                <p className="stats-label text-white">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
