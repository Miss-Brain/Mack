/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen: 'hsl(148, 30%, 46%)',
        darkPurple: 'hsl(320, 17%, 17%)',
        darkGrey: 'hsl(157, 16%, 28%)',
        lightGrey: 'hsl(90, 18%, 64%)',
        nudeGrey: 'hsl(78, 17%, 73%)',
      }
    },
  },
  plugins: [],
}

