/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'guthen': ['Guthen', 'sans-serif'],
        'inter': ['Inter']
      },
      colors: {
        'orang': '#FFD436',
        'orag': '#FEB805',
        'blu': '#13AAED',
        'gree': '#44B349',
        'indig': "#1B49BA ",
        'slat': "#211D1E "
      },
    },
  },
  plugins: [],
}
