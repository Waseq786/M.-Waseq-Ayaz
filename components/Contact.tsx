"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "muhammad.waseq1@gmail.com",
    href: "mailto:muhammad.waseq1@gmail.com",
  },
  {
    icon: Phone,
    label: "+92 317 0751555",
    href: "tel:+923170751555",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/923170751555",
  },
  {
    icon: Globe,
    label: "final-deverspk.vercel.app",
    href: "https://final-deverspk.vercel.app/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink-soft py-24 md:py-32 border-t border-ink-line overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-30" />
      <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-brass text-sm tracking-wide mb-4">Contact</p>
          <h2 className="font-display text-parchment text-3xl md:text-5xl mb-6 text-balance">
            Have a brand or a build in mind?
          </h2>
          <p className="text-parchment/65 max-w-prose mx-auto mb-12 leading-relaxed">
            I take on graphic design and Next.js development work,
            separately or together. Rawalpindi-based, working with clients
            anywhere.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl border border-ink-line px-5 py-4 text-left text-parchment/80 hover:border-brass hover:text-brass transition-colors"
            >
              <l.icon size={18} className="shrink-0" />
              <span className="text-sm truncate">{l.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
