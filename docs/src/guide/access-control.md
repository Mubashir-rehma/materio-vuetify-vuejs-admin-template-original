# Access control

We use [CASL](https://casl.js.org/) package to provide access control in our template.

CASL may look complex at first so please make sure you first read docs carefully and understand base logic of Access Control to proceed further.

## Overview

You can find access control related configuration in `src/plugins/casl` directory.

<!-- TODO: Improve this. It looks boring. -->

- `ability.ts`: It exports the `Ability` instance of CASL. It will read initial ability from themeConfig. It will also try to fetch any ability from localStorage and if found it will use ability fetched from localStorage rather than initial ability. This will help in persisting the ability between browser window reload/close.
- `AppAbility.ts`: This is only available in our TypeScript template. It contains available actions & subjects in your app.
- `shims-ability.d.ts`: This is only available in our TypeScript template. This file is shims file for CASL.
- `useAppAbility.ts`: This is only available in our TypeScript template. This file contains `useAppAbility` composable for ease so you don't have to import `AppAbility` from `AppAbility.ts` file.

:::tip `useAbility` vs `useAppAbility`
CASL provides `useAbility` composable but it requires providing `AppAbility` type as generic so when you use it you need two imports like `useAppAbility.ts` file.

Whereas, with `useAppAbility` you need single import statement. Hence, it is **recommended** to use `useAppAbility` instead of `useAbility`.

This is straight from official CASL docs [here](https://casl.js.org/v6/en/package/casl-vue#composition-api).
:::

## Using ACL

If you want show/hide anything based on user's ability, you can use global `$can` property.

Let's create a new page with below content:

::: code-group

```vue [TS]
<script lang="ts" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'AclDemo',
  },
})

const user = {
  action: 'read' as const,

  // `subject` property type is `Subjects` ("src/plugins/casl/AppAbility.ts")
  subject: 'Admin' as const,
}

</script>

<template>
  <p v-if="$can(user.action, user.subject)">
    We have earned 50k more compared to previous week
  </p>
  <p v-else>
    You don't have enough permission to view the finance data
  </p>
</template>

```

```vue [JS]
<script lang="ts" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'AclDemo',
  },
})

const user = {
  action: 'read',
  subject: 'Admin',
}
</script>

<template>
  <p v-if="$can(user.action, user.subject)">
    We have earned 50k more compared to previous week
  </p>
  <p v-else>
    You don't have enough permission to view the finance data
  </p>
</template>
```

:::

## Updating ability

### Using new ability

You will definitely update ability in your app, most probably after login. To update the ability you have to use `useAbility` composable like below:

::: code-group

```ts [TS]
import { useAbility } from '@casl/vue'
import type { AppAbility } from '@/plugins/casl/AppAbility'

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility<AppAbility>()

// Update the ability using `update` method
ability.update(userAbilities)
```

```js [JS]
import { useAbility } from '@casl/vue'

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update(userAbilities)
```

:::

That's all for updating ability. However, this ability update will get lost on page reload. To persist ability between page reload/close, you have to add ability to localStorage:

::: code-group

```ts{16-17} [TS]
import { useAbility } from '@casl/vue'
import type { AppAbility } from '@/plugins/casl/AppAbility'

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility<AppAbility>()

// Update the ability using `update` method
ability.update(userAbilities)

// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
```

```js{15-16} [JS]
import { useAbility } from '@casl/vue'

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update(userAbilities)

// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
```

:::

:::warning
When you store user ability in localStorage, localStorage key name must be `userAbilities`. If you want to use different key name, make sure it is same as you have used in `src/plugins/casl/ability.ts` for retrieving user ability.
:::

### Resetting to initial ability

On logout we need to reset ability to initial ability. Resetting ability is same as updating to new ability, only difference is that we will pass `initialAbility` we have in `@/plugins/casl/ability` to `ability.update` method.

::: code-group

```ts{3,9,12} [TS]
import { useAbility } from '@casl/vue'
import type { AppAbility } from '@/plugins/casl/AppAbility'
import { initialAbility } from '@/plugins/casl/ability'

// Use composable
const ability = useAbility<AppAbility>()

// Update the ability using `update` method
ability.update(initialAbility)

// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(initialAbility))
```

```js{2,8,11} [JS]
import { useAbility } from '@casl/vue'
import { initialAbility } from '@/plugins/casl/ability'

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update(initialAbility)

// Adding ability to localStorage so template can pick it up on page reload
localStorage.setItem('userAbilities', JSON.stringify(initialAbility))
```

:::

## Route Protection

We have configured [`router.beforeEach`](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) hook so users can only visit the route they have ability to. You can check its source code in `src/router/index.ts` file.

For protecting routes based on ability, all you have to do is add meta to `definePage` macro block.

In [How to create a new page](/guide/how-to-create-a-new-page.md) guide we created a dashboard analytics page. Let's add `action` & `subject` meta to this route by updating the file as below:

<!-- prettier-ignore-start -->
```vue{5-9}
<script lang="ts" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'Web',
  },
})
</script>

<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>

```
<!-- prettier-ignore-end -->

This will only allow user to view the analytics dashboard if user have above mentioned ability.

Yes, That's it. All you need is these two meta for preventing access to your private route.

### Omitting Defining `action` & `subject` for route

You might have noticed that we haven't defined `action` & `subject` meta for pages/routes. This is because in our demo, **admin user** have below ability specified:

```js
{
  action: 'manage',
  subject: 'all',
}
```

`manage` and `all` are special keywords in CASL. manage represents any action and all represents any subject.

If user have above mentioned ability and you don't define `action` & `subject` meta for route, then user can still access all routes.

Hence, we omitted defining `action` and `subject` meta for pages/routes in our source code.

## Show/Hide navigation items

Our template allows hiding & showing navigation items based on user ability.

When you define navigation items in `src/navigation/{vertical|horizontal}/index.ts` along with properties like `title`, you can write `action` & `subject` for hiding item if user don't have enough ability.

::: code-group

```ts{10-11} [TS]
import type { VerticalNavItems } from '@layouts/types'

export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    action: 'read',
    subject: 'Post',
  },
] as VerticalNavItems
```

```js{8-9} [JS]
export default [
  {
    title: 'Home',
    icon: 'i-mdi-home',
    to: 'index',
    action: 'read',
    subject: 'Post',
  },
]
```

:::

### Omitting defining resource and action for nav groups

You can optionally define resource & action on navigation groups.

Navigation groups are intelligently hide and show them selves based on their children.

:::tip NOTE
"can be viewed" means ACL ability is resolved to true and user can view it. "hidden" means ACL ability is resolved to false and user can't view it.
:::

1. If group can be viewed can any of it's child can also be viewed then group will be visible.
2. If Group can be viewed and all it's children are hidden then group also got hidden.
3. If Group can't be viewed then in all cases group and it's children will be hidden. It will be hidden even if any of or all of it's children can be viewed.

:::warning CAVEAT
As header in vertical navigation menu is independent of it's child items if you want to hide header if all it's below items are hidden then you need to specify resource & action as well with other following items.
:::

**Related Pages**

- [Understand Authentication & ACL - First Visit](../articles/understanding-authentication-and-acl-first-visit-part-1.md)
- [Understanding Login Flow](../articles/understanding-authentication-and-acl-login-flow-part-2.md)
