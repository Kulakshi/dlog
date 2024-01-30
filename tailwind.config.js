/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',],
  theme: {
    extend: {
      colors :{
        primary: "#fc3588",
        // primary: "#145B63",
        // secondary: "#519C8D",
        secondary: "black",
        tertiary: "#282D2F",
        neutral: "#FFFFFF",
        neutralVariant: "#cc9be8",
      }
    },
  },
  plugins: [],
}

