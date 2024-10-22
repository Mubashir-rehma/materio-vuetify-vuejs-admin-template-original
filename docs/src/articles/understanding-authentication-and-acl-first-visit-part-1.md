# Understand Authentication & ACL - First Visit (Part 1)

## 1. Vue Apps get loaded First visit

```html
<!-- file: index.html -->

<script  type="module"  src="src/main.ts"></script>
```

## 2. Read Ability from Cookies

```ts
// file: src/plugins/casl/index.ts
import type { Rule } from './ability'

const userAbilityRules = useCookie<Rule[]>('userAbilityRules')

```

To determine the abilities of the user, we can check for the presence of the `userAbilityRules` key and its value in cookie.

This is necessary because when a user logs in and then reloads the page, the assigned abilities are lost and need to be retrieved from storage. By storing the user's abilities in cookies, we can ensure that they are persisted even after the page is reloaded.

## 3. Define initialAbility

```ts
// file: src/plugins/casl/index.ts

import { createMongoAbility } from '@casl/ability'

const userAbilityRules = useCookie<Rule[]>('userAbilityRules')
const initialAbility = createMongoAbility(userAbilityRules.value ?? [])

```

After getting `userAbilityRules` from cookies, we will define `initialAbility` by passing `userAbilityRules` as parameter to `createMongoAbility` function. Here, please note that if we don't get `userAbilityRules` from cookies, we will pass an empty array to `createMongoAbility` function.

## 4. Initialize CASL

```ts
// file: src/plugins/casl/index.ts

import type { App } from 'vue'

import { createMongoAbility } from '@casl/ability'
import { abilitiesPlugin } from '@casl/vue'
import type { Rule } from './ability'

export default function (app: App) {
  const userAbilityRules = useCookie<Rule[]>('userAbilityRules')
  const initialAbility = createMongoAbility(userAbilityRules.value ?? [])

  app.use(abilitiesPlugin, initialAbility, { // [!code focus]
    useGlobalProperties: true, // [!code focus]                
  }) // [!code focus]          
}

```

This will initialize [`CASL`](https://casl.js.org/v6/en/package/casl-vue) with `initialAbility`.

## 5. App starts navigation

```ts
// file: src/main.ts

app.mount('#app')
```

Now, all plugins are loaded and Vue Router starts navigation.

## 6. Router's beforeEach guard (Routing ACL)

```ts
// file: src/router/guards.ts

router.beforeEach(to => { ... } )
```

When a user navigates to a new page in a Vue app, Vue Router will trigger [navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html) to check if the user is allowed to access the page. The [beforeEach](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) guard is one of these navigation guards.

Using this we are checking if the user has the necessary abilities to access the requested page. If the user does not have the enough abilities, the `beforeEach` guard will redirect them to an appropriate location (such as a "not authorized" page).

If the user has the enough abilities, the `beforeEach` guard will allow them to proceed to the requested page. This helps to ensure that users can only access pages that they are allowed to based on their abilities.

## 7. Checks for public route?

```ts
// file: src/router/guards.ts

if (to.meta.public)
  return
```

When user navigates to new page, we carefully verify the accessibility of routes designated as public. These routes, such as error pages (e.g., 404) under maintenance, etc. welcome both logged-in and non-logged-in users without any restrictions. So all users can freely explore content without encountering barriers.

## 8. Check user is logged in?

```ts
// file: src/router/guards.ts

const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)
```

To check if the user is logged in, we can check for the presence of `accessToken` and `userData` in cookie. If either of these values is missing, we can conclude that the user is not logged in and set `isLoggedIn` to `false`.

We will later use this variable in our navigation guard.

## 9. Redirect if accessing page that is forbidden for logged in users

```ts
// file: src/router/guards.ts

if (to.meta.unauthenticatedOnly) {
  if (isLoggedIn)
    return '/'
  else
    return undefined
}
```

However, there are certain pages in your app you want to restrict visiting after login. This pages includes Login, Register, Forgot password, etc.

To achieve this, we will use route meta `unauthenticatedOnly`. At the moment, user is logged in and if `unauthenticatedOnly` route meta is present in requested route then we will redirect user to home page.

This is useful for ensuring that logged in users cannot access pages such as the login or registration page, which they should not need to visit again once they are already logged in.

If a route's meta doesn't have `unauthenticatedOnly` set to `true`, then the user will be allowed to visit the page without any redirection occurring. This is common behavior when a user is logged in and trying to access pages that they are permitted to visit.

## 10. Redirect user on appropriate location

```ts
// file: src/router/guards.ts

if (!canNavigate(to) && to.matched.length) {
  return isLoggedIn
    ? { name: 'not-authorized' }
    : {
        name: 'login',
        query: {
          ...to.query,
          to: to.fullPath !== '/' ? to.path : undefined,
        },
      }
}
```

In this block, we checks whether the user has the capability to navigate to the requested route.

Next, we will check if user is logged in.

- If user is logged in that means, user is trying to access restricted page  after login and we will simply redirect user to not authorized page (_indicates user don't have enough abilities to visit the page_).
- If user is not logged in that means, user is trying to access page that is only for logged in users. Here, we will simply redirect user to login page so user can login. Moreover, we will take URL of request route and pass it as `to` query while redirect user to login page so we can redirect user to requested page after successful login.

Passing requested route's URL in `to` query param is useful in cases where someone sent link to some specific page (_e.g. invoice page_) and user directly tries to access it. In this case, user will get redirected to login page and after login we will redirect user to requested page (_in this example, invoide page_) instead of redirecting user to home page.

**Related Pages**

- [Access Control](/guide/access-control.md)
