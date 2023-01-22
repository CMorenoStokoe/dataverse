/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': 'Koulen, cursive',
        'body': 'Roboto, sans-serif', 
        'alien': 'Flow Circular, cursive'
      }
    },
  },
  plugins: [],
}