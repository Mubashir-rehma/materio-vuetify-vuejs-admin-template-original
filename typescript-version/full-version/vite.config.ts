import path from 'path'
import { fileURLToPath } from 'url'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import presetIcons from '@unocss/preset-icons'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify from 'vite-plugin-vuetify'

// TODO: use the latest version which resolves the dynamic icons issue: https://github.com/unocss/unocss/issues/544#event-6300481520

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: 'expose',
    }),
    Unocss({
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
      presets: [
        presetIcons({
          scale: 1.5,
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },

          // collections: {
          //   mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
          //   flagpack: () => import('@iconify-json/flagpack/icons.json').then(i => i.default),
          // },
        }),
      ],
    }),
    Pages({}),
    Layouts(),
    Components({
      dirs: ['src/@core/components', 'src/views/demos'],
      dts: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n', 'pinia'],
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,

      // TODO: use `fileURLToPath`
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
    DefineOptions(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/styles/_variables.scss', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      '@validators': fileURLToPath(new URL('./src/@core/utils/validators', import.meta.url)),
      'apexcharts': path.resolve(__dirname, 'node_modules/apexcharts-clevision'),
    },
  },
})
