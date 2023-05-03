# How to add i18n in starter-kit

I18n has been implemented in the full version only. If you have started your project using the starter kit as per our suggestion, please follow the below steps to implement i18n functionality:

- Add the `NavBarI18n.vue` component in the navbar of the horizontal and vertical layout.

  ```vue{12}
  # DefaultLayoutWithVerticalNav.vue | DefaultLayoutWithHorizontalNav.vue
  <script lang="ts" setup>
  import NavBarI18n from '@/layouts/components/NavBarI18n.vue'
  </script>

  <template>
    <VerticalNavLayout>
      <template #navbar="{ toggleVerticalOverlayNavActive }">
      ...
        <NavbarThemeSwitcher />
        <VSpacer />
        <NavBarI18n />
        <UserProfile />
      </template>
    </VerticalNavLayout>
  </template>
  ```

- Register the `i18n` plugin in the `main.ts` file.

  ```ts{6}
  # main.ts
  import i18n from '@/plugins/i18n'

  const app = createApp(App)

  app.use(i18n)

  // Mount vue app
  app.mount('#app')
  ```

- Also, register `vite-plugin-vue-i18n` in the vite config.

  ```ts{4,7,8,9,10,11,12}
  import VueI18n from '@intlify/vite-plugin-vue-i18n'
  export default defineConfig({
    AutoImport({
      imports: [...,'vue-i18n'],
      vueTemplate: true,
    }),
    VueI18n({
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
