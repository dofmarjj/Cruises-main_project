/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sp: { max: "2560px" },
      lg: { max: "1299.99px" },
      md: { max: "991.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },

    container: {
      padding: "12px",
      center: true,
    },

    extend: {
      width: {
        w30: "300px",
        allFrame: "-webkit-fill-available",
      },

      fontFamily: {
        gabriela: ["Gabriola", "serif"],
        openSans: ["Open-Sans", "serif"],
        comforta: ["Comfortaa", "serif"],
        pathway: ["Pathway Extreme", "sans-serif"],
        pathwayItalic: ["Pathway Extreme", "sans-serif"],
      },

      colors: {
        mainColor: "#19BABA",
        titleText: "#00747C",
        headerColor: "#E9F5F5",

        bgHeader: "rgba(40, 47, 63, 0.57)",
        topBg: "rgba(0, 0, 0, 0.60)",
        hoverBg: "rgba(31, 32, 33, 0.75)",

        salesBg: "rgba(0, 0, 0, 0.00)",
        salesBgg: "rgba(0, 0, 0, 0.70)",

        textColor: "rgba(33, 37, 41, 0.60)",
      },

      fontSize: {
        s42px: "42px",
      },
      lineHeight: {
        lineHeight42: "0.8",
      },
      backgroundImage: {
        headerPatern: "url(../image/bg-logo.png)",
      },
    },
  },
  plugins: [],
};
