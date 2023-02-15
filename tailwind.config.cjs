/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./templates/**/*.{html,twig}", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Avenir", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
