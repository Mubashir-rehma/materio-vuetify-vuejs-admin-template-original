# Vuex Store - WIP

In this page you will understand usage of Vuex Store in our template

## Overview

Our template uses Vuex's [module](https://vuex.vuejs.org/guide/modules.html) system to make Materio Store modules to use them as plug and play. You can check `src/store/index.js` file to know which modules are loaded at the start of the template.

Each module is namespaced so there will be no conflict if you create your own store module and use same actions & mutations names.

As we do care about performance of project, we haven't registered all the modules from start. Still there's some modules which are [dynamically registered](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration).

## Store Modules

Let's find out what each store module has to offer.

- ### app

This store module is common and you can say general state, getters, mutations and actions are added in this module. This module handles whole app wise state like width of current window in which your app is running.

- ### app-config

Existing of this module is due to `$themeConfig`. This module holds the state of themeConfig and on change of any state it handles it's extra efforts like updating localStorage, thanks to mutations provided in this module.

::: tip
We also created composition function for this store module which makes updating state easier than ever before. 😎
You can find this composition function in `@core/app-config/useAppConfig.js`. All you have to do is destructure the config option and use it.

```js
const { skin } = useAppConfig()

// Setting config value as easy as setting other property value
// It will handle updating localStorage as well 😍
skin.value = 'dark'
```

:::

- ### vertical-menu

This store module is targeted to vertical menu. This module has single state of menu collapsed.

- ### app-ecommerce

This module handles state of eCommerce app. It has actions to perform API calls and have single state for now.

- ### calendar

This module handles state of calendar app. It has actions for API calls and other store things.

- ### app-chat

This module handles state of chat app. It only has actions for fetching and updating the data.

- ### app-email

This module handles state of email app. Same as app-chat module it only has actions for fetching and updating the data.

- ### app-invoice

This module handles state of invoice app. Same as above two modules it only has actions for fetching and updating the data.

- ### app-todo

This module handles state of to-do app. It only has actions for fetching and updating the data.

- ### app-user

This module handles state of user app. Again 😅 It only has actions for fetching and updating the data.

::: tip
For store modules which don't have state and only have actions, You can completely remove those modules and make API call in your SFC if you don't want to create vuex store module just for API calls. We provided it because you might modify it and use state in them.
:::
