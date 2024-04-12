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
      backgroundImage: {
        'landingBG': "url('/landingBG.png')",
        'landingBGS': "url('/landingBGS.png')"
      },
      screens: {
        desktop: '1280px',
        tablet:'768px',
        mobile: '360px',
      },
      colors: {
        navbarWords: "#697077"
      }
    },
  },
  plugins: [],
};

