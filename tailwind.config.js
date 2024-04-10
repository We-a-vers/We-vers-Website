/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
        mobile: '360px',
      },
      colors: {
        navWords: '#697077',
      },
    },
  },
  plugins: [],
};
