# How to add i18n in starter-kit

I18n has been implemented in the full version only. If you have started your project using the starter kit as per our suggestion, please follow the below steps to implement i18n functionality:

- Copy `src/plugins/i18n` directory from full version and paste it in starter kit. As plugins are auto-imported , there is no need to register plugin.

- Also, register `vite-plugin-vue-i18n` in the vite config.

  ```ts{4,7,8,9,10,11,12}
  import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

  export default defineConfig({
    AutoImport({
      imports: [...,'vue-i18n'],
      vueTemplate: true,
    }),
     VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL('./src/plugins/i18n/locales/**', import.meta.url)),
      ],
    }),
  })
  ```

- Now enable `i18n` in the `themeConfig.ts` file. You can find it in the root directory.

  ```ts
  enableI18n: true,
  ```

  *We have successfully added `i18n` to the starter-kit.*
