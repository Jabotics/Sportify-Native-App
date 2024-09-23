const COLORS = require("./src/styles/abstracts/colors.ts").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...COLORS, 
      },
    },
  },
  plugins: [],
};