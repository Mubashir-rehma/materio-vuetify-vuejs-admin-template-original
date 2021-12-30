import VueI18n from '@intlify/vite-plugin-vue-i18n'
import presetIcons from '@unocss/preset-icons'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    Unocss({
      presets: [
        presetIcons({ /* options */ }),
      ],
    }),
    Pages({
      // dirs: 'src/views',
      nuxtStyle: true,
    }),
    Layouts(),
    Components({
      dirs: [
        'src/@core/layouts/components',
        'src/components',
      ],
      dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',

        'vue-i18n',
      ],
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,

      // TODO: use `fileURLToPath`
      include: [path.resolve(__dirname, './src/locales/**')],
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@core/layouts', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/styles/_variables.scss', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
    },
  },
})
