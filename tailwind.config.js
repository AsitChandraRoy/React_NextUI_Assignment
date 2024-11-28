/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ff1f6",
        secondary: "#394648",
        background: "#002228",
      },
    },
    fontFamily: {work: '"Work Sans", sans-serif', montserrat: '"Montserrat", sans-serif'},
  },
  darkMode: "class",
  plugins: [nextui()],
};
