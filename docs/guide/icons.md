# Icons

## Overview

We have used Material Design Icons from the **Iconify** library in the whole template. You may visit the site [here](https://iconify.design/) and check all the icons [here](https://icon-sets.iconify.design/). Users are free to use any icon library of their choice.

::: warning
We are using the offline icons with the help of Iconify bundle and we suggest you do the same. If you want to use very few icons from other libraries, then you may use online icons directly from the public API of Iconify.
:::

::: danger Heads Up! (TypeScript version only)
The `src/@iconify/tsconfig.json` file is different from the `tsconfig.json` file and thus do not delete the `src/@iconify/tsconfig.json` file from your project; otherwise, you will not be able to generate icon bundle from the `yarn build:icons` command.
:::

## Iconify Bundle

When Iconify icon component renders an icon, if icon data is not available, the component attempts to load data for an icon from Iconify API.

Even though loading icon data from API is very fast, it is not instant and it requires internet access. By providing icon data for most used icons, you guarantee that icon data is ready when a component needs it, rendering icons instantly.

This also allows rendering icons when internet access is not available and you are no longer relying on third-party service.

The following files are necessary to generate Iconify bundle:

- `src/@iconify/build-icons.js`
- `src/@iconify/build-icons.ts (typescript version only)`
- `src/@iconify/icons-bundle.js`
- `src/@iconify/tsconfig.json`
- `package.json`

## How to Generate Bundle?

You can generate the bundle with a wide variety of emojis, flags, brand logos, SVGs & icons and use them even when internet access is not available. To generate such icons, you just need to add your desired icon library, any specific icon(s), a custom JSON file created by you, custom SVG(s) created by you or any emoji(s).

### Install the icon libraries

To install an icon library from the Iconify collection, you will need to install the specific icon library that you want to use. Here's how you can do that:

```sh
yarn add @iconify-json/library-name

# For Example

yarn add @iconify-json/mdi
```

:::tip
Each icon set is available as a separate NPM package. Package name is `@iconify-json/{prefix},` where `"{prefix}"` is icon set prefix.
:::

### Generate all icons from an icon library

To add all the icons from an icon library provided by Iconify, you just need to do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  json: [
    // Add the icon libraries (from which you need all the icons) provided by Iconify
    require.resolve('@iconify/json/json/mdi.json'), // Material Design Icons
    require.resolve('@iconify/json/json/bi.json') // Bootstrap Icons
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  json: [
    // Add the icon libraries (from which you need all the icons) provided by Iconify
    require.resolve('@iconify/json/json/mdi.json'), // Material Design Icons
    require.resolve('@iconify/json/json/bi.json') // Bootstrap Icons
  ]
}
```

</code-block>
</code-group>

### Generate some icons from an icon library

To add some icons from an icon library provided by Iconify, you just need to do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  json: [
    {
      // You need to pass the icon library from Iconify in the `filename` property given below
      filename: require.resolve('@iconify/json/json/line-md.json'), // Material Line Icons
      // The icons must be added from the icon library passed above in the `icons` property given below
      icons: ['home-twotone-alt', 'github', 'document-list', 'document-code', 'image-twotone']
    }
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  json: [
    {
      // You need to pass the icon library from Iconify in the `filename` property given below
      filename: require.resolve('@iconify/json/json/line-md.json'), // Material Line Icons
      // The icons must be added from the icon library passed above in the `icons` property given below
      icons: ['home-twotone-alt', 'github', 'document-list', 'document-code', 'image-twotone']
    }
  ]
}
```

</code-block>
</code-group>

### Generate some icons from different libraries

To add some icons from different libraries provided by Iconify, you just need to do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  icons: [
    'bx:basket', // BoxIcons
    'bi:airplane-engines', // Bootstrap Icons
    'tabler:anchor', // Tabler Icons
    'uit:adobe-alt', // Unicons Thin Line
    'fa6-regular:comment', // Font Awesome Regular
    'twemoji:auto-rickshaw' // Twitter Emoji
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  icons: [
    'bx:basket', // BoxIcons
    'bi:airplane-engines', // Bootstrap Icons
    'tabler:anchor', // Tabler Icons
    'uit:adobe-alt', // Unicons Thin Line
    'fa6-regular:comment', // Font Awesome Regular
    'twemoji:auto-rickshaw' // Twitter Emoji
  ]
}
```

</code-block>
</code-group>

### Generate some icons from a custom JSON file

To add some icons from a custom JSON file, you need to follow the file format according to [this](https://docs.iconify.design/types/iconify-json.html) and do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  json: [
    'JSON_FILE_PATH/JSON_FILE_NAME.json' // The JSON file must be inside the `src` folder
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  json: [
    'JSON_FILE_PATH/JSON_FILE_NAME.json' // The JSON file must be inside the `src` folder
  ]
}
```

</code-block>
</code-group>

### Generate some icons from some custom SVG files

To add some icons from some custom SVG files, you need to create some SVG files in a single folder inside the `src` folder and do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  svg: [
    {
      // All the SVG files should be in one folder and that folder must be inside the `src` folder
      // You need to pass the SVG folder path and not the SVG file in the `dir` property given below
      dir: 'src/@iconify/svg',
      // If the SVGs have two tones, you need to change the value of the `monotone` property to `true`
      monotone: false,
      // Below is the property to give the prefix name to your SVGs
      prefix: 'custom'
    }
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  svg: [
    {
      // All the SVG files should be in one folder and that folder must be inside the `src` folder
      // You need to pass the SVG folder path and not the SVG file in the `dir` property given below
      dir: 'src/@iconify/svg',
      // If the SVGs have two tones, you need to change the value of the `monotone` property to `true`
      monotone: false,
      // Below is the property to give the prefix name to your SVGs
      prefix: 'custom'
    }
  ]
}
```

</code-block>
</code-group>

### Generate some icons from some custom Emojis

To add some icons from some custom emojis, you need to create some emojis in a single folder inside the `src` folder and do the following in the `src/@iconify/build-icons.ts` file:

<code-group>
<code-block title="TS" active>
```ts
// src/@iconify/build-icons.ts

const sources: BundleScriptConfig = {
  svg: [
    {
      // All the emojis should be in one folder and that folder must be inside the `src` folder
      // You need to pass the folder path of the emojis and not the emoji file in the `dir` property given below
      dir: 'src/@iconify/emojis',
      // If the emojis have two tones, you need to change the value of the `monotone` property to `true`
      monotone: false,
      // Below is the property to give the prefix name to your emojis
      prefix: 'custom'
    }
  ]
}

```
</code-block>

<code-block title="JS">
```js
// src/@iconify/build-icons.js

const sources = {
  svg: [
    {
      // All the emojis should be in one folder and that folder must be inside the `src` folder
      // You need to pass the folder path of the emojis and not the emoji file in the `dir` property given below
      dir: 'src/@iconify/emojis',
      // If the emojis have two tones, you need to change the value of the `monotone` property to `true`
      monotone: false,
      // Below is the property to give the prefix name to your emojis
      prefix: 'custom'
    }
  ]
}
```

</code-block>
</code-group>

<!-- ### Target & Import -->

<!-- Once you have added all the icons that are necessary for your project, you need to set the file path in which the whole icon bundle gets generated.

Search for the term `const target =` in the `src/@iconify/build-icons.ts` or `src/@iconify/build-icons.js` file and set a file path which is suitable for your project. Once the file path is set, you need to update that file path in the `src/main.ts` or `src/main.js` file as well. Once the import statement is updated in the `src/main.ts` or `src/main.js` file, you can use Iconify Vue Component anywhere in the template.

We have set the value of `target` as:

```ts
const target = 'src/@iconify/icons-bundle.js'
```

and the import statement as:

```tsx
import '@/@iconify/icons-bundle'
``` -->

### Run the command

Once you have set the target and updated the import statement, then you need to run the following command in the root (where your `package.json` file exists):

<code-group>
<code-block title="YARN (Highly Recommended)" active>
```bash
yarn build:icons
```
</code-block>

<code-block title="NPM">
```bash
npm run build:icons
```
</code-block>
</code-group>

## How is the bundle generated?

### TypeScript

The bundle is generated once you have added the icons, set the target, updated the import statement and run the command.

When you run the command, the `src/@iconify/build-icons.ts` file is compiled to the `src/@iconify/build-icons.js` file. Once the compilation is completed, the compiled file gets all the icon data from Iconify. After retrieving the icon data, the icon data is wrapped in a callback to create a JavaScript file. The callback function used is `addCollection()` which is provided by the `@iconify/vue` package.

In our case, the final JavaScript file is created as the `src/@iconify/icons-bundle.js` file. In this file, the icon data is collected and wrapped with the `addCollection()` callback function. So you don't have to handle anything from your side. You just have to import this file into the `src/main.ts` file.

### JavaScript

The bundle is generated once you have added the icons, set the target, updated the import statement and run the command.

When you run the command, the `src/@iconify/build-icons.js` file gets all the icon data from Iconify. After retrieving the icon data, the icon data is wrapped in a callback to create a JavaScript file. The callback function used is `addCollection()` which is provided by the `@iconify/vue` package.

In our case, the final JavaScript file is created as the `src/@iconify/icons-bundle.js` file. In this file, the icon data is collected and wrapped with the `addCollection()` callback function. So you don't have to handle anything from your side. You just have to import this file into the `src/main.js` file.

## Usage

We have already integrated the Iconify icon library into our Vuetify project, so we can use the `VIcon` component to render the icons directly.

### Props

You may visit this [docs](https://next.vuetifyjs.com/en/api/v-icon/) provided by Vuetify to refer to all the props of the `VIcon` Vuetify Component.

### How to use VIcon Vuetify Component?

We can use Vuetify's VIcon component:

```vue
<VIcon icon="mdi-home"></VIcon>
```

In the example given above, `mdi` is Material Design Icons (icon library provided by Iconify) and `home` is an icon which is in the `mdi` icon library.

#### Use some different icon library

Suppose you want to use the Font Awesome Solid icon library. Please follow [these](/guide/layout/icons.html#how-to-generate-bundle) instructions to add the icons from the Font Awesome Solid icon library. Here is an example to use an icon from the Font Awesome Solid icon library:

```vue
<VIcon icon='fa6-solid-bicycle' />
```

In the example given above, `fa6-solid` is Font Awesome Solid icon library and `bicycle` is an icon which is in the `fa6-solid` icon library.

### Style an icon using Vuetify component

Here is an example to change the color of an icon using an Vuetify component:

```vue
<VIcon color="primary" icon="mdi-vuetify"></VIcon>
```

## Use icon from Iconify public API <Badge type="tip" text="Advance" vertical="middle" />

By default, Iconify icon components use Iconify public API. Iconify icon components also cache loaded icons in the browser cache and/or browser storage, so icon data needs to be loaded only once.

You need internet access to load the icons from the Iconify public API for the first time. Otherwise, the icon will not be rendered on your page and a console error will come.

To render the icons from the Iconify public API, you must not include those icons in the Iconify bundle.
