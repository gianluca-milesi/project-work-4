/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.row': {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '-1rem',
          marginRight: '-1rem',
        },
        '.col': {
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        '.col-1': { flex: '0 0 8.333%', maxWidth: '8.333%' },
        '.col-2': { flex: '0 0 16.666%', maxWidth: '16.666%' },
        '.col-3': { flex: '0 0 25%', maxWidth: '25%' },
        '.col-4': { flex: '0 0 33.333%', maxWidth: '33.333%' },
        '.col-5': { flex: '0 0 41.666%', maxWidth: '41.666%' },
        '.col-6': { flex: '0 0 50%', maxWidth: '50%' },
        '.col-7': { flex: '0 0 58.333%', maxWidth: '58.333%' },
        '.col-8': { flex: '0 0 66.666%', maxWidth: '66.666%' },
        '.col-9': { flex: '0 0 75%', maxWidth: '75%' },
        '.col-10': { flex: '0 0 83.333%', maxWidth: '83.333%' },
        '.col-11': { flex: '0 0 91.666%', maxWidth: '91.666%' },
        '.col-12': { flex: '0 0 100%', maxWidth: '100%' },
      });
    },
  ],
}