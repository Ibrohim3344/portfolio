/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nun': ['Nunito', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '50px',
        sm: '20px',
        lg: '30px',
        xl: '40px',
        '2xl': '60px',
      },
    },
    extend: {
      colors: {
        gray: '#C4C4C4',
        qora: "#000000",
        oq: "#FFFFFF",
        siu: "#C4C4C4",
        toq: "#1D1D1D",
      }
    },
  },
  plugins: [],
})