module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Only translate half for smooth looping
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite', // Increase duration if needed
      },
    },
  },
  daisyui: {
    themes: [
      "cmyk",
      "dim",
    ],
  },
  plugins: [require('daisyui')],
}
