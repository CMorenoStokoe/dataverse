/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          500: '#0F3460',
          600: '#16213E'
        },
        'secondary': {
          500: '#533483',
        },
        'accent': {
          500: '#E94560',
        }
      },
      fontFamily: {
        'display': 'Koulen, cursive',
        'body': 'Ariel, sans-serif',
        'alien': 'Libre Barcode 39, cursive'
      }
    },
  },
  plugins: [],
}