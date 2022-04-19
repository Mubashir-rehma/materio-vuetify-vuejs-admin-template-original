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

// TODO: use the latest version which resolves the dynamic icons issue: https://github.com/unocss/unocss/issues/544#event-6300481520

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

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
      ],
      presets: [
        presetIcons({
          scale: 1.5,
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
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
        'src/@core/components',
        'src/components',
      ],
      dts: true,
      resolvers: [
        {
          type: 'component',
          resolve: (name: string) => {
            const regex = /^Demo([A-Z][a-z]+)/g
            const result = regex.exec(name)

            // console.log('name :>> ', name)
            // console.log('result :>> ', result)
            // console.log('----')

            if (result) {
              const compDir = result[1].toLowerCase()

              // console.log('compDir :>> ', compDir)
              // console.log(`@/views/components/${compDir}/demos/${name}.vue`)

              return { importName: 'default', path: `@/views/components/${compDir}/demos/${name}.vue` }
            }
          },
        },
      ],
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
      '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@core/layouts', import.meta.url)),
      '@configured-variables': fileURLToPath(new URL('./src/styles/_variables.scss', import.meta.url)),
      '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
    },
  },
})
