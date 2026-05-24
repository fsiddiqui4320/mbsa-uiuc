"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const boardMembers = [
  { name: "Suhayb Mahamed", role: "President" },
  { name: "Haneen Aboubakr", role: "External Vice President" },
  { name: "Adam Qureshi", role: "Internal Vice President" },
];

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl font-medium shrink-0 mb-4">
      {initials}
    </div>
  );
}

export default function Board() {
  return (
    <section id="board" className="section-dark py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="font-serif italic text-[22px] leading-[1em] text-[#d5dbe6] mb-4 text-center">
            Our Board
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-16 text-center">
            Meet the Team
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {boardMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={0.15 + i * 0.1}>
              <motion.div
                className="rounded-[10px] border border-[rgba(255,255,255,0.07)] p-8 text-center"
                whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center">
                  <AvatarPlaceholder name={member.name} />
                </div>
                <h4 className="text-white text-lg font-medium mb-1">
                  {member.name}
                </h4>
                <p className="text-[#d5dbe6] text-sm">{member.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
