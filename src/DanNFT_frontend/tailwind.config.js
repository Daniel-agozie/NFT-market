/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "serif"],
        monteserrat: ["Montserrat", "serif"]
      },
      height: {
        '90vh' : '70vh'
      },
      colors: {
        hunter: '#40B5AD',
        coal: '#0C0908',
        ash: '#a89e97',
        light: '#dcdcdb',
        darkgreen: '#023020',
        blue: '#023',
        bgColor: 'var(--bg-color)'
      }
    },
  },
  plugins: [],
}

