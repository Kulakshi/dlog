/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',],
  theme: {
    extend: {
      colors :{
        primary: "#145B63",
        secondary: "#519C8D",
        tertiary: "#282D2F",
        neutral: "#FFFFFF",
        neutralVariant: "#afded5",
      }
    },
  },
  plugins: [],
}

