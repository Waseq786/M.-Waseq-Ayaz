"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [40, -40]);
  const rotateY = useTransform(x, [-40, 40], [-40, 40]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink grain min-h-[92vh] flex items-center pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-40" />
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] opacity-70 pointer-events-none hidden md:block">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-brass text-sm tracking-wide mb-5">
            Rawalpindi, Pakistan
          </p>
          <h1 className="font-display text-parchment text-balance text-5xl md:text-7xl leading-[1.05] mb-6">
            Design that reads well. Code that runs clean.
          </h1>
          <p className="text-parchment/70 max-w-prose text-lg leading-relaxed mb-9">
            I&apos;m Muhammad Waseq Ayaz — a graphic designer and web
            developer building brand-ready visuals and Next.js products for
            clients who need both sides done by one person who cares about
            each.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-brass text-ink px-7 py-3 text-sm font-medium hover:bg-parchment transition-colors"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-parchment/25 text-parchment px-7 py-3 text-sm hover:border-brass hover:text-brass transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ perspective: 900 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto w-full max-w-xs"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative rounded-[2rem] border border-brass/30 p-2 bg-ink-soft shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="relative aspect-[3/4] rounded-[1.6rem] overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Muhammad Waseq Ayaz at his desk"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
          </motion.div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-ink-soft border border-ink-line px-4 py-3 text-xs text-parchment/70">
            <span className="text-brass font-medium">6 yrs</span> JS / TypeScript
          </div>
        </motion.div>
      </div>
    </section>
  );
}
