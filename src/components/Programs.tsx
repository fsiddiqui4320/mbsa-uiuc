"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="section-label text-[#d5dbe6] mb-4">Programs</h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-12 max-w-2xl">
            What We Offer
          </h2>
        </ScrollReveal>

        {/* Mosaic Program Card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            className="rounded-[10px] border border-[rgba(255,255,255,0.07)] bg-[#00132A] p-8 lg:p-12"
            whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#d5dbe6]"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <div>
                <h4 className="text-white text-xl sm:text-2xl font-medium mb-3">
                  Mosaic
                </h4>
                <p className="text-[#d5dbe6] text-[16px] leading-[1.6em] mb-6 max-w-xl">
                  Mosaic is MBSA&apos;s consulting program designed to give
                  students real-world experience, mentorship, and practical
                  skills. Students work on real projects with real clients,
                  building a portfolio of meaningful work while developing
                  professional competencies that set them apart.
                </p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-bold text-[15px] tracking-[-0.01em] hover:opacity-70 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
