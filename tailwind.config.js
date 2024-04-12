/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        rubik:["Rubik", 'sans-serif'],
        inter:["Inter", 'sans-serif'],
        pt:["PT Serif", 'serif']
      },
      screens: {
        desktop: '1440px',
        mobile: '360px',
      },
      colors: {
        navbarWords: "#697077"
      }
    },
  },
  plugins: [],
};

