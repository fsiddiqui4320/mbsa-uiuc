"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Mission", href: "#mission" },
  { label: "Board", href: "#board" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#001429]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="text-white font-bold text-lg tracking-tight">
            MBSA
          </span>
          <span className="text-[#d5dbe6] text-sm font-normal hidden sm:inline">
            @ UIUC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#d5dbe6] hover:text-white text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#00132A] border-b border-[rgba(255,255,255,0.07)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#d5dbe6] hover:text-white text-[15px] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
