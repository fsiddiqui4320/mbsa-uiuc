"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Community",
    description:
      "We foster an uplifting and inclusive network for Muslim students at UIUC, building genuine relationships that last beyond graduation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Opportunity",
    description:
      "We connect members with real-world professional experiences, mentorship, and career resources that prepare them for success in business and beyond.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Impact",
    description:
      "Our programs prepare students to lead with purpose, grounded in Islamic values of ethical leadership, integrity, and service to others.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 px-6 lg:px-12">
      {/* Divider */}
      <div className="max-w-[1200px] mx-auto mb-24">
        <hr className="section-divider" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="section-label text-[#d5dbe6] mb-4">Our Mission</h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-16 max-w-3xl">
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
                <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-5 text-[#d5dbe6]">
                  {pillar.icon}
                </div>
                <h4 className="text-white text-xl font-medium mb-3">
                  {pillar.title}
                </h4>
                <p className="text-[#d5dbe6] text-[16px] leading-[1.6em]">
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
