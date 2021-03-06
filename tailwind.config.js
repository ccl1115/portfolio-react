const production = process.env.NODE_ENV;
module.exports = {
  purge: production ? ['./src/**/*.sass', './src/**/*.jsx'] : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
