/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        med: {
          green: '#00965E',
          deep: '#005C3B',
          lime: '#A3C836',
          light: '#F2FAF5',
          gray: '#F8FAFC',
          accent: '#25D366',
        }
      }
    },
  },
  plugins: [],
}