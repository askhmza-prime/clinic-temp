import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1C1B19",
        paper: "#F7F4EE",
        "paper-dim": "#EEE8DA",
        iodine: "#B5451B",
        "iodine-deep": "#8A3311",
        clinic: "#33493F",
        line: "#DBD2BE",
        muted: "#6B655C",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-worksans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
