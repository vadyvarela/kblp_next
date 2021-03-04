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
        'mygreen': '#38675d'
      }),
      textColor: {
        'mygreen': '#38675d',
        'myorange': '#fda377',
        'mywhite': '#ffe4d9'
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'greenBold': '#083b30',
        'greenLight': '#26554b'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'mygreen': '#26554b'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
