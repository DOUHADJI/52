/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'font': "url('../../public/img/font.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'medieval': ['Medieval Sharp', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "themeBlueBlack" : "#23175ec9"
      }
    },
  },
  plugins: [],
}