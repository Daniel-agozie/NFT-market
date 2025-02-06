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
        monteserrat: ["Montserrat", "serif"],
        Quicksand: ["Quicksand", "serif"],
        Tangerine: ["Tangerine", "serif"],
        Imperial: ["Imperial Script", "serif"],
        Chewy: ["Chewy", "serif"]
      },
      height: {
        '90vh' : '75vh'
      },
      colors: {
        hunter: '#40B5AD',
        coal: '#0C0908',
        ash: '#a89e97',
        light: '#dcdcdb',
        darkgreen: '#023020',
        blue: '#023',
        bgColor: 'var(--bg-color)'
      },
      animation: {
        slideup: 'slideup 2s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 3s ease-in-out',
        slideright: 'slideright 0.5s ease-in-out',
        sliderightto: 'slideright 0.5s',
        sliderightto1: 'slideright 0.8s linear',
        sliderightto2: 'slideright 1.2s linear',
        sliderightto3: 'slideright 1.4s linear',
        sliderightto4: 'slideright 1.6s linear',
        sliderightto5: 'slideright 2s linear',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        rotate: 'rotate 1s linear',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        sliderightto: {
          '0%': {  transform: 'translateX(300%)' },
          '100%': {  transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        rotate:{
          '100%': {transform: 'rotateZ(360deg)'}
        },
      },
    },
  },
  plugins: [],
}

