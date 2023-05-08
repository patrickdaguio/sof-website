/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./templates/**/*.{html,twig}", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "936px",
        xl: "1104px",
      },
    },
    extend: {
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        64: "64px",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      colors: {
        gray: {
          medium: "#4F4F4F",
          dark: "#202020",
          darkest: "#121212",
        },
        blue: {
          primary: "#2D3694",
        },
      },
    },
  },
  plugins: [],
};
