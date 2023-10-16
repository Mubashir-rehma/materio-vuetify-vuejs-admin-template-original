# Plugins

We have improved the way plugins are registered in our template. We now use [nuxt like](https://nuxt.com/docs/guide/directory-structure/plugins#creating-plugins) plugin registration. This makes it easier to register plugins and also makes it easier to use them in your code.

## Plugin Registration

We now uses [nuxt like](https://nuxt.com/docs/guide/directory-structure/plugins#creating-plugins) plugin registration. From now on, You just have to create a file inside `src/plugins` directory and export default a function from it. This function will have `app` as a parameter. You can use this `app` to register your plugin.

::: code-group

```ts [TS]
// File: src/plugins/vuetify.ts

import type { App } from 'vue'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ /* options */ })

// Register plugin using app.use() (like nuxt's `defineNuxtPlugin`)
export default function (app: App) {
  app.use(vuetify)
}
```

```js [JS]
// File: src/plugins/vuetify.js

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({ /* options */ })

// Register plugin using app.use() (like nuxt's `defineNuxtPlugin`)
export default function (app) {
  app.use(vuetify)
}
```

:::

Our template will automatically register all the plugins from `src/plugins` directory that has function exported as default. If you want to also export some const then you can always use named export.

::: code-group

```ts [TS]
// File: src/plugins/vuetify.ts

import type { App } from 'vue'
import { createVuetify } from 'vuetify'

export const defaultTheme = 'dark' // [!code hl]

const vuetify = createVuetify({
    defaultTheme,
})

// Register plugin using app.use() (like nuxt's `defineNuxtPlugin`)
export default function (app: App) {
  app.use(vuetify)
}
```

```js [JS]
// File: src/plugins/vuetify.js

import { createVuetify } from 'vuetify'

export const defaultTheme = 'dark' // [!code hl]

const vuetify = createVuetify({
    defaultTheme,
})

// Register plugin using app.use() (like nuxt's `defineNuxtPlugin`)
export default function (app) {
  app.use(vuetify)
}
```

:::

Later in your code, you can import this const and use it.

```ts
import { defaultTheme } from '@/plugins/vuetify' // [!code focus]

console.log(defaultTheme) // dark
```

<br>

:::info
However this is completely optional from your side. You can still use the old way of registering plugins by importing plugin instance in `main.ts` and registering there using `app.use(someLibrary)`
:::

## Plugin Scanning Pattern

Our template will scan all top level files and `index.ts` placed in a directory in `src/plugins` directory.

Hence all below files will be registered as plugins if they have default export as function.

- `src/plugins/vuetify.ts`
- `src/plugins/vuetify/index.ts`

Below files will not 🙅🏻‍♂️ be registered as plugins even if they have default export as function:

- `src/plugins/vuetify/vuetify.ts`
- `src/plugins/vuetify/plugin/index.ts`
- `src/plugins/vuetify/plugin/vuetify.ts`

## Plugin Registration Priority

For maintaining the order while registering the plugins, you need to prefix the number before the file/directory name.

For instance, naming the router plugin file as `1.router` ensures that it will be registered first during the plugin registration and then all the plugins will be registered.

You can check our template's `src/plugins` directory,  we have given first priority to `1.router`  and second priority to `2.pinia.ts`. After registering this two plugins, other plugins will be registered.

## How it works?

All scanned plugins will get registered by below line in `main.ts`

```ts
// File: src/main.ts

import { registerPlugins } from '@core/utils/plugins'
import { createApp } from 'vue'
import App from '@/App.vue'

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app) // [!code focus]

// Mount vue app
app.mount('#app')
``
