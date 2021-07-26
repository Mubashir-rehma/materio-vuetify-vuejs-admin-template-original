# Access Control (ACL)

In this page you will understand usage of ACL in our template and how you can use it.

[FAQ: Authentication/ACL gives "Unexpected token u in JSON at position 0"](/faq/#authentication-acl-gives-unexpected-token-u-in-json-at-position-0)

[FAQ: ACL - I have role based system for access control instead ability based](/faq/#acl-i-have-role-based-system-for-access-control-instead-ability-based)

## Overview

Materio uses [CASL](https://casl.js.org) package for providing access control. Which is future oriented (Also supports Vue 3) and is more detailed on Access Control.

You can find docs for CASL [here](https://casl.js.org/v5/en/guide/intro).

CASL may look complex at first so please make sure you first read their docs carefully and understand base logic of Access Control to proceed further.

::: tip INFO
We used [JSON objects](https://casl.js.org/v5/en/guide/define-rules#json-objects) for ability. We are getting user ability in response upon login and updating it once user get logged in.
:::

## ACL Flow

You can find CASL configuration in `src/plugins/acl` folder. Let's explore what each file contains:

- **ability.js**: This file exports ACL ability
- **config.js**: ACL configuration. Currently, contains initial ability of user.
- **index.js**: Main ACL file for injecting ACL in Vue.
- **routeProtection.js**: Route protection files.

::: warning
Our current implementation of CASL/ACL stores the user ability in localStorage to keep it persist between browser refreshes/close. Ability array is stored using the key `userAbility` in localStorage.
:::

### ability.js

It exports current user's ability. If user is not logged in or user's ability isn't retrieved from localStorage then it uses `initialAbility` defined in `config.js` file.

Once user logs in ability is updated using `this.$ability.update(newAbility)`. Sample newAbility array:

```js
const newAbility = [
  {
    action: 'read',
    subject: 'User',
  },
]
```

Also, this same ability is stored in localStorage under `userAbility` key.

```js
{
  "action": "manage",
  "subject": "all"
}
```

::: tip
We are getting user ability on refresh from localStorage using `userAbility` key. If you have different approach for storing and retrieving ability then please update `src/libs/acl/ability.js` file and files mentioned in [Authentication](/guide/development/authentication.md) page.
:::

## Route Protection

You can protect your route from being visited by other users through as well. We already configured `router.beforeEach` hook to redirect user to not authorized page if user don't have ability for that route. All you have to do is use route meta to define user ability.

```js{6,7}
{
  path: '/finance-summary',
  name: 'finance-summary',
  component: () => import('@/views/FinanceDetails.vue'),
  meta: {
    resource: 'Finance',
    action: 'read',
  },
},
```

Here, `resource` refers to `subject` in CASL [docs](https://casl.js.org/v5/en/guide/intro#basics).

Once you define ability for route using meta, if user don't have defined ability for visiting route then it will get redirected to not authorized page.

If user is not logged in and try to visit the route with ability which user don't have then user will get redirected to login page instead of not authorized page.

### Omitting Defining `resource` and `action` for route

If you do not define `resource` and `action` then only user with below ability will be able to visit the route:

```js
{
  action: 'manage',
  subject: 'all',
}
```

::: tip
`manage` and `all` are special keywords in CASL. `manage` represents any action and `all` represents any subject.
:::

So, in your project if you don't have any user with above mentioned ability and you don't define `action` and `resource` for route then **no one** will be able to visit that route ever.

::: tip NOTE
We have user (Admin user) with above mentioned ability in our demo. That's why we don't have to write `action` and `resource` on each route.
:::

## Show/Hide Navigation Items

Besides route protection you can also show/hide navigation items based on user ability.

Besides existing options provided by navigation items there's two more option you can specify if you use ACL.

- **resource**: This refers to subject in CASL docs
- **action**: This is action for ability.

Add these two options in your navigation item to show/hide navigation items based on user ability.

### Omitting defining `resource` and `action` for groups

You can optionally define `resource` & `action` on navigation item type which have children:

- Vertical Navigation Menu Group
- Horizontal Navigation Menu Group
- Horizontal Navigation Menu Header Group

e.g. If you have vertical navigation menu group and your provided both options for every group child and you want to hide group if all it's child don't have ability then don't worry about adding both option in menu group options. We already handled hiding group if none of it's child is visible. Means, We will hide group if there's no child to render due to lack of ability.

```js
export default [
  {
    title: 'Invoice',
    icon: mdiFile,

    /** Both group child have `resource` and `action` defined
     * So, If I omit defining `resource` and `action` for group
     *    => then group will be hidden if both child are hidden
     *
     * Conclusion: You can omit defining `resource` and `action` for group if you want this kind of behavior
     */
    children: [
      {
        title: 'List',
        route: 'invoice-list',
        resource: 'Invoice',
        action: 'read',
      },
      {
        title: 'Trash',
        route: 'invoice-trash',
        resource: 'Invoice',
        action: 'read',
      },
    ],
  },
]
```

#### Group & ACL scenarios

::: tip NOTE
"can be viewed" means ACL ability is resolved to true and user can view it.
"hidden" means ACL ability is resolved to false and user can't view it.
:::

1. If group can be viewed can any of it's child can also be viewed then group will be visible.
2. If Group can be viewed and all it's children are hidden then group also got hidden.
3. If Group can't be viewed then in all cases group and it's children will be hidden. It will be hidden even if any of or all of it's children can be viewed.

Please note this scenarios apply to all three group types of navigation item:

- Vertical Navigation Menu Group
- Horizontal Navigation Menu Group
- Horizontal Navigation Menu Header Group

::: warning CAVEAT
As section title in vertical navigation menu is independent of it's child items if you want to hide header if all it's below items are hidden then you need to specify `resource` & `action` as well with other following items.
:::
