"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroScene from "./HeroScene";




const facts = [
  { label: "Based in", value: "Rawalpindi, Pakistan" },
  { label: "Education", value: "BS Computer Science, Allama Iqbal Open University" },
  { label: "Languages", value: "Urdu (native), English (C2 written)" },
  { label: "Currently", value: "Graphic Designer, Pathwel Center of Hematology" },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 100, x: 3 }}
          whileInView={{ opacity: 100, x: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1 }}
          className="relative mx-auto md:mx-0 w-full max-w-sm"
        >
          <div className=" hover:scale-110 hover:focus:right-2 relative aspect-square rounded-2xl overflow-hidden border border-ink-line">
            <Image
              src="/images/about.jpg"
              alt="Muhammad Waseq Ayaz working on a laptop"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-brass/40" />
        </motion.div>

     

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-brass text-sm tracking-wide mb-4">About</p>
          <h2 className="font-display text-parchment text-3xl md:text-4xl mb-6 text-balance">
            Two disciplines, one standard of finish.
          </h2>
          <div className="space-y-5 text-parchment/70 leading-relaxed max-w-prose">
            <p>
              I split my work between graphic design and web development,
              and I don&apos;t treat either as the side project. On the
              design side that&apos;s social media campaigns, brochures and
              newsletters built in the Adobe suite; on the development side
              it&apos;s Next.js and TypeScript products, including my own
              site at final-deverspk.vercel.app.
            </p>
            <p>
              I also spent a year teaching graphic design, web development,
              digital marketing and Python at a computing institute in
              Rawalpindi, which is where I got comfortable explaining the
              &ldquo;why&rdquo; behind a design or a line of code, not just
              producing it.
            </p>
          </div>

          <dl className="mt-10 grid sm:grid-cols-2 gap-6">
            {facts.map((f) => (
              <div key={f.label} className="border-l border-ink-line pl-4">
                <dt className="text-sm text-parchment/40 mb-1">{f.label}</dt>
                <dd className="text-parchment/85 text-sm">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
