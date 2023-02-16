/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      spacegray: '#232627',
      gray: '#777777',
      blue: '#377AFE',
      red: '#E80D52',
      yellow: '#EFFF14',
      indigo: '#155b91',
      white: '#F2F2F2',
      black: '#0C0D10',
      silver: '#dae2f2',
    },
    extend: {
      boxShadow: {
        'white-md': '0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1)',
      },
    },
  },
  plugins: [],
};
