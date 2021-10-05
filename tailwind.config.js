module.exports = {
  mode: 'jit',
  purge: [
    './dist/*.html',
    './src/**/*.{js,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
