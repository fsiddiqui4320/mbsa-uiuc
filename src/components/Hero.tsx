"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-[72px]">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        <ScrollReveal>
          <h1 className="text-[40px] leading-[1.1em] sm:text-[50px] md:text-[56px] font-medium gradient-text mb-6 max-w-4xl mx-auto">
            The Future of Muslim Leaders @ Illinois
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-base sm:text-lg leading-[1.6em] max-w-2xl mx-auto mb-10">
            A space where Muslim students grow together through community,
            opportunity, and impact.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a
            href="#cta"
            className="inline-flex items-center justify-center bg-white text-[#001429] font-bold text-[15px] tracking-[-0.01em] px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Join MBSA
          </motion.a>
        </ScrollReveal>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001429] to-transparent pointer-events-none" />
    </section>
  );
}
