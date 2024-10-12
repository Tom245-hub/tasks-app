/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dodaj obsługę plików TypeScript i JSX/TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Dodaj czcionkę Inter
      },
    },
  },
  plugins: [],
};
