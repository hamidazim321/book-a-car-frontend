import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lime-custom': '#97bf0f',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [daisyui],
};
