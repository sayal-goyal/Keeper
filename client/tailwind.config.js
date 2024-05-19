/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 0 rgba(0, 0, 0, 0.3)',
      },
      maxWidth: {
        '8xl': '1600px'
      },
    },
    fontFamily:{
      'head' : ['McLaren', 'ui-sans-serif'],
      'all' : ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}