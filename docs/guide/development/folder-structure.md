# Folder Structure

Understand folder structure of template and what everything contains

## Overview

Before checking folder structure it is better you know some stuff related to folder structure.

- `@core` folder contains core files of template which **shall not get modified** unless our support team guide you to do it.
- Outside of `@core` folder is files you can move and modify as your wish. Basically that is your playground where you can modify anything.
- `@core` folder contains layouts and styles but those are core files so you can still write your our layout using our layout and override our styles.
- `@fake-db` folder just contains dummy data which we get in response of API call. This enables us to take step forward in providing **API ready template**.
- `/src/layouts` folder outside of `@core` is your layouts which you can modify however you like. Template will render this layouts.

Other folders and details of it will be available in docs. This overview is here so you don't get confused.

## Main Package

Once you unzip the package from marketplace/store you will find folder named `materio-vX.X` folder which contains actual files and folders required to run Materio Admin.

```
├── .vscode
│   ├── comments.code-snippets       -> Code Snippets for commenting
│   ├── components.code-snippets     -> Code Snippets for components
│   ├── extensions.code-snippets     -> Workspace recommended extensions
│   ├── imports.code-snippets        -> Code Snippets for imports
│   ├── shortcuts.code-snippets      -> Code Snippets for shortcuts
│   └── vuetify.code-snippets        -> Code Snippets for Vuetify
├── public
│   ├── favicon.ico                  -> Favicon
│   ├── logo.svg                     -> SVG logo
│   └── index.html                   -> Main HTML
├── src
│   ├── @core                        -> Materio Admin Core Files
│   ├── @fake-db                     -> Fake Database for mocking axios requests (Fake API Calls)
│   ├── assets
│   │   └── app-bar-search-data.js   -> Appbar searchbox data
│   │
│   ├── layouts/variants             -> Your Layouts
│   │   ├── blank                    -> Blank Layout
│   │   └── content                  -> Content Layout
│   │       ├── horizontal
│   │       └── vertical
│   │
│   ├── navigation                   -> Vertical & Horizontal Navigation menu files
│   │   ├── horizontal
│   │   └── vertical
│   │
│   ├── plugins                      -> Third party plugins and their configurations
│   │── router                       -> vue-router files
│   ├── store                        -> Vuex Store
│   │   ├── app                      -> General App module
│   │   └── index.js                 -> Store index
│   │
│   ├── styles                       -> Your styles
│   │   ├── styles.scss              -> Your styles
│   │   └── variables.scss           -> Variables
│   │
│   ├── views                        -> View files for all pages
│   ├── App.vue                      -> Application main vue file
│   └── main.js                      -> Application main js file
├── .browserslistrc                  -> Browser support
├── .cssrem                          -> px to rem plugin config
├── .editorconfig                    -> editor config
├── .eslintrc.js                     -> ESLint Configuration
├── .gitignore                       -> gitignore
├── .prettierignore                  -> Prettier Ignore
├── .prettierrc.json                 -> Prettier config
├── babel.config.js                  -> Babel configuration
├── jsconfig.json                    -> JavaScript language service file [VS Code]
├── package.json                     -> Package json
├── README.md                        -> README
├── themeConfig.js                   -> Materio Admin configuration
└── vue.config.js                    -> VueJS configuration
```

## @core folder

`@core` folder is core of our template which includes core files like layouts, composition functions, template components, etc.

**@core folder isn't meant to get modified.**

It's good idea to have a look at it and know what it contains to use stuff we already invented so **you don't have to reinvent the wheel**.

e.g. we created validators for common use cases so you don't have to write validator each time. Just import the validator and use it.

### Understanding Core folder

Understanding `@core` folder will save your development time and you will know how to get most of our template.

- **app-config**

This folder contains composition function for app-config store module which make modifying themeConfig easy.

All you have to do is import this and update the property. Under the hood it will handle all store mutations and other actions like updating localStorage or updating other config.

```js{5,8}
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  setup() {
    const { appSkinVariant } = useAppConfig()

    const setSkinVariant = (newVal = 'default') => {
      appSkinVariant.value = newVal
    }

    return { setSkinVariant }
  },
}
```

::: tip
Refer to [theme configuration](/guide/development/theme-configuration.md) section to get all valid values for config option.
:::

- **comp-functions**

Currently this folder just contains ui util for creating responsive left sidebar layout within content like in chat, email & calendar app.

- **components**

It contains core component of template. Make sure to check them all in our custom components section.

- **layouts**

This contains layouts of our template and layout components. You can find detailed information in [layout](/guide/layout/layout-types.md) section.

- **libs**

This contains config or utils for plugins we added in our template. It will be fine if you don't check this directory.

- **preset**

This folder contains core styles of template. You can find more details about preset in Vuetify's official [docs](https://vuetifyjs.com/en/features/presets/).

- **utils**

It has some utils which can be useful in your development. However, `filter.js` file is just filter (Vue 2 template filter) functions.
