import { defineConfig } from 'unocss'

export default defineConfig({

  theme: {
    fontSize: {
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
  },
  rules: [
    [/^gap-(\d+)$/, ([, d]) => ({ gap: `${Number(d) / 4}rem` })],
    [/^gap-x-(\d+)$/, ([, d]) => ({ 'column-gap': `${Number(d) / 4}rem` })],
    [/^gap-y-(\d+)$/, ([, d]) => ({ 'row-gap': `${Number(d) / 4}rem` })],
    ['truncate', { 'text-overflow': 'ellipsis', 'overflow': 'hidden', 'white-space': 'nowrap' }],
    [/^text-(\w+)$/, ([, s = 'base'], { theme }) => {
      const fontSizes = theme.fontSize[s]
      const themed = Array.isArray(fontSizes) ? fontSizes : [fontSizes]

      if (themed?.[0]) {
        const [size, height = '1'] = themed

        return {
          'font-size': size,
          'line-height': height,
        }
      }
    }],
  ],
})
