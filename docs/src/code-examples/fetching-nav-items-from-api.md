# Fetching nav items from API

In this code example, We will look at how to fetch nav items from API and render it in our layout.

<!-- TODO: Use starter-kit for code examples -->

:::tip INFO
We will use fake-api to simulate API response.
:::

## Fake API endpoint

For adding a new fake API endpoint let's create a new directory `navigation` in `src/plugins/fake-api/handlers` for handlers. Create two files inside this directory `index.ts` and `db.ts`.

In `db.ts`, we will place our navigation data

```ts

// file: db.ts

export const db = {
  navItems: [
    { heading: 'Dashboards' },
    {
      title: 'Home',
      icon: 'mdi-home',
      to: 'index',
      action: 'read',
      subject: 'Auth',
    },
  ]
}

```

In `index.ts` we wil define our handler.

```ts

import { rest } from 'msw'
import { db } from './db'

export const handlerNavItems = [
  rest.get(('/api/nav-items'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ navItems: db.navItems}),
    )
  }),
]

```

## Using nav items from API

Now let's consume above API endpoint and pass response to our nav menu so it renders nav items from our API. For this we will update the `src/layouts/default.vue`

```vue
<script lang="ts" setup>
import navItems from '@/navigation/vertical' // [!code --]
const navItems = ref([])  // [!code ++]
const { data:navItems, error } = await useApi('/nav-items') // [!code ++]
</script>
```

Next, Please make sure you are passing `navItems` in `nav-items` prop of `DefaultLayoutWithVerticalNav` component.

```vue
<DefaultLayoutWithVerticalNav :nav-items="navItems">
```

<br>

That's all 🥳
