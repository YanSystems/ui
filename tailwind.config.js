import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code': {
              backgroundColor: '#0b0b0b',
              color: '#ffffff',
              padding: '0.1em 0.3em',
              borderRadius: '0.25rem',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              borderRadius: '0',
              color: 'inherit',
            },
            'pre': {
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
          },
        },
        dark: {
          css: {
            'code': {
              backgroundColor: '#0b0b0b',
              color: '#ffffff',
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
}
