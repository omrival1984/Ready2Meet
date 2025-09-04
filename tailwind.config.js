/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#6E56CF",
          600: "#5B45C6",
          700: "#4837AA"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(110,86,207,0.35)"
      }
    }
  },
  plugins: []
}
