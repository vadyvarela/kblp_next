module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        'm50': '50%',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'Arial', 'sans-sarif']
      },
      backgroundImage: theme => ({
        'headerimg': "url('/img/background.jpg')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'myorange': '#ffe4d9',
        
       }),
       textColor: {
        'mygreen': '#38675d',
        'myorange': '#fda377'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
