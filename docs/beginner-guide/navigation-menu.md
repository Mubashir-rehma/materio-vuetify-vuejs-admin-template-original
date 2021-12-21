# Navigation Menu

In this page you will learn how to add navigation items in vertical navigation & horizontal navigation.

[[toc]]

## Glossary

| Level                     | Description                                         |
| :------------------------ | :-------------------------------------------------- |
| 1<sup>st</sup> level item | If item don't have any parents                      |
| 2<sup>nd</sup> level item | If item has single parent                           |
| 3<sup>rd</sup> level item | If item has parent which in turn has another parent |
| ...and so on              |                                                     |

:::details view code snippet with levels as comments
<<< @/code-snippets/beginner-guide/navigation-menu/item-level-demo.js
:::

## Vertical nav

You can add vertical nav items via `/src/navigation/vertical/index.{ts|js}` file.

This file should export and array of items so without any items file should look like below:

```js
export default []
```

:::warning Writing icon names in ts or js file
Adding `/* @unocss-include */` comment on top is required to allow [UnoCSS](https://github.com/antfu/unocss) scan this file for icons.
:::

### Vertical nav link

Check below code snippet to add nav link:

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-link.ts
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-link.js
</code-block>
</code-group>

:::tip
`icon` property is not required if link is inside group (not first level item).
:::

### Vertical nav group

Check below code snippet to add nav group:

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-group.ts{11-24}
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-group.js{9-22}
</code-block>
</code-group>

:::tip
`icon` property is not required if group is inside another group (not first level item).
:::

### Vertical nav section title

Check below code snippet to add nav section title:

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-section-title.ts{6-8}
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-section-title.js{4-6}
</code-block>
</code-group>

## Horizontal nav

You can add horizontal nav items via `/src/navigation/horizontal/index.{ts|js}` file.

This file should export and array of items so without any items file should look like below:

```js
export default []
```

:::warning Writing icon names in ts or js file
Adding `/* @unocss-include */` comment on top is required to allow [UnoCSS](https://github.com/antfu/unocss) scan this file for icons.
:::

### Horizontal nav link

Check below code snippet to add link:

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/horizontal-nav-link.ts
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/horizontal-nav-link.js
</code-block>
</code-group>

:::tip
`icon` property is not required if link is on third level.
:::

### Horizontal nav group

Check below code snippet to add group:

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/horizontal-nav-group.ts{11-26}
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/horizontal-nav-group.js{9-24}
</code-block>
</code-group>

:::tip
`icon` property is not required if group is on third level.
:::

### Badges

Vertical nav link & group supports adding badges. Badges are rendered on right side of item title.

You can optionally pass `badgeContent` & `badgeClass` property to add badge to the item.

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-badge.ts{10-11,16-17}
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-badge.js{8-9,14-15}
</code-block>
</code-group>

:::tip
`badgeContent` property is enough to render badge, `badgeClass` is optional.
:::

### Disabling nav items

You can disable any item by simply setting `disable` property to `true`

<code-group>
<code-block title="TS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-link-disabled.ts{10}
</code-block>

<code-block title="JS">
<<< @/code-snippets/beginner-guide/navigation-menu/vertical-nav-link-disabled.js{8}
</code-block>
</code-group>
