import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1420",
          soft: "#141B29",
          line: "#232C3D",
        },
        parchment: "#EDEAE2",
        brass: {
          DEFAULT: "#C9A15A",
          dim: "#8F7645",
        },
        rust: "#B5533C",
        teal: {
          DEFAULT: "#3E6259",
          soft: "#2A4740",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(201,161,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,161,90,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
    },
  },
  plugins: [],
};
export default config;
