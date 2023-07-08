# How to change typography

Vuetify uses [webfontloader](https://www.npmjs.com/package/webfontloader) for adding fonts to your app. You can find webfontloader file in `src/plugins/webfontloader.js`. Update the font to your desired fonts and add CSS to update the font family.

:::code-group

```ts [src/plugins/webfontloader.js]
export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
       families: ['Roboto:100,300,400,500,700,900&display=swap'], // [!code --]
       families: ['Montserrat:100,300,400,500,700,900&display=swap'], // [!code ++]
    },
  })
}
```

:::

Next, just update the the font family via vuetify variables:

:::code-group

```scss [src/assets/styles/styles.scss]
@use "vuetify/styles" as * with (
  $body-font-family: "Montserrat",
);
```

:::

It's done 🥂
