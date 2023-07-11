# Fetching nav items from API

In this code example. We will look at how to fetch nav items from API and render it in our layout.

<!-- TODO: Use starter-kit for code examples -->

:::tip INFO
We will use @fake-db to simulate API response.
:::

## Fake API endpoint

As this fake API we won't create a new file we will just update an existing file. Let's add fake API endpoint in `src/@fake-db/db.ts` file.

::: code-group

```ts{4-19} [TS]
import './jwt'
import mock from './mock'

const navData = [
  { heading: 'Dashboards' },
  {
    title: 'Home',
    icon: { icon: 'mdi-home'},
    to: 'index',
    action: 'read',
    subject: 'Auth',
  },
]

mock.onGet('/nav-items').reply(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [200, navData]
})

// forwards the matched request over network
mock.onAny().passThrough()
```

```js{4-19} [JS]
import './jwt'
import mock from './mock'

const navData = [
  { heading: 'Dashboards' },
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    action: 'read',
    subject: 'Auth',
  },
]

mock.onGet('/nav-items').reply(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [200, navData]
})

// forwards the matched request over network
mock.onAny().passThrough()
```

:::

## Using nav items from API

Now let's consume above API endpoint and pass response to our nav menu so it renders nav items from our API. For this we will update the `src/layouts/default.vue`

```vue
<script lang="ts" setup>
import navItems from '@/navigation/vertical' // [!code --]
import { axios } from '@axios' // [!code ++]
const navItems = ref([]) // [!code ++]
axios.get('nav-items') // [!code ++]
  .then(({ data }) => { // [!code ++]
    navItems.value = data // [!code ++]
  }) // [!code ++]
</script>
```

Next, Please make sure you are passing `navItems` in `nav-items` prop of `DefaultLayoutWithVerticalNav` component.

```vue
<DefaultLayoutWithVerticalNav :nav-items="navItems">
```

<br>

That's all 🥳
