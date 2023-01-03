/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        pokemon: "minmax(0, 1fr) minmax(0, 1.5fr) minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
}
