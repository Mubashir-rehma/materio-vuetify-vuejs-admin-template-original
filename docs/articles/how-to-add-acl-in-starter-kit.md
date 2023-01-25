# How to add ACL in starter-kit

::: tip
We suggest you first check out ["Understanding Authentication and ACL"](/articles/understanding-authentication-and-acl-first-visit-part-1) article.
:::

## Add CASL

First of all, import and use ACL plugin in `main.ts` file.

```ts
// main.ts

import ability from '@/plugins/casl/ability'
import { abilitiesPlugin } from '@casl/vue'

// other code

app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})
```

Make sure to configure `@/plugins/casl/ability.ts` according to your usage later.

## Add route protection

To add route protection, we need to leverage vur-router's [beforeEach](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) navigation guard.

::: warning
Make sure `router.beforeEach` is after you declared `router` const and before you export router.
Please refer to full version if you have any query.
:::

```ts
import { isUserLoggedIn } from './utils'
import { canNavigate } from '@layouts/plugins/casl'

router.beforeEach(to => {
  const isLoggedIn = isUserLoggedIn()

  if (canNavigate(to)) {
    if (to.meta.redirectIfLoggedIn && isLoggedIn)
      return '/'
  }
  else {
    if (isLoggedIn)
      return { name: 'not-authorized' }
    else
      return { name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
  }
})
```

Next, we will also have to add "Not authorized" page to redirect users who don't have enough abilities to visit the specific page. You can copy this page from full version and paste in exact same location as full version _(under `pages` directory)_.

We are done with route protection. 🥳

Now, you can add `action` & `resource` as route meta and ACL will work as expected. For more details please refer to [Router protection](/guide/access-control.html#route-protection) section in ACL guide.

## Showing/Hiding Navigation Item

Please refer to detailed guide on [this](/guide/access-control.html#show-hide-navigation-items) page.
