import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FA",
        primary: "#006D77",
        black: "#11292B",
        accent: "#A8E6CF",
        grey: "#585D5D",
      },
      screens: {
        smartphone: { max: "480px" },
        tablet: { min: "481px", max: "1100px" },
        notebook: { min: "1101px", max: "1400px" },
        desktop: { min: "1401px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
