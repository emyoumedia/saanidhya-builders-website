import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:   '#0B0F3B',
        cream:  '#F5F6FA',
        orange: '#FF6A1A',
        purple: '#7A2EFF',
      },
      fontFamily: {
        playfair:  ['var(--font-playfair)',  'Georgia',  'serif'],
        montserrat:['var(--font-montserrat)','Arial',    'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7A2EFF, #FF6A1A)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':       '#0B0F3B',
            '--tw-prose-headings':   '#0B0F3B',
            '--tw-prose-links':      '#FF6A1A',
            '--tw-prose-bold':       '#0B0F3B',
            '--tw-prose-code':       '#0B0F3B',
            '--tw-prose-pre-bg':     '#F5F6FA',
            maxWidth: 'none',
            h1: { fontFamily: 'var(--font-playfair), Georgia, serif' },
            h2: { fontFamily: 'var(--font-playfair), Georgia, serif' },
            h3: { fontFamily: 'var(--font-playfair), Georgia, serif' },
            a: { color: '#FF6A1A', '&:hover': { color: '#7A2EFF' } },
            'code::before': { content: '' },
            'code::after':  { content: '' },
          },
        },
      },
    },
  },
 plugins: [
  plugin(function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '.scrollbar-hide::-webkit-scrollbar': {
        display: 'none',
      },
    })
  }),
  require('@tailwindcss/typography'),
],
}
export default config
