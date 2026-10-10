import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Waseq Ayaz — Graphic Designer & Web Developer",
  description:
    "Portfolio of Muhammad Waseq Ayaz, a graphic designer and web developer from Rawalpindi, Pakistan, working across Next.js, TypeScript, Adobe Creative Suite and cybersecurity fundamentals.",
  metadataBase: new URL("https://final-deverspk.vercel.app"),
  openGraph: {
    title: "Muhammad Waseq Ayaz — Graphic Designer & Web Developer",
    description:
      "Design and code, held to the same standard: Next.js builds, brand identity work, and a Google Cybersecurity Certificate along the way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
