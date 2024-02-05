/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        primaryColor: '#325164',
        secondaryColor: '#5892B6'
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

