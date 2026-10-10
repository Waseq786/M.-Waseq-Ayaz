"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Personal portfolio, built on Next.js",
    period: "Oct — Dec 2023",
    description:
      "My own site, framed and built from scratch on the React framework — the same one this page runs on.",
    href: "https://final-deverspk.vercel.app/",
    tag: "Development",
  },
  {
    title: "Data mining for business intelligence",
    period: "Jul 2022 — Jul 2023",
    description:
      "Final-year BS project: a Python data-mining pipeline built to surface business-intelligence patterns from raw data.",
    tag: "Development",
  },
  {
    title: "Ongoing graphic design practice",
    period: "2023 — Present",
    description:
      "Brand and campaign work across the full Adobe suite — Illustrator, Photoshop, Premiere Pro and After Effects.",
    tag: "Design",
    image: "/images/creative.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-ink-soft py-24 md:py-32 border-y border-ink-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-brass text-sm tracking-wide mb-4">Selected work</p>
        <h2 className="font-display text-parchment text-3xl md:text-4xl mb-14 text-balance max-w-xl">
          A few things I&apos;ve built and shipped.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-ink-line bg-ink overflow-hidden"
            >
              {p.image ? (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 340px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] flex items-center justify-center bg-ink-line/30">
                  <span className="font-display italic text-4xl text-brass/60">
                    {p.tag === "Development" ? "</>" : "Aa"}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-teal">{p.tag}</span>
                  <span className="text-xs text-parchment/35">{p.period}</span>
                </div>
                <h3 className="font-display text-parchment text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-parchment/60 text-sm leading-relaxed flex-1">
                  {p.description}
                </p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-brass text-sm group-hover:gap-2 transition-all"
                  >
                    Visit site <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
