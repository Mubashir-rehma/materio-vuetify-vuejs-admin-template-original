# Layout types

Our template's layout system provides maximum flexibility to the developer. We use [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) plugin to create layouts. With this plugin, all your layouts should be created in `@/layouts` directory.

Template comes with two types of layouts:

## 1. Default layout

> File: `@/layouts/default.vue`

This layout is used by default when you create a new page. It is created on top of components provided by layouts plugin. Code for this layout is well documented hence making it self explanatory.

Default layout have two variations:

### 1. Vertical nav layout

> File: `@/layouts/components/DefaultLayoutWithVerticalNav.vue`

This component uses `layouts` plugin's `VerticalNavLayout` component.

`VerticalNavLayout` component provides four slots:

1. `navbar` scoped slot
2. `content-loading` slot
3. `default` slot
4. `footer` slot

**Related code examples:**

- [Customize navbar](/code-examples/layout/customize-navbar.md)
- [Customize footer](/code-examples/layout/customize-footer.md)

### 2. Horizontal nav layout

> File: `@/layouts/components/DefaultLayoutWithHorizontalNav.vue`

This component uses `layouts` plugin's `HorizontalNavLayout` component.

`HorizontalNavLayout` component provides four slots:

1. `navbar` slot
2. `content-loading` slot
3. `default` slot
4. `footer` slot

**Related code examples:**

- [Customize navbar](/code-examples/layout/customize-navbar.md)
- [Customize footer](/code-examples/layout/customize-footer.md)

## 2. Blank layout

Blank layout is really simple. It just have `div` wrapper for adding layout classes and default slot to render content.

This is useful if you want to create a page without any layout components. Best candidates can be login pages, 404 pages, etc.