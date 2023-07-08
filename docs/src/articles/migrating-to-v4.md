# Migrating to v4

From v4 version, we also provide [Nuxt](https://nuxt.com/) version of our template. During this journey we also made some changes to the template structure. Below is the list of changes you need to make to migrate to v4.

In most of the changes, we recommend you just use your favorite editor's find and replace feature. 😉

## Plugins

Please refer to [Plugins](/guide/getting-started/plugins) guide for understanding how new plugin registration mechanism works.

Moreover, We moved all the plugins to `src/plugins` directory. Below is list of plugins there were not present in plugins directory before:

- Router (_was at `src/router`_)
- Pinia (_was in `src/main.ts`_)
- Iconify (_was at `src/@iconify`_)

## Styles

We moved `src/styles` directory to `src/assets/styles` directory. If you were importing styles using `@styles` alias then you don't have to update anything as we have updated the alias to point to new directory in v4. However, if you were using `@/styles` alias then you need to update it to `@/assets/styles`.

**Do note that ESLint can't lint SCSS files so don't forget to update the imports there.**

Apart from this, As we moved the styles directory we also had to update path in `src/assets/styles/variables/_vuetify.scss` file because it had a relative path.

```scss
@forward "../../@core/scss/template/libs/vuetify/variables"; // [!code --]
@forward "../../../@core/scss/template/libs/vuetify/variables"; // [!code ++]
```

:::tip
Even if you were using `@/assets/styles` import, our ESLint configuration marks it as invalid import and **auto replaces** it with `@styles`. This showcases the superior tooling we provide. 💎
:::

## Axios is replaced by Fetch API

We no longer 🙅🏻‍♂️ use axios in our template. Instead we use native [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

We made this decision because fetch API is now stable and everyone is using it. With this we are now able to remove one more third-party package. Moreover, Nuxt also uses fetch API under the hood. So, we decided to use it in our template as well.

:::info
If you want to use axios then you can follow their [official guide](https://axios-http.com/docs/intro) to integrate it in our template.
:::
