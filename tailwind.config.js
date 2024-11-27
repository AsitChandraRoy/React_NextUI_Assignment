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
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
    },
    fontFamily: {work: '"Work Sans", sans-serif', montserrat: '"Montserrat", sans-serif'},
  },
  darkMode: "class",
  plugins: [nextui()],
};
