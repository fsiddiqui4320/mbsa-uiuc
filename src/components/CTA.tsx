"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="cta" className="section-dark py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-[36px] sm:text-[44px] md:text-[50px] leading-[1.1em] font-medium gradient-text mb-6 max-w-3xl mx-auto">
            Ready to Build the Future? Let&apos;s Grow Together
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-base sm:text-lg leading-[1.6em] max-w-xl mx-auto">
            Join a community of driven Muslim students shaping the future of
            business and leadership at Illinois.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
