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

We are also displaying logo above the loader. You can just change the logo by updating the `/public/logo.png` file. If your logo file has different name please update `/public/index.html` file accordingly.
