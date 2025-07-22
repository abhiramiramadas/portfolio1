import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#ffffff', // almost white
        400: '#3c76c6ff', // dark pink
        500: '#7b9ee9ff', // light pink 
        600: '#194c98ff', // wine
      },
      grayscale: {
        25: '#E4E2DD', // beige
        50: '#689acdff', 
        100: '#efefef',
        200: '#FDFDFF',
        950: '#2649a3ff',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
