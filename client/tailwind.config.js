/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
        scale: {
            '10': '.1',
            '20': '.2',
            '30': '.3',
            '40': '.4',
        },
    },
  },
  plugins: [],
}

