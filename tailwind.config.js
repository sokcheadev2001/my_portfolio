/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#f2f0ee",
        darkGray: "#8892b0",
        lightGray: "#58595b",
        brightGray: "#ccd6f6",
      },
      spacing: {
        0.1: "1px",
      },
      width: {
        74: "300px",
      },
    },
  },
  plugins: [],
};
