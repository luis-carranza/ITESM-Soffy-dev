import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F36283",
        orange: "#E06601",
        yellow: "#FEA02F",
        beige: "#ECD9CA",
        teal: "#007A7B",
        navy: "#013E5A",
      },
    },
  },
  plugins: [],
};

export default config;
