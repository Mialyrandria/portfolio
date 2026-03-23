import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#0a0a0f",
        "bg-card": "rgba(255,255,255,0.03)",
        "bg-card-hover": "rgba(139,92,246,0.06)",
        violet: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          pale: "#c4b5fd",
          dim: "rgba(139,92,246,0.12)",
          border: "rgba(139,92,246,0.3)",
        },
        text: {
          DEFAULT: "#e8e6f0",
          muted: "rgba(232,230,240,0.6)",
          faint: "rgba(232,230,240,0.4)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
