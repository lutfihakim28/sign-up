/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },
      colors: {
        primary: '#02C3BD',
        secondary: '#4062BB',
        basic: '#02C3BD',
        'grad-2-stop': '#5899FF',
        accent: '#50BEBB',
        text: '#F2F0FF',
        'text-2': '#B5B3BC',
        background: '#0B0E11',
        'nav-background': '#0E1114',
        'signup-background': '#1E1E1E',
        'alerts-blue': '#339DFF',
        'alerts-red': '#FF4445',
        'alerts-yellow': '#EF8943',
        'alerts-success': '#2BAC47',
        'second-background': '#242424',
        
      },
      boxShadow: {
        hover: '2px 4px 12px rgba(0, 0, 0, 0.48);'
      }
    },
  },
  plugins: [],
}
