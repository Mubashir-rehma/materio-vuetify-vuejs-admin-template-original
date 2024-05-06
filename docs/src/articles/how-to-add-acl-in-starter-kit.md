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
import { canNavigate } from '@layouts/plugins/casl'

router.beforeEach(to => {
  const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

  if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
  }

  if (!canNavigate(to) && to.matched.length) {
      /* eslint-disable indent */
      return isLoggedIn
        ? { name: 'not-authorized' }
        : {
            name: 'login',
            query: {
              ...to.query,
              to: to.fullPath !== '/' ? to.path : undefined,
            },
          }
      /* eslint-enable indent */
    }
})
```

Next, we will also have to add "Not authorized" page to redirect users who don't have enough abilities to visit the specific page. You can copy this page from full version and paste in exact same location as full version _(under `pages` directory)_.

We are done with route protection. 🥳

Now, you can add `action` & `resource` as route meta and ACL will work as expected. For more details please refer to [Router protection](/guide/access-control.html#route-protection) section in ACL guide.

## Showing/Hiding Navigation Item

Please refer to detailed guide on [this](/guide/access-control.html#show-hide-navigation-items) page.
