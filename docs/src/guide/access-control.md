# Access control

We use [CASL](https://casl.js.org/) package to provide access control in our template.

CASL may look complex at first so please make sure you first read docs carefully and understand base logic of Access Control to proceed further.

## Overview

You can find access control related configuration in `src/plugins/casl` directory.

<!-- TODO: Improve this. It looks boring. -->

- `index.ts`: It will read the abilities from `userAbilityRules` cookie and will define `initialAbility` using `userAbilityRules`. then, it will initialize `CASL` in our template with `initialAbility`.
- `ability.ts`: It exports the `Ability` instance of `CASL` for defining abilities. In typescript version, It also exports types for `Actions` and `Subjects`.
- `shims-ability.d.ts`: This is only available in our TypeScript template. This file is shims file for CASL.
- `useAbility.ts`:  This file provides `useAbility` composable for ease so you don't have to import `ability` from `ability.ts` file.

:::tip `useAbility`

By default, CASL provides a `useAbility` composable, but using it directly would require us to import a `ability` type from `ability.ts` file every time we use it. To avoid this, we've defined our custom `useAbility` composable in `useAbility.ts` file.

Now, whenever we need to use the `useAbility` in our templates, we simply import it from `useAbility.ts` file.This way, we don't have to worry about importing additional type  every time we work with abilities in our application.

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

That's all for updating ability. However, this ability update will get lost on page reload. To persist ability between page reload/close, you have to add ability to cookies:

::: code-group

```ts{16-17} [TS]

// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update(userAbilities)

// Adding ability to cookies so template can pick it up on page reload
useCookie('userAbilityRules').value = userAbilityRules

```

```js{15-16} [JS]
// You will get below object on login's successful API response
const userAbilities = [{
  action: 'read',
  subject: 'Admin',
}]

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update(userAbilities)

// Adding ability to cookie so template can pick it up on page reload
useCookie('userAbilityRules').value = userAbilityRules

```

:::

:::warning
When you store user ability in cookies, cookie key name must be `userAbilities`. If you want to use different key name, make sure it is same as you have used in `src/plugins/casl/index.ts` for retrieving user ability.
:::

### Resetting ability

On logout we need to reset ability. Resetting ability is same as updating to new ability, only difference is that we will pass empty array.

```ts

// Use composable
const ability = useAbility()

// Update the ability using `update` method
ability.update([]) // [!code hl]

// Remove "userAbilities" from cookie
useCookie('userAbilityRules').value = null

```

## Route Protection

We have configured [`router.beforeEach`](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) hook so users can only visit the route they have ability to. You can check its source code in `src/router/index.ts` file.

For protecting routes based on ability, all you have to do is add meta to `definePage` macro block.

In [How to create a new page](/guide/how-to-create-a-new-page.md) guide we created a dashboard analytics page. Let's add `action` & `subject` meta to this route by updating the file as below:

:::code-group

<!-- prettier-ignore-start -->
```vue{2-7} [Vue]
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

<!-- prettier-ignore-start -->
```vue{2-5} [Nuxt]
<script lang="ts" setup>
definePageMeta({
  action: 'read',
  subject: 'Web',
})
</script>

<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>

```
<!-- prettier-ignore-end -->

:::

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
