"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-[36px] sm:text-[44px] md:text-[50px] leading-[1.1em] font-medium gradient-text mb-6 max-w-3xl mx-auto">
            Ready to Build the Future? Let&apos;s Grow Together
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-base sm:text-lg leading-[1.6em] max-w-xl mx-auto mb-10">
            Join a community of driven Muslim students shaping the future of
            business and leadership at Illinois.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center bg-white text-[#001429] font-bold text-[15px] tracking-[-0.01em] px-7 py-3 rounded-md hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Join MBSA
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
