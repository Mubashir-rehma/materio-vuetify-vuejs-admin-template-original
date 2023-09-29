# Data Fetching

We provide custom solution from your data fetching needs. In most of the case, we generally configure the fetching configuration like adding base URL for all of our API calls, setting headers, setting interceptors for Authentication, etc.

🚧 WIP

## Custom Fetching

### Problem

Assume, we created API endpoint for users and it's available at `/users` endpoint. Then, We had to make API call like this:

```ts
const { data } = await useFetch('https://localhost/api/users')
```

However, we have to repeat `https://localhost/api` for all of our API calls 😔

### Solution

With our template, You will get `useApi` & `$api` that is pre-configured with common configuration for data fetching.

`useApi` is configured version of:

- For Vue template => [VueUse](https://vueuse.org/)'s [`useFetch`](https://vueuse.org/core/useFetch/) & [native fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- For Nuxt template => [Nuxt](https://nuxt.com/)'s [`useFetch`](https://nuxt.com/docs/api/composables/use-fetch) & their [`$fetch`](https://nuxt.com/docs/api/utils/dollarfetch)

With our custom configuration, You can use `useApi` list a usual `useFetch` composable:

```ts
// No need to repeat `https://localhost/api` now
const { data } = await useApi('/users')
```

## Recommendation

First of all, We recommend you check out [how](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to use [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to make API calls.

After that,

- For Vue template, Check out the [useFetch](https://vueuse.org/core/useFetch/) composable documentation and understand the various options it provides.
- For Nuxt template, Checkout their docs on [Data Fetching](https://nuxt.com/docs/getting-started/data-fetching)  and [useFetch](https://nuxt.com/docs/api/composables/use-fetch).

## `useApi` vs `$api`

If you have checked our source code then you might notice that we used `useApi` & `$api` together.

For Nuxt,

Nuxt developers already knows the difference between `useApi` *(useFetch under the hood)* & `$api` *(`$fetch` under the hood)*.

:::info Straight from the Nuxt docs
`useFetch` is the most straightforward way to handle data fetching in a component setup function.

On the other hand, when wanting to make a network request based on user interaction, `$fetch` is almost always the right handler to go for.
:::

For Vue,

We initially decided to use `$api`(a custom instance of [`ofetch`](https://github.com/unjs/ofetch)) for data fetching due to the following reasons.

1. **Efficient JSON Parsing**: `$api` intelligently parse JSON and native values from responses.
2. **Error Handling**: It automatically triggers error handling when `response.ok` is `false`, providing users with clear error messages and concise stack traces for quick issue resolution.

However, when it comes to the initial data fetching, we found that [`useFetch`](https://vueuse.org/core/useFetch/) offers distinct advantages. It enables us to effortlessly refresh data when the URL changes.So, We have created `useApi` as a custom instance of [`useFetch`](https://vueuse.org/core/useFetch/) from `vueUse` library.This provides Vue users the flexibility to choose between `useApi` and `$api` based on their specific needs.

However vue user have flexibility to choose any of the `useApi` and `$api` for data fetching, but we recommend to use `useApi` for initial data fetching and `$api` for fetching data on the interactions like update, delete.
