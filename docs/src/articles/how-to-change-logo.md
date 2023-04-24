# How to change logo

## TL;DR 🎯

### For SVG logo

Import SVG with `?raw` as prefix

```js
import logo from '@/assets/logo.svg?raw'
```

use below logo config:

```js
logo: h('div', { innerHTML: logo, class: 'text-primary' }),
```

### For other formats (png, jpeg, etc)

Import your logo

```js
import logo from '@/assets/logo.png'
```

use below logo config:

```js
logo: h('img', { src: logo, alt: 'app-logo' }),
```

## Overview

We use VNode to render logo. This allows using image formats like png, jpeg, etc, along with SVG format.

## Why?

If you notice we change the color of the logo as well when you change the primary color of the theme.

For this we need an SVG image and it should not be rendered as `<img />` tag.

However, someone might have png or jpeg instead of SVG in this case we need `<img />` tag.

Hence, we need a mechanism which handles both SVG rendering and `<img />` tag rendering.

## Solution

We used [VNode](https://vuejs.org/api/render-function.html#h) to give full flexibility in theme config to render the logo however you like.

Check [tl;dr](#tl-dr-%F0%9F%8E%AF) section to understand how to pass SVG and other image formats as logo.

You can read more about VNode in Vue's official [docs](https://vuejs.org/api/render-function.html#h).

## How to use logo

We learned how to configure the logo properly. Now, to use it you need `VNodeRenderer` component from layouts plugin.

First import this component:

```js{1}
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
```

And use it in your template:

```vue
<template>
    <VNodeRenderer :nodes="themeConfig.app.logo" />
</template>
```

Moreover, you can also pass other attributes like a normal div 😍

```vue
<template>
    <VNodeRenderer :nodes="themeConfig.app.logo" class="me-3" />
</template>
```
