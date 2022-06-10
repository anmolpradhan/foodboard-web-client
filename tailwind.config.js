module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB233F',
        secondary: '#0b0b0b',
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/line-clamp'),
  require('@tailwindcss/aspect-ratio'),],
}