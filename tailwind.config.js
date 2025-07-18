/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richGold: "#C8922C",
        deepCharcoal: "#0E0E0E",
        ivoryCream: "#F9F5EC",
        warmBrown: "#623F1C",
        shadowGray: "#3B3B3B",
        pureWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
}