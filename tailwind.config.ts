import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        text2: "var(--text2)",
        background: "var(--background)",
        background2: "var(--background2)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
};
export default config;
