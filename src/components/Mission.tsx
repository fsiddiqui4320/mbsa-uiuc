"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Professional",
    description:
      "We provide career-focused resources, skill development, and access to opportunities that prepare members for success in business and related fields.",
  },
  {
    title: "Community",
    description:
      "We create an engaging community where members build genuine relationships, bond through shared experiences, and support one another beyond academics and careers.",
  },
  {
    title: "Faith",
    description:
      "We ground our organization in Islamic values, emphasizing ethical leadership, integrity, and staying true to one's identity while pursuing professional success.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="section-dark py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="font-serif italic text-[22px] leading-[1em] text-[#d5dbe6] mb-4">
            Our Mission
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-6">
            Building the Next Generation of Muslim Leaders
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-base sm:text-lg leading-[1.7em] max-w-3xl mb-16">
            We are a professional organization built on a foundation of Islamic
            principles. We provide Muslim students with professional
            development, resources, and access while fostering a strong sense of
            community. MBSA aims to develop purpose-driven leaders, increase
            representation in business, and create a welcoming space where
            students can grow professionally and remain true to their faith and
            values.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.2 + i * 0.1}>
              <motion.div
                className="rounded-[10px] border border-[rgba(255,255,255,0.07)] p-8 h-full"
                whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-white text-xl font-medium mb-3">
                  {pillar.title}
                </h4>
                <p className="text-[#d5dbe6] text-base leading-[1.6em]">
                  {pillar.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
