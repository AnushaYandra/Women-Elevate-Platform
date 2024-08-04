/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown" : "#D4A373",
        "green" : "#d4ddb6",
        "dark-green" : "#636b48",
        "dark-brown" : "#9c6644",
        "light-brown" : "#ddb892",
        "light-green" : "#faedcd",
        "cream" : "#fff1e6",
        "cream-green" : "#e9edc9"
      } 
    },
  },
  plugins: [],
}

