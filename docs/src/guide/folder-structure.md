# Folder Structure

In addition, to below explanation if you are using nuxt, you can follow their official documentation [here](https://nuxt.com/docs/guide/directory-structure/nuxt).

To gain a comprehensive visual understanding of the **Vuejs folder structure**, please check out this YouTube video.
<iframe width="100%" height="315" src="https://www.youtube.com/embed/_mODYgaUFeo?si=v2sfbyRHewa3lKkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you're using **Nuxtjs**, feel free to check out this detailed video on **Nuxtjs folder structure**.
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YLQjRudDNic?si=14fwLZgGS2ZBHt4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## `@core`

This directory contains our core files and you are not intended to change these files.
Read more [here](./core/)

`@core/utils` and `@core/components` are auto imported when used.

:::tip
You can find out what's auto imported by checking out `vite.config.ts` or `nuxt.config.ts`
:::

## `@layouts`

Our template comes with layouts plugin which is standalone package you can use in any vue project. You can find it in `src/@layouts` directory. Read more [here](./layouts/)

## `assets`

It contains logos and other static assets. You can place your static assets here.

## `components`

Place your component in this directory. Components in this dir will be auto-registered and on-demand.

## `composables`

It contains your composables. Composables placed inside this directory will get auto imported when used.

## `layouts`

Place your app's layouts in this directory.

In Vue, This is used in conjunction with [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) which is used for `pages` directory to generate routes based on directory structure just like nuxt.

## `navigation`

This directory contains vertical nav & horizontal nav items. Items written in `src/navigation/vertical/index.ts` will be for vertical nav and items written in `src/navigation/horizontal/index.ts` will be for horizontal nav. Both files are imported in `src/layouts/default.vue`).

Related: [Fetching navigation items from database via API](/code-examples/fetching-nav-items-from-api.html#fetching-nav-items-from-api) <br>

## `pages`

Contains your app pages. Just create a new file and new route will be auto generated based on file name and its placement in the `pages` directory.

:::details Show me basic example 👀

1. Create a new file in pages directory `src/pages/about.vue` with following content

   ```vue
   <template>
     <p>This is about page</p>
   </template>
   ```

2. Visit your dev server to check out the page. You can access it via `/about` route.

✨ Route is auto generated based on your file name
:::

Related: [How to create a new page](/guide/how-to-create-a-new-page.html#creating-about-page)

## `plugins`

This directory contains plugins we used in our template. Plugins placed inside this directory will get auto registered.

For nuxt, you can follow the official docs [here](https://nuxt.com/docs/guide/directory-structure/plugins).

For vue, we have convention that will allow auto registering the plugins similar to nuxt. For registering the plugin, `export default` a function that takes `app` as argument and use it to register your plugin.

:::code-group

```ts [TS]
import type { App } from 'vue'

export default function (app: App) {
  export const store = createPinia()
  app.use(store)
}
```

```js [JS]
export default function (app) {
  export const store = createPinia()
  app.use(store)
}
```

:::

## `utils`

This directory holds the utility functions. Functions placed inside this directory will get auto imported when used.

## `views`

You can separate large page in smaller chunk/component and place them in this directory.
