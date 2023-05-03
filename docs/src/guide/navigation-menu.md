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
<<< @/code-snippets/guide/navigation-menu/item-level-demo.js
:::

## Vertical nav

You can add vertical nav items via `/src/navigation/vertical/index.ts` file.

This file should export and array of items so without any items file should look like below:

```js
export default []
```

### Vertical nav link

Check below code snippet to add nav link:

::: code-group

<<< @/code-snippets/guide/navigation-menu/vertical-nav-link.ts [TS]

<<< @/code-snippets/guide/navigation-menu/vertical-nav-link.js [JS]

:::
