/* eslint-disable @typescript-eslint/no-var-requires */
const DefaultColors = require('tailwindcss/colors')

delete DefaultColors.lightBlue
delete DefaultColors.warmGray
delete DefaultColors.trueGray
delete DefaultColors.coolGray
delete DefaultColors.blueGray

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ...DefaultColors,
        head: '#353945',
        placeholder: '#7d8395',
        basicGrey: '#e6e8ec',
        lightGrey: '#f5f6f7',
        warning: '#F95126',
        main: '#FF9800'
      },
      gradientColorStops: {
        main: '#FF9800'
      },
      boxShadow: {
        top: '0px -1px 2px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}
