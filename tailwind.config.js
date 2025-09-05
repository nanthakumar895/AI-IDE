/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        facebookBlue: '#1877f2',
        facebookGray: '#f0f2f5',
        facebookDarkGray: '#65676b',
        facebookGreen: '#36a420',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
