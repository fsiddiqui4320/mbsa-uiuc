"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Community",
    description:
      "We foster an uplifting and inclusive network for Muslim students at UIUC.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-[#d5dbe6]"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Opportunity",
    description:
      "We connect members with real-world professional experiences and mentorship.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-[#d5dbe6]"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Impact",
    description:
      "Our programs prepare students to lead with purpose and make a difference.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-[#d5dbe6]"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
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
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-16">
            Building the Next Generation of Muslim Leaders
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={0.15 + i * 0.1}>
              <motion.div
                className="rounded-[10px] border border-[rgba(255,255,255,0.07)] p-8 h-full"
                whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
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
