"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="section-dark relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-[72px]">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-[44px] leading-[1.1em] sm:text-[54px] md:text-[64px] font-medium gradient-text mb-6 max-w-4xl mx-auto">
            The Future of Muslim Leaders @ Illinois
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-base sm:text-lg leading-[1.6em] max-w-2xl mx-auto">
            Guided by faith, built for impact. A professional organization
            where Muslim students develop careers, build community, and lead
            with purpose.
          </p>
        </ScrollReveal>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001429] to-transparent pointer-events-none" />
    </section>
  );
}
