"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-36 px-6 lg:px-12 overflow-hidden">
      {/* Background shape — matches UMich reference */}
      <div
        className="cta-bg-shape absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "50%",
          left: "50%",
          marginLeft: "-300px",
          marginTop: "-300px",
        }}
      />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-[36px] sm:text-[44px] md:text-[50px] leading-[1.1em] font-medium gradient-text mb-12 max-w-3xl mx-auto">
            Ready to Build the Future? Let&apos;s{" "}
            <span className="font-serif italic font-normal text-[50px]">Grow Together</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <a href="#" className="btn-primary">
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

      {/* CTA border gradient — matches reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] cta-border" />
    </section>
  );
}
