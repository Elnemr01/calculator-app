/** @type {import('tailwindcss').Config} */
export default {
  mode : "jit",
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary :"#de2c4d",
        secondray :"#fb923c",
      },
    },
  },
  plugins: [],
}

