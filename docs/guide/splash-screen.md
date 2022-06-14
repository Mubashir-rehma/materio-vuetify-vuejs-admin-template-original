# Splash screen

We provide splash screen to show initial loader until Vue app is ready.

## Loader

Loader is created using HTML & CSS. There's no Vue code. You can find loader markup in `/public/index.html` file.

## Loader color

Loader styles are imported from `/public/loader.css` file.

You can change loader color by updating hex value of `.effect-[1,2,3]`

```css{6}
.loading .effect-1,
.loading .effect-2,
.loading .effect-3 {
  /* other styles */
  /* We are updating loader color's hex value to `#c084fc` */
  border-inline-start: 3px solid #c084fc;
}
```

## Loader logo

We are also displaying logo above the loader. You can just change the logo by updating the `/public/logo.png` file. If your logo file has different name please update `/index.html` file accordingly.

## Theme

As splash screen is shown before vue is initialized we can't read the theme. Hence, we store the current theme's background color in localStorage.

Background color's localStorage key name is app title you set in themeConfig + `-initial-loader-bg`. e.g. If you set app title as "SalesMax" as your app title in themeConfig then localStorage key should be `SalesMax-initial-loader-bg`.

Hence, when you update the app title make sure to update it in `/index.html` like below to sync the theme between vue app and your splash screen.

```diff
- const loaderColor = localStorage.getItem('TemplateName-initial-loader-bg')
+ const loaderColor = localStorage.getItem('SalesMax-initial-loader-bg')
```
