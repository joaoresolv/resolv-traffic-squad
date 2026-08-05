module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210,30%,18%)',
        accent: 'hsl(158,70%,45%)',
        surface: 'hsl(0,0%,9%)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui']
      }
    }
  },
  plugins: []
};
