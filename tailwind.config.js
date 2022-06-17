module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'gbody': '0.75fr 1fr 0.75fr',
      },
      colors:{
        'myPink' : '#ed4a67'
      }
    },
  },
  plugins: [],
}