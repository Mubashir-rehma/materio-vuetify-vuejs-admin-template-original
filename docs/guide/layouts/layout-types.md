# Layout types

Our template's layout system provides maximum flexibility to the developer. We use [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) plugin to create layouts. With this plugin, all your layouts should be created in `@/layouts` directory.

Template comes with two types of layouts:

## 1. Default layout

> File: `@/layouts/default.vue`

This layout is used by default when you create a new page. It is created on top of components provided by layouts plugin. Code for this layout is well documented.

It has two variations:

### 1. Vertical nav layout

> File: `@/layouts/components/DefaultLayoutWithVerticalNav.vue`

This component uses `layouts` plugin's `VerticalNavLayout` component.

`VerticalNavLayout` component provides various slots to add desired content to the layout.

**Related code examples:**

- [Customize navbar](/code-examples/layout/customize-navbar.md)

### 2. Horizontal nav layout

> File: `@/layouts/components/DefaultLayoutWithHorizontalNav.vue`
