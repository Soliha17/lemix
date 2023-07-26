import { black, neo, primary, success, warning, white } from './src/styles/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: primary,
        success: success,
        warning: warning,
        black: black,
        neo: neo,
        white: white,
      },
    },
  },
  plugins: [],
};
