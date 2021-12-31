# Access control

We use [CASL](https://casl.js.org/) package to provide access control in our template.

CASL may look complex at first so please make sure you first read docs carefully and understand base logic of Access Control to proceed further.

## Overview

You can find access control related configuration in `src/plugins/casl` directory.

<!-- TODO: Improve this. It looks boring. -->

- `ability.{ts|js}`: It exports the `Ability` instance of CASL. It will read initial ability from themeConfig. It will also try to fetch any ability from localStorage and if found it will use ability fetched from localStorage rather than initial ability. This will help in persisting the ability between browser window reload/close.
- `AppAbility.ts`: This is only available in our TypeScript template. It contains available actions & subjects in your app.
- `shims-ability.d.ts`: This is only available in our TypeScript template. This file is shims file for CASL.
- `useAppAbility.ts`: This is only available in our TypeScript template. This file contains `useAppAbility` composable for ease so you don't have to import `AppAbility` from `AppAbility.ts` file.

## Route Protection

We have configured [`router.beforeEach`](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) hook so users can only visit the route they have ability to. You can check its source code in `/src/router/index.ts` file.

For protecting routes based on ability, all you have to do is add meta to that route via [`route`](https://github.com/hannoeru/vite-plugin-pages#sfc-custom-block-for-route-data) block.

In [How to create a new page](/beginner-guide/how-to-create-a-new-page.md) guide we created a dashboard analytics page. Let's add `action` & `subject` meta to this route by updating the file as below:

<!-- prettier-ignore-start -->
```vue{5-9}
<template>
  <p>This is analytics page inside dashboard directory.</p>
</template>

<route lang="yaml">
meta:
  action: read
  subject: Web
</route>
```
<!-- prettier-ignore-end -->

This will only allow user to view the analytics dashboard if user have above mentioned ability.

Yes, That's it. All you need is these two meta for preventing access to your private route.

### Omitting Defining `action` & `subject` for route

If you do not define resource and action then only user with below ability will be able to visit the route:

```js
{
  action: 'manage',
  subject: 'all',
}
```

:::tip
`manage` and `all` are special keywords in CASL. manage represents any action and all represents any subject.
:::

So, in your project if you don't have any user with above mentioned ability and you don't define action and resource for route then no one will be able to visit that route ever.

:::tip NOTE
We have user (Admin user) with above mentioned ability in our demo. That's why we don't have to write action and resource on each route.
:::

## Show/Hide navigation items

Our template allows hiding & showing navigation items based on user ability.

When you define navigation items in `/src/navigation/{vertical|horizontal}/index.{ts|js}` along with properties like `title`, you can write `action` & `subject` for hiding item if user don't have enough ability.

<code-group>
<code-block title="TS">

```ts{10-11}
/* @unocss-include */

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

</code-block>

<code-block title="JS">

```js{8-9}
/* @unocss-include */

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

</code-block>
</code-group>

### Omitting defining resource and action for groups

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
