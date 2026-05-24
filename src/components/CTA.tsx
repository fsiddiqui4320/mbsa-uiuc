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


      </div>

      {/* CTA border gradient — matches reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] cta-border" />
    </section>
  );
}
