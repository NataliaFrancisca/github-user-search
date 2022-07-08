module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyFont: ['Open Sans', 'sans-serif'],
        menuFont: ['Albert Sans', 'sans-serif'],
        cardFont: ['IBM Plex Mono', 'monospace']
      },
      colors: {
        bg_dark: "#141c2f",
        bg_light: "#f5f8ff",
        card_dark: '#1f2a48',
        card_light: '#fefefe'
      },
    },
  },
  plugins: [],
}