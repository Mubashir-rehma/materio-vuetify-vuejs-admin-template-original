# Splash screen

We provide splash screen to show initial loader until Vue app is ready.

## Loader

Loader is created using HTML & CSS. There's no Vue code. You can find loader markup in `/public/index.html` file.

## Loader color

Loader styles are imported from `/public/loader.css` file.

Loader color is automatically set as a primary color of template's theme.

## Loader logo

We are also displaying logo above the loader.We have used SVG code for loader logo in `loading-logo` class of `/index.html` file.

To change the loader logo, you just need to replace your loader's SVG code with ours. If you are using an image file,replace the image import with SVG code.

## Theme

As splash screen is shown before vue is initialized we can't read the theme. Hence, we store the current theme's background color in localStorage.

Background color's localStorage key name is app title you set in themeConfig + `-initial-loader-bg`. e.g. If you set app title as "SalesMax" as your app title in themeConfig then localStorage key should be `SalesMax-initial-loader-bg`.

Hence, when you update the app title make sure to update it in `/index.html` like below to sync the theme between vue app and your splash screen.

```diff
- const loaderColor = localStorage.getItem('TemplateName-initial-loader-bg')
+ const loaderColor = localStorage.getItem('SalesMax-initial-loader-bg')
```
