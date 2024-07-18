import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

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

      textShadow: {
        sm: '0 1px 2px var(--background2)',
        DEFAULT: '0 2px 4px var(--background2)',
        lg: '0 8px 16px var(--background2)',
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};


export default config;
