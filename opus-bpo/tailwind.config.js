/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E4DB7",
          yellow: "#F4B400",
          red: "#D33A32",
          slate: "#0F172A",
        },
        ink: {
          700: "#1F2937",
          600: "#334155",
          500: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 18px 40px -28px rgba(30, 77, 183, 0.35)",
      },
    },
  },
  plugins: [],
}
