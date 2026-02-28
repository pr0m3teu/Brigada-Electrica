/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./servicii.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

