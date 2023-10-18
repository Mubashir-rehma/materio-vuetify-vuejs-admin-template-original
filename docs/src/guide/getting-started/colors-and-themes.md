# Colors & Themes

You can customize colors via theme in Vuetify. You can customize them as mentioned in their [docs](https://next.vuetifyjs.com/en/features/theme/).

Here, we will go over how you can customize the theme/colors in our template. Themes are defined in `src/plugins/vuetify/theme.ts`.

## Updating colors

To update primary colors to something else navigate to above mentioned vuetify plugin theme file and update primary to desired colors in themes you like.

```ts
theme: {
  themes: {
    light: {
      dark: false,
      colors: {
         'primary': '#a169ff', // [!code --]
         'primary': '#000', // [!code ++]
          // other...
      },
      dark: {
        dark: true,
        colors: {
           'primary': '#a169ff', // [!code --]
           'primary': '#000', // [!code ++]
            // other...
        },
      },
    },
  },
}
```

In above code snippet we just updated the primary color in light & dark theme. Now when you run the project `#000` color will be your primary color.

**Related pages**

- [`ThemeSwitcher` component](../core/components/theme-switcher)
