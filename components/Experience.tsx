"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  {
    period: "Nov 2025 — Present",
    title: "Graphic Designer",
    org: "Pathwel Center of Hematology & Bone Marrow Transplant",
    location: "Rawalpindi",
    detail:
      "Magazines and newsletters, social posts and brochures for a hospital audience, plus day-to-day computer maintenance.",
  },
  {
    period: "Mar 2025 — Oct 2025",
    title: "IT & Digital Skills Instructor",
    org: "Envision Tech Institute of Advanced Computing",
    location: "Rawalpindi",
    detail:
      "Taught short courses in graphic design, web development, digital marketing, Python and basic IT to working adults.",
    image: "/images/speaking.jpg",
  },
  {
    period: "Jun 2024 — Sep 2024",
    title: "Graphic Design Specialist",
    org: "SoftCrust Digital Marketing Agency",
    location: "Islamabad",
    detail:
      "Social media posts and reels, video editing and motion graphics for client campaigns.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-brass text-sm tracking-wide mb-4">Experience</p>
        <h2 className="font-display text-parchment text-3xl md:text-4xl mb-14 text-balance max-w-xl">
          Where the work has taken place.
        </h2>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-line hidden md:block" />
          <ol className="space-y-12">
            {roles.map((role, i) => (
              <motion.li
                key={role.title + role.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative md:pl-10 grid md:grid-cols-[1fr_auto] gap-6 items-start"
              >
                <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-ink border-2 border-brass hidden md:block" />
                <div>
                  <p className="text-parchment/40 text-sm mb-1">{role.period}</p>
                  <h3 className="font-display text-parchment text-xl mb-1">
                    {role.title}
                  </h3>
                  <p className="text-brass text-sm mb-3">
                    {role.org} — {role.location}
                  </p>
                  <p className="text-parchment/65 leading-relaxed max-w-prose">
                    {role.detail}
                  </p>
                </div>

                {role.image && (
                  <div className="relative w-full md:w-56 aspect-[16/10] rounded-xl overflow-hidden border border-ink-line">
                    <Image
                      src={role.image}
                      alt="Muhammad Waseq Ayaz presenting at the Digital Point institute"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
