"use client";

import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-[72px] overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(213, 219, 230, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] w-full mx-auto text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-[42px] leading-[1.05em] sm:text-[55px] font-medium gradient-text mb-6 max-w-4xl mx-auto" style={{ letterSpacing: "-2.6px" }}>
            The Future of Muslim Leaders @ Illinois
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-[23px] leading-[1.5em] max-w-xl mx-auto mb-10" style={{ letterSpacing: "-2px" }}>
            A space where Muslim students grow together through community,
            opportunity, and impact.
          </p>
        </ScrollReveal>


      </div>

      {/* Bottom fade — subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#001429] to-transparent pointer-events-none" />
    </section>
  );
}
