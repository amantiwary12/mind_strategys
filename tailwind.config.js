/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },

      animation:{
        
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

