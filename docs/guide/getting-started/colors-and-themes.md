# Colors & Themes

You can customize colors via theme in Vuetify. You can customize them as mentioned in theird [docs](https://next.vuetifyjs.com/en/features/theme/).

Here, we will go over how you can customize the theme/colors in our template. Themes are defined in `src/plugins/vuetify.ts`.

## Updating colors

To update primary colors to something else navigate to above mentioned vuetify plugin file and update primary to desired colors in themes you like.

```diff
 theme: {
   defaultTheme: localStorage.getItem(`${themeConfig.app.title}-theme`) || themeConfig.app.theme.value,
   themes: {
     light: {
       dark: false,
       colors: {
-         'primary': '#a169ff',
+         'primary': '#000',

       ...

       dark: {
         dark: true,
         colors: {
-           'primary': '#a169ff',
+           'primary': '#000',
```

In above cde snippet we just updated the primary color in light & dark theme. Now when you run the project `#000` color will be your primary color.

## Themes

With vuetify you are not limited to just light & dark. You can add as many themes as you like. In the same vuetify plugin file you can add or remove the themes.

For detailed docs on how to use themes please visit vuetify's official [docs](https://next.vuetifyjs.com/en/features/theme/).

**Related pages**

- [`ThemeSwitcher` component](/core/components/theme-switcher)
