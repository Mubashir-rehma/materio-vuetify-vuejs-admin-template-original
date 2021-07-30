# How to add i18n in starter-kit

::: warning
v6.1 starter-kit had issue with i18n which is fixed in v6.2 and later
:::

Due to new improved folder structure you can now just import the pre-configured file from full-version and import it in starter-kit's main.js file and you are done with configuring i18n. Make sure you check the package's configuration file once to modify it if you have any changes for your project.

You can find all third party packages' configuration in `src/libs` folder. Copy `src/libs/i18n` folder from full-package to starter-kit and add i18n in `main.js`

```js{2,9}
// import from libs folder after copy
import i18n from '@/libs/i18n'

// other stuff

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
```

Now, you have to update translation. For this you can find translation files in `src/libs/i18n/locales/` just update locale files (You can remove locales you are not using).

You are all set to use i18n now:

```vue
<span>{{ $t('Admin') }}</span>
```

Please read i18n [docs](https://kazupon.github.io/vue-i18n/) for usage.
