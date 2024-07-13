module.exports = {
  content: [
  "./build/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6eee3',
        tabHover: '#ebe0d1',
        siteGrey: '#828282'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}