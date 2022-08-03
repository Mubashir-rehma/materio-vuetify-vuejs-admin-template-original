---
sidebar: 'auto'
---

# FAQ

:::tip
If you can't find your problem. Try searching related term as well.
:::

## npm install or yarn install errors

Causes of npm install or yarn install issue can be due to various things which include:

- Missing or inappropriate dependencies like node or some other environmental issues
- Dependency resolved by package manager (npm/yarn) conflict with other installed dependency
- The dependency of the package we use has an internal issue or that dependency has some issue with your environment
- Package or dependency of the package requires some additional step or configuration to work in your environment
- Downloaded package is broken or is got tampered

To resolve such installation issues:

- Please try again downloading the fresh package/zip from ThemeForest and perform the installation again.
- Please make sure you are using the LTS version of a node that is recommended and not one with the latest features.
- run `yarn cache clean` or `npm cache clean`
- Try using yarn if possible (Recommended).

After following about steps still, you are getting the error please [raise support](/guide/getting-support.md) at our support portal with the below details:

- Your OS information, Node version, npm/yarn version, Template/Package version
- Mention if you can run the fresh VueJS project using Vue CLI without our template
- Attache log file of the error you are getting in your console (Provide full log)
- Mention which command you are running
- Mention If you have any other machine, are you able to run our template on that machine

## npm install or yarn install warnings or installation warnings

You might get some warnings while running `npm install` or `yarn install` like below:

```bash
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > vue2-leaflet@2.6.0" has unmet peer dependency "@types/leaflet@^1.5.7".
warning "@vue/eslint-config-airbnb > eslint-import-resolver-webpack@0.13.0" has unmet peer dependency "webpack@>=1.11.0".
warning " > sass-loader@10.1.0" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
```

The warnings you are receiving while installing are from library/packages we used.

We always keep our packages up to date when we make major releases. However, the writer of that package may use an older dependency that is no longer maintained for backward compatibility or any other code-related issue. But, that's not an issue. Those packages will work fine with our template.

Even if you like to try you can install these packages in fresh VueJS project without our template and you will get the same.

## How to disable linting in template

To disable linting in your project you can add new property in `vue.config.js` file as below:

```js{3}
module.exports = {
  ...
  lintOnSave: false,
  ...
}
```

## Why reproduce issue/bug in starter-kit?

Reproducing the issue/bug in our starter-kit with minimal dependencies can help in resolving issue/bug as quickly as possible rather than asking to try various things which will cost you valuable time.

If your bug/issue is related to UI and doesn't include laravel/any-other-backend and your issue/bug needs to show some dummy data please provide an example with dummy data via JSON file rather than providing full database and other backend related stuff.

I hope you will understand reproducing the issue in starter-kit as Q&A for technical issue/bug is a matter of trial and error. With the reproduced issue in the starter-kit, we will be able to provide you a worthy response in a single response.

::: tip
If your issue is not related to laravel, please reproduce the issue in vue only starter-kit even if you are using Laravel + Vue.
:::

::: danger NOTE
Please do not upload source code to public GitHub repo or any publicly available sources.
:::

## ACL - I have role based system for access control instead ability based

If you are using our ACL provided in our template then it is ability-based ACL not role-based. You can learn more about using role-based system using the same package we used. Please read in their official docs:

[CASL - Roles With Static Permissions](https://casl.js.org/v5/en/cookbook/roles-with-static-permissions)

## How to check what frontend expects in API response

You can find all our fake API responses in `src/@fake-db` folder.

You can get list of fake API endpoints by searching for `mock.on` in "src/@fake-db" folder.

::: tip
You can find authentication related fake responses in `src/@fake-db/jwt/index.ts` file.
:::

## How to update logo and text

You can update the logo and text from `themeConfig.ts` file. Please update `$themeConfig` variable's `app.name` and `app.logo` to update the text and logo.

Logo must be in SVG format and import should have

## How to update navbar or footer

You can use layout slots to add your custom navbar or footer. Please refer to [layout](/guide/layouts.md) docs for example with code snippet.

## Route transition is not working

Please make sure to wrap a page with a single `div` so there are no multiple root elements.

```vue
<!-- Multiple root nodes -->
<template>
  <span>First paragraph</span>
  <span>Second paragraph</span>
</template>
```

Convert above code to below code:

```vue
<!-- Single root node by wrapping content with div -->
<template>
  <div>
    <span>First paragraph</span>
    <span>Second paragraph</span>
  </div>
</template>
```
