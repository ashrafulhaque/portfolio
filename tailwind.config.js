/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        courgette: '"Courgette", cursive',
        play: '"Play", sans-serif',
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
