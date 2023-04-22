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
      animation: {
        scroll: "scroll 6s linear infinite",
      },
      keyframes: {
        scroll: {
          // "0%": { transform: "translateX(0%)" },
          // "100%": { transform: "translateX(-100%)" },
          "0%": { marginLeft: "0px" },
          "100%": { marginLeft: "-1200px" },
        },
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
