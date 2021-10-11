module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          'extra-light': '#9FB0E480',
          light: '#9FB0E483',
          DEFAULT: '#90ACD1',
          dark: '#90ACD1'
        },
        red: {
          DEFAULT: '#BE4938',
          dark: '#B03428'
        },
        white: {
          DEFAULT: '#FFFFFF',
          dark: '#F9F9FF'
        },
        purple: {
          DEFAULT: '#9FB0E4'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
