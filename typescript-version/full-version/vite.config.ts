import VueI18n from '@intlify/vite-plugin-vue-i18n'
import presetIcons from '@unocss/preset-icons'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

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
      rules: [
        [/^gap-(\d+)$/, ([, d]) => ({ gap: `${d / 4}rem` })],
        [/^gap-x-(\d+)$/, ([, d]) => ({ 'column-gap': `${d / 4}rem` })],
        [/^gap-y-(\d+)$/, ([, d]) => ({ 'row-gap': `${d / 4}rem` })],
        ['truncate', { 'text-overflow': 'ellipsis', 'overflow': 'hidden', 'white-space': 'nowrap' }],
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
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n'],
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
    },
  },
})
