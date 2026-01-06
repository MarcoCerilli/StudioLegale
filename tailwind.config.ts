import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Aggiungilo per sicurezza
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1a2a3a",
          gold: "#af9164",
        },
      },
    },
  },
  plugins: [],
};
export default config;