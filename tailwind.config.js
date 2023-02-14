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
        lightPrimary: "#112240",
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
      dropShadow: {
        "2darkShadow": "0 0 0.75rem cyan",
        "2lightShadow": "0 0 0.75rem gray",
      },
    },
  },
  plugins: [],
};
