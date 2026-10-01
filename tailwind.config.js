/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ff4d00",
      },

      screens: {
        xs: "375px",
      },
    },
  },

  plugins: [],
};