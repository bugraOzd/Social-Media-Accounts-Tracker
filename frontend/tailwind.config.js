/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        purple:{
          1: '#744BFC',
          2: '#F1F4FF'
        }
      },
      borderRadius: {
        'c-lg': '39px',
        'c-sm': '8px'
      }
    },
  },
  plugins: [],
}

