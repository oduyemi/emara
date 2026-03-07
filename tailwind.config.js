/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],

    keyframes: {
      float: {
        '0%,100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' }
      }
    },
    animation: {
      float: 'float 10s ease-in-out infinite'
    }
  };