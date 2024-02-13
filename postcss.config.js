module.exports = {
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },

  //new from pocket UI
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}
