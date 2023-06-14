# How to create a new page

Just create new file in `/src/pages` directory and you will have new page with auto generated route.

:::warning
Pages must have a single root element to allow route transitions between pages.
:::

## Creating about page <Badge text="/about" vertical="middle" />

Create a new file named `about.vue` in `/src/pages` directory with the following content:

```vue
<template>
  <p>This is about page</p>
</template>
```

It will auto register the route with `/about` url. Navigate to <http://localhost:5173/about> and you will find the rendered content of `about.vue` file.

> Route name will be `about`

## URL with a dash <Badge text="/about-us" vertical="middle" />

Let's say we don't want url to be `/about`, we want `/about-us`. For this just rename the file name from `about.vue` to `about-us.vue` and url for this file will be <http://localhost:5173/about-us>

> Route name will be `about-us`

## Subpath URL <Badge text="/dashboard/analytics" vertical="middle" />

To create a URL which has something like `http://localhost:8080/dashboard/analytics`, we need to create `dashboard` directory and have to place `analytics.vue` file inside `dashboard` directory.

Let's create a new directory named `dashboard` in `/src/pages` directory. Inside this directory let's create a new file `analytics.vue` with the following content.

```vue
<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>
```

With this, it will generate route with the URL <http://localhost:5173/dashboard/analytics>.

> Route name will be `dashboard-analytics`

## Dynamic URL <Badge text="/users/<id>" vertical="middle" />

Generally we want to create a page which can accept id as parameter and we want to fetch data according to that id. This is called [dynamic route](https://next.router.vuejs.org/guide/essentials/dynamic-matching.html) in terms of vue-router.

Let's assume we want to create a dynamic route like `http://localhost:8080/users/<id>`, where `id` can be any number.

For this create new directory named `users` in `/src/pages` and inside `/src/pages/users` create a new file with the name `[id].vue`. Place below content inside this newly create file:

```vue
<template>
  <div>
    <p>This is user details page.</p>
    <p>Current user id: {{ $route.params.id }}</p>
  </div>
</template>
```

With this, if you visit <http://localhost:5173/users/1> it will render `Current user id: 1`. Here, 1 is taken from URL.

If you visit <http://localhost:5173/users/2> then it will render `Current user id: 2`. Simple isn't it. 😊

> Route name will be `users-id`

## 404 page - Catching all URLs

For this all you have to do is create `[...404].vue` file inside `/src/pages` directory.

```vue
<template>
  <div>
    <p>Oops, You are lost</p>
    <router-link tag="p" to="/">Go back home</router-link>
  </div>
</template>
```

Now, your 404 page is ready. Visit any URL you haven't created (i.e. <http://localhost:5173/non-existent-page>) and you will see the above content rendered.

> Because we written `404` after ellipsis, route name will be `404`. If we created file with `[...all].vue` then route name will be `all`.

## Using different layout

The pages we created so far are rendered in `default` layout (`/src/layouts/default.vue`).

We want to render 404 page in blank layout instead of default layout (of course we don't want vertical nav in 404 page).

For this you have to create `route` block in your vue file to define layout. Update `/src/pages/[...404].vue` as below:

<!-- prettier-ignore-start -->
```vue
<template>
  <div>
    <p>Oops, You are lost</p>
    <router-link tag="p" to="/">Go back home</router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
```
<!-- prettier-ignore-end -->

## Plugin docs

Routes are auto generated & layouts are auto wrapped using below two plugins:

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

Please read official docs of both plugins by visiting above two links for detailed docs.
