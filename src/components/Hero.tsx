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
          <h1 className="text-[42px] leading-[1.1em] sm:text-[50px] font-medium gradient-text mb-6 max-w-4xl mx-auto">
            The Future of Muslim Leaders @ Illinois
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#d5dbe6] text-[16px] leading-[1.5em] max-w-xl mx-auto mb-10">
            A space where Muslim students grow together through community,
            opportunity, and impact.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <a href="#cta" className="btn-primary">
            Join MBSA
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M17.781 7.496L11.031 13.796C10.738 14.069 10.262 14.069 9.969 13.796C9.676 13.522 9.676 13.079 9.969 12.805L15.44 7.7H0.75C0.336 7.7 0 7.387 0 7C0 6.614 0.336 6.3 0.75 6.3H15.44L9.969 1.196C9.676 0.922 9.676 0.479 9.969 0.205C10.262 -0.068 10.738 -0.068 11.031 0.205L17.781 6.505C17.921 6.636 18.001 6.815 18.001 7C18.001 7.186 17.921 7.364 17.781 7.496Z"
                fill="#001429"
              />
            </svg>
          </a>
        </ScrollReveal>
      </div>

      {/* Bottom fade — subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#001429] to-transparent pointer-events-none" />
    </section>
  );
}
