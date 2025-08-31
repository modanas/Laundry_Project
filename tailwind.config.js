/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fadeInWord: "fadeInWord 0.4s ease forwards"
      },
      keyframes: {
        fadeInWord: {
          "0%": { opacity: 0, transform: "translateY(10px)", filter: "blur(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
        }
      }
    },
  },
  plugins: [],

}


