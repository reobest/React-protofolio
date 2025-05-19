/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'custom-1': '0.01px',
      },
      zIndex: {
        35: '35',
      },
    },
  },
  plugins: [],
}
