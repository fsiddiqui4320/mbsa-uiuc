"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const boardMembers = [
  {
    name: "Faiz Shaikh",
    role: "Co-President",
    major: "Finance",
    year: "Senior",
    image: "/board/faiz-shaikh.jpg",
  },
  {
    name: "Ibraheem Khan",
    role: "Co-President",
    major: "Finance + Accounting",
    year: "Sophomore",
    image: "/board/ibraheem-khan.jpg",
  },
  {
    name: "Ranya Belabbes",
    role: "VP Internal",
    major: "Business + Data Science",
    year: "Sophomore",
    image: "/board/ranya-belabbes.jpg",
  },
  {
    name: "Dean Xoubi",
    role: "VP External",
    major: "Accountancy + Data Science",
    year: "Sophomore",
    image: "/board/dean-xoubi.jpg",
  },
  {
    name: "Roqaya Elmenshawy",
    role: "VP Professional Development",
    major: "IS + Data Science",
    year: "Sophomore",
    image: "/board/roqaya-elmenshawy.jpg",
  },
  {
    name: "Nashra Younus",
    role: "Education Chair",
    major: "Accountancy + Data Science",
    year: "Sophomore",
    image: "/board/nashra-younus.jpg",
  },
  {
    name: "Saliha Ansari",
    role: "VP Marketing",
    major: "Accountancy + Data Science",
    year: "Sophomore",
    image: "/board/saliha-ansari.jpg",
  },
  {
    name: "Syed Hasan",
    role: "Marketing Chair",
    major: "Finance + Accountancy",
    year: "Freshman",
    image: "/board/syed-hasan.png",
  },
  {
    name: "Yazan Rahmah",
    role: "VP Finance",
    major: "Finance + Accountancy",
    year: "Freshman",
    image: "/board/yazan-rahmah.jpg",
  },
  {
    name: "Zaara Ijaz",
    role: "Social Chair",
    major: "IS + Data Science",
    year: "Freshman",
    image: "/board/zaara-ijaz.jpg",
  },
];

export default function Board() {
  return (
    <section id="board" className="py-24 lg:py-32 px-6 lg:px-12">
      {/* Divider */}
      <div className="max-w-[1200px] mx-auto mb-24">
        <hr className="section-divider" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h3 className="section-label text-[#d5dbe6] mb-4 text-center">
            Our Board
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-[36px] sm:text-[44px] leading-[1.1em] font-medium text-white mb-16 text-center">
            Meet the Team
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {boardMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={0.1 + i * 0.04}>
              <motion.div
                className="rounded-[10px] border border-[rgba(255,255,255,0.07)] p-6 text-center h-full"
                whileHover={{ borderColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-white text-[15px] font-bold leading-[1.3em] mb-1">
                  {member.name}
                </h4>
                <p className="text-[#d5dbe6] text-[13px] leading-[1.4em] mb-0.5">
                  {member.role}
                </p>
                <p className="text-[#d5dbe6] text-[12px] leading-[1.4em] opacity-60">
                  {member.major}, {member.year}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
