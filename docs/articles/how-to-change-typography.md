# How to change typography

Vuetify uses [webfontloader](https://www.npmjs.com/package/webfontloader) for adding fonts to your app. You can find webfontloader file in `src/plugins/webfontloader.js`. Update the font to your desired fonts and add CSS to update the font family.

```diff
 export async function loadFonts() {
   const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')
 
   webFontLoader.load({
     google: {
-       families: ['Roboto:100,300,400,500,700,900&display=swap'],
+       families: ['Montserrat:100,300,400,500,700,900&display=swap'],
     },
   })
 }
```

Next, just update the the font family.

```css
html {
    font-family: "Montserrat", sans-serif;
}
```

It's done 🥂