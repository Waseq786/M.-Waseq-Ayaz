"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Cert = { name: string; issuer: string; date: string; link?: string };
type Track = { title: string; blurb: string; certs: Cert[] };

const tracks: Track[] = [
  {
    title: "Cybersecurity",
    blurb: "Google Cybersecurity Professional Certificate, nine courses.",
    certs: [
      {
        name: "Google Cybersecurity Professional Certificate",
        issuer: "Coursera",
        date: "Dec 2025",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/I5Z8NKALIH1B",
      },
      {
        name: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "Aug 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/Q13AMI1FEDAP",
      },
      {
        name: "Play It Safe: Manage Security Risks",
        issuer: "Google",
        date: "Sep 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/NQP5T44V3Z4X",
      },
      {
        name: "Connect and Protect: Networks and Network Security",
        issuer: "Google",
        date: "Sep 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/SSLGYPJXLLPO",
      },
      {
        name: "Tools of the Trade: Linux and SQL",
        issuer: "Google",
        date: "Oct 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/OZXDZPT5Y9JB"
      },
      {
        name: "Assets, Threats, and Vulnerabilities",
        issuer: "Google",
        date: "Oct 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/G48YS0XJP0Q0"
      },
      {
        name: "Sound the Alarm: Detection and Response",
        issuer: "Google",
        date: "Nov 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/9YW2YCX93TRJ"
      },
      {
        name: "Automate Cybersecurity Tasks With Python",
        issuer: "Google",
        date: "Dec 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/8IAOV01HLNPV"
      },
      {
        name: "Put It to Work: Prepare for Cybersecurity Jobs",
        issuer: "Google",
        date: "Dec 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/4CH40FMW0D2P"
      },
      {
        name: "Accelerate Your Job Search with AI",
        issuer: "Google",
        date: "Dec 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/960RRIBS8EOH"
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    blurb: "Google AI Essentials, five courses, plus applied Python practice.",
    certs: [
      { name: "Google AI Essentials", issuer: "Google", date: "Feb 2026", link: "https://www.coursera.org/account/accomplishments/specialization/33Y7835OWLOH" },
      { name: "Introduction to AI", issuer: "Google", date: "Dec 2025", link: "coursera.org/account/accomplishments/records/E0YUF6MIN3U7" },
      {
        name: "Maximize Productivity With AI Tools",
        issuer: "Google",
        date: "Jan 2026",
        link: "coursera.org/account/accomplishments/records/VU2TN0OMRQKJ"
      },
      {
        name: "Discover the Art of Prompting",
        issuer: "Google",
        date: "Feb 2026",
        link: "https://www.coursera.org/account/accomplishments/verify/0W3HC4W5G9ZA"
      },
      { name: "Use AI Responsibly", issuer: "Google", date: "Feb 2026", link: "https://www.coursera.org/account/accomplishments/verify/B9OY1EMV0XC8" },
      {
        name: "Stay Ahead of the AI Curve",
        issuer: "Google",
        date: "Feb 2026",
        link: "https://www.coursera.org/account/accomplishments/verify/9BBCI15PBHER"
      },
      
      { name: "Crash Course on Python", issuer: "Google", date: "Mar 2026", link: "https://www.coursera.org/account/accomplishments/verify/XNN6GKYB0DSI" },
      {
        name: "Artificial Intelligence Using Python",
        issuer: "DigiSkills DSTP 3.0",
        date: "Jul 2026",
        
      },
    ],
  },
  {
    title: "Design & Cloud",
    blurb: "Where the design and development tracks were formalised.",
    certs: [
      {
        name: "Graphic Designing (UI/UX Designer)",
        issuer: "NAVTTC",
        date: "Sep 2023",
      },
      {
        name: "Certified Cloud Applied Generative AI Engineer",
        issuer: "PIAIC",
        date: "Oct 2024",
      },
      {
        name: "UI/UX & Web Flow",
        issuer: "DigiSkills DSTP 3.0",
        date: "Jul 2026",
        
      },
    ],
  },
];

export default function Certifications() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="certifications" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="text-brass text-sm tracking-wide mb-4">Certifications</p>
        <h2 className="font-display text-parchment text-3xl md:text-4xl mb-4 text-balance">
          Twenty-one courses, three tracks.
        </h2>
        <p className="text-parchment/60 max-w-prose mb-12">
          Most of this was completed alongside client and teaching work rather
          than instead of it.
        </p>

        <div className="space-y-3">
          {tracks.map((track, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={track.title}
                className="rounded-2xl border border-ink-line overflow-hidden bg-ink-soft"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <h3 className="font-display text-parchment text-lg">
                      {track.title}
                    </h3>
                    <p className="text-parchment/50 text-sm mt-0.5">
                      {track.blurb}
                    </p>
                  </div>
                  <ChevronDown
                    className={`shrink-0 text-brass transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="px-6 pb-5 pt-1 divide-y divide-ink-line">
                        {track.certs.map((cert) => (
                          <li
                            key={cert.name}
                            className="flex items-center justify-between gap-4 py-3 text-sm"
                          >
                            <div>
                              {cert.link ? (
                                <a
                                  href={cert.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-parchment/85 hover:text-brass hover:underline transition-colors"
                                >
                                  {cert.name}
                                </a>
                              ) : (
                                <p className="text-parchment/85">{cert.name}</p>
                              )}
                              <p className="text-parchment/40 text-xs mt-0.5">
                                {cert.issuer}
                              </p>
                            </div>
                            <span className="text-parchment/40 whitespace-nowrap text-xs">
                              {cert.date}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
