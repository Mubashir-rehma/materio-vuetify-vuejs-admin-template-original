# How to create a new page

Just create new file in `src/pages` directory and you will have new page with auto generated route.

:::info
Vue uses [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) plugin and nuxt has its own mechanism to auto generate routes.
:::

:::tip
You can inspect all the generated routes in the vite dev tool or nuxt dev tool.
:::

<!-- :::warning
Pages must have a single root element to allow route transitions between pages.
::: -->

## Creating about page <Badge text="/about" vertical="middle" />

Create a new file named `about.vue` in `src/pages` directory with the following content:

```vue
<template>
  <p>This is about page</p>
</template>
```

It will auto register the route with `/about` url. Navigate to that route and you will find the rendered content of `about.vue` file.

## URL with a dash <Badge text="/about-us" vertical="middle" />

Let's say we don't want url to be `/about`, we want `/about-us`. For this just rename the file name from `about.vue` to `about-us.vue`.

## Subpath URL <Badge text="/dashboard/analytics" vertical="middle" />

To create a URL which has something like `/dashboard/analytics`, we need to create `dashboard` directory and have to place `analytics.vue` file inside `dashboard` directory.

Let's create a new directory named `dashboard` in `src/pages` directory. Inside this directory let's create a new file `analytics.vue` with the following content.

```vue
<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>
```

With this, it will generate route with the URL `/dashboard/analytics`.

## Dynamic URL <Badge text="/users/<id>" vertical="middle" />

Generally we want to create a page which can accept id as parameter and we want to fetch data according to that id. This is called [dynamic route](https://next.router.vuejs.org/guide/essentials/dynamic-matching.html) in terms of vue-router.

Let's assume we want to create a dynamic route like `/users/<id>`, where `id` can be any number.

For this create new directory named `users` in `src/pages` directory and inside `pages/users` create a new file with the name `[id].vue`. Place below content inside this newly create file:

```vue
<template>
  <div>
    <p>This is user details page.</p>
    <p>Current user id: {{ $route.params.id }}</p>
  </div>
</template>
```

With this, if you visit `/users/1` it will render `Current user id: 1`. Here, "1" is taken from URL.

If you visit `/users/2` then it will render `Current user id: 2`. Simple isn't it. 😊

## 404 page - Catching all URLs

In nuxt, This is handled via the `error.vue` component.

In Vue, we can create a 404 page by creating a file named `[...404].vue` inside `src/pages` directory.

```vue
<template>
  <div>
    <p>Oops, You are lost</p>
    <RouterLink tag="p" to="/">Go back home</RouterLink>
  </div>
</template>
```

Now, your 404 page is ready. Visit any URL you haven't created (i.e. `/non-existent-page`) and you will see the above content rendered.

## Using different layout

The pages we created so far are rendered in `default` layout (`src/layouts/default.vue`).

We want to render 404 page in blank layout instead of default layout (of course we don't want vertical nav in 404 page).

For this you have to use `definePage` macro in your vue file to define layout. Update `src/pages/[...404].vue` as below:

<!-- prettier-ignore-start -->
```vue
<script lang="ts" setup>
definePage({
  meta: {
    layout: 'blank',
  },
})

</script>
<template>
  <div>
    <p>Oops, You are lost</p>
    <RouterLink tag="p" to="/">Go back home</RouterLink>
  </div>
</template>

```
<!-- prettier-ignore-end -->

## Plugin docs

In Vue, Routes are auto generated & layouts are auto wrapped using below two plugins:

- [unplugin-vue-router](https://github.com/posave/unplugin-vue-router)
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

Please read official docs of both plugins by visiting above two links for detailed docs.
