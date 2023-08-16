import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EDA735",
        primaryAlt: "#FAD783",
        backgroundColor: "#F0EFEA",
        backgroundAlt: "#E0DCD3",
        secondary: "#1C1A1F",
      },
      backgroundImage: {},
      fontFamily: {
        // Syne: ["Syne", "sans-serif"],
        // Inter: ["Inter", "sans-serif"],

        Inter: ["var(--font-Inter)", "sans-serif"],
        Syne: ["var(--font-Syne)", "sans-serif"],
        Marcellus: ["var(--font-Marcellus)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
