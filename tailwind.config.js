module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#26b4ff',
    }),
    maxWidth: {
      'xxs': '13.5rem',
      '1xs': '14rem',
      '1xsl': '14.5rem',
      '1xl': '16.5rem'
    },
    borderWidth: {
      '1': '0.5px'
    },
    boxShadow: {
      ba: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      bb: '0px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      spacing: {
        '15': '4.5rem',
        '97': '6.5rem',
        '99': '11.25rem',
        '104': '20.625rem',
        '105': '27rem', 
        '115': '33.25rem',
        '116': '34.5rem',
        '126': '45.875',
        '138': '58.875rem',
        '139': '59.25rem'
      },
      inset: {
        '17': '4.5rem',
        '38': '9.5rem',
        '-90': '-110%',
        '1/10': '16%',
        '-1/11': '-11%',
        '120': '28rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
