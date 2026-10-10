"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-ink-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display italic text-lg text-parchment tracking-tight"
        >
          M.Waseq Ayaz
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-parchment/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brass33 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-brass/40 px-4 py-2 text-sm text-brass hover:bg-brass hover:text-ink transition-colors"
        >
          Start a project
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-parchment"
        >
          <span className="block w-6 h-px bg-parchment mb-1.5" />
          <span className="block w-6 h-px bg-parchment mb-1.5" />
          <span className="block w-4 h-px bg-parchment" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-line bg-ink px-6 py-4">
          <ul className="flex flex-col gap-4 text-parchment/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
