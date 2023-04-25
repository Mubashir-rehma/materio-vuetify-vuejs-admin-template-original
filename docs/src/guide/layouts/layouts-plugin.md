# Layouts Plugin

We provide framework independent layout system as plugin. You can use it to create your own layouts easily in any vue project with any framework.

## Usage

To use layouts plugin you have to register it like other plugins.

1. Create a new plugin file `@/plugins/layouts.ts` with below content:

    ```ts
    // Layouts plugin
    import { createLayouts } from '@layouts'
    // styles
    import '@layouts/styles/index.scss'
    // get layout config from themeConfig
    import { layoutConfig } from '@themeConfig'

    // ℹ️ We generate layout config from our themeConfig so you don't have to write config twice
    export default createLayouts(layoutConfig)
    ```

    :::tip
    `themeConfig.ts` file uses `defineThemeConfig` function which return two objects and one of them is configuration of layouts plugin. Hence, you can use this config and omit defining the config twice.
    :::

2. Import and use layouts plugin in `main.ts`

    ```ts
    import layoutsPlugin from '@/plugins/layouts' // [!code ++]
    app.use(layoutsPlugin) // [!code ++]

    ```

<br>

That's all. You have successfully configured layouts plugin. 🥳

## Essentials

layouts plugin don't provide any layouts, instead it provides layout essentials like layout components, composable, bare minimum styles for layouts, and some helper functions.

Feel free to explore and checkout the code in `@/@layouts` dir.
