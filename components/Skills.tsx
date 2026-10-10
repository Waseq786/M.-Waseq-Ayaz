"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Design",
    items: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Premiere Pro",
      "After Effects",
      "Advanced Canva",
      "Motion graphics",
    ],
  },
  {
    title: "Development",
    items: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Sanity.io",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Python",
    ],
  },
  {
    title: "Operations",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "Linux & SQL basics"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-ink-soft py-24 md:py-32 border-y border-ink-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="text-brass text-sm tracking-wide mb-4">Skills</p>
          <h2 className="font-display text-parchment text-3xl md:text-4xl mb-10 text-balance">
            Comfortable on both sides of the handoff.
          </h2>

          <div className="space-y-10">
            {groups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: gi * 0.08 }}
              >
                <h3 className="text-parchment/50 text-sm mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-line px-3.5 py-1.5 text-sm text-parchment/80 hover:border-brass/50 hover:text-brass transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-ink-line max-w-sm mx-auto md:mx-0"
        >
          <Image
            src="/images/coding.jpg"
            alt="Muhammad Waseq Ayaz writing code at a library desk"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-parchment/90 text-sm">
            Six years writing production JavaScript and TypeScript.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
