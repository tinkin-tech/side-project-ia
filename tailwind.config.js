// eslint-disable-next-line @typescript-eslint/no-var-requires
const color = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      coolGray: color.coolGray,
      gray: color.gray,
      white: color.white,
      red: color.red,
      amber: color.amber,
      emerald: color.emerald,
      blue: color.blue,
      indigo: color.indigo,
      violet: color.violet,
      pink: color.pink,
      blueGray: color.blueGray,
      trueGray: color.trueGray,
      warmGray: color.warmGray,
      orange: color.orange,
      yellow: color.yellow,
      lime: color.lime,
      green: color.green,
      teal: color.teal,
      cyan: color.cyan,
      sky: color.sky,
      purple: color.purple,
      fuchsia: color.fuchsia,
      rose: color.rose,
      dark: '#181818',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/custom-forms'),
  ],
}
