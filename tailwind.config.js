/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 50 column grid
        '50': 'repeat(50, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
