// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "Barlow", "Mulish", "cursive"],
        // ubuntu: ['"Ubuntu"', "Poppins", "Mulish", "cursive"],
        // barlow: ['"Barlow"', "Poppins", "Mulish", "cursive"],
        // mulish: ['"Mulish"', "Poppins", "Barlow", "cursive"],
      },
      colors: {
        text: "var(--color-text)",
        light: "var(--color-light)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warn: "var(--color-warn)",
        error: "var(--color-error)",

        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        title: "var(--color-title)",
        secondaryOn: "var(--color-secondary-on)",
        surface: "var(--color-surface)",
        surfaceDark: "var(--color-surfaceDark)",
        surfaceTwo: "var(--color-surfaceTwo)",
        surfaceThree: "var(--color-surfaceThree)",
        surfaceFour: "var(--color-surfaceFour)",
        surfaceFive: "var(--color-surfaceFive)",

        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: true,
  // },
  important: true,
};
