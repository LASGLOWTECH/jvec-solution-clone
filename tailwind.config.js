/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:'#162b77',
        darkestBlue:'#213f7e',
        lightBlue:'#19898b',
        lighterBlue:'#198b8c',
        greyDark:'#333333',
        greyBlack:'#181B38',
        grey:'#fafafa',
        darkGreen:'#00d3ac',
        lightGreen:'#acfce3',
        purpleBlue:'#6945d8'
      }},
  
  },
  plugins: [],
}