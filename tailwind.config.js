/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray_blue: '#131927', 
        dark_black:'#0E111A',
        gray_blue_light: '#7B8DBC'
      },
    },
  },
  plugins: [],
}