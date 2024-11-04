module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      "cmyk",
      "dim",
    ],
  },
  plugins: [require('daisyui')],
}
