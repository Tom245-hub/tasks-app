/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#17A2B8",
        grayDark: "#6C757D",
        grayMedium: "#54595E",
        grayLight: "#DEE2E6",
        graySuperLight: "#CED4DA",
      },
    },
  },
  plugins: [],
};
