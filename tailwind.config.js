/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat:wght@700'],
      }
    },
    colors: {
      'kuning': '#ffb800'
    },
    scale: {
      '75': '0.75',
      '80': '0.80',
    },
  },
  plugins: [],
}