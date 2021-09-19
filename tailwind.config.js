module.exports = {
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
  },
  darkMode: 'class',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        kaldi: '#ff4400',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-dark-mode')(),
    // ...
  ],
}
