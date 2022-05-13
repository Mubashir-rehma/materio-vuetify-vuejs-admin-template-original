# Fetching nav items from API

In this code example. We will look at how to fetch nav items from API and render it in our layout.

<!-- TODO: Use starter-kit for code examples -->

:::tip INFO
We will use @fake-db to simulate API response.
:::

## Fake API endpoint

As this fake API we won't create a new file we will just update an existing file. Let's add fake API endpoint in `src/@fake-db/db.ts` file.

<code-group>
<code-block title="TS">

```ts{4-19}
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

</code-block>

<code-block title="JS">

```js{4-19}
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

</code-block>
</code-group>

## Using nav items from API

Now let's consume above API endpoint and pass response to our nav menu so it renders nav items from our API. For this we will update the `src/layouts/default.vue`


```diff
  <script lang="ts" setup>
- import navItems from '@/navigation/vertical'
+ import axios from '@axios'

+ const navItems = ref([])
+ axios.get('nav-items')
+   .then(({ data }) => {
+     navItems.value = data
+   })
  </script>
```

Next, Please make sure you are passing `navItems` in `nav-items` prop of `DefaultLayoutWithVerticalNav` component.

```vue
<DefaultLayoutWithVerticalNav :nav-items="navItems">
```

<br>

That's all 🥳
