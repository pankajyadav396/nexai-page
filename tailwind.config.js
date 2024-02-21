/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#525858",
        lightGrey:"#B4B4B4",
      }
    },
  },
  plugins: [],
}