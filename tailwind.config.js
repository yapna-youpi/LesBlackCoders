/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'orang': '#FF6C00',
        'blu': '#423f8d',
        'blac': '#4C4C4C',
        'indig': "#786fa6 ",
        'ros': "#FFF8FE "
      },
    },
  },
  plugins: [],
}
