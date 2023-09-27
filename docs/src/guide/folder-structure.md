# Folder Structure

## @core

This directory contains our core files and you are not intended to change these files.
Read more [here](./core/)

## @layouts

Our template comes with layouts plugin which is standalone package you can use in any vue project. You can find it in /src/@layouts directory. Read more [here](./layouts/)

## Assets

It contains logos and other static assets. You can place your static assets here.

## Components

Place your component in this directory. Components in this dir will be auto-registered and on-demand, thanks to [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

:::details How it will auto register components on demand 🤯

1. Just create new component in `components` directory
2. Reference it in Pascal case name in any file

**Example:**

It will automatically turn this

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

into this

```vue
<template>
  <div>
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './src/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>
```

read more [here](https://github.com/antfu/unplugin-vue-components).
:::

## Layouts

Place your app's layouts in this directory. This is used in conjunction with [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) which is used for `pages` directory to generate routes based on directory structure just like [nuxt](https://nuxtjs.org/).

## Navigation

This directory contains vertical nav & horizontal nav items. Items written in `src/navigation/vertical/index.ts` will be for vertical nav and items written in `src/navigation/horizontal/index.ts` will be for horizontal nav. Both files are imported in `src/layouts/default.vue`).

Related: [Fetching navigation items from database via API](#) <br>
Related: [How to create vertical navigation](#) <br>
Related: [How to create horizontal navigation](#)

## Pages

Contains your app pages. Just create a new file and new route will be auto generated based on file name and its placement in the `pages` directory.

:::details Show me basic example 👀

1. Create a new file in pages directory `src/pages/about.vue` with following content

   ```vue
   <template>
     <p>This is about page</p>
   </template>
   ```

2. Visit <http://localhost:5173>

✨ Route is auto generated based on your file name
:::

Related: [How to create a new page](/guide/how-to-create-a-new-page.html#creating-about-page)

## <!-- prettier-ignore-start -->Plugins

This directory contains plugins we used in our template.

## Router

This directory contains configuration related to router. It doesn't have any routes as they are auto generated but it has ACL configurations.

## Stores

This contains [pinia](https://pinia.esm.dev/) store. With our template we have used store in Calendar app and chat app.

## Styles

You can write your styles in this directory.

- `_variables.scss`: Use this file to override variables

- `styles.scss`: Use this to write your custom styles
