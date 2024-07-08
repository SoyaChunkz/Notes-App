/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //colors used in project
      colors: {
        primary: "#2B85FF",
        secondary: "#EF863E",
        neutral: {
          700: "#3A3A3A",
          300: "#D1D1D1",
          900: "#1A1A1A"
        },
      },
    },
  },
  plugins: [],
}

