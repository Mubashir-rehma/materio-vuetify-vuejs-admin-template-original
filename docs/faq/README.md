---
sidebar: 'auto'
---

# FAQ

::: tip
If you can't find your problem. Try searching related term as well.
:::

::: tip I can't find my issue/problem/question listed here, What to do now?
If you can't find your issue/problem/question listed here then you can [raise support](/guide/getting-started/support.md) at our support portal. For **getting your solution quickly with minimum conversation**, please check out our getting support page which provides some tips on how to raise perfect support ticket to get solution quickly so our development team don't have to ask for things which takes time and waste your precious development time.
:::

## Vue 3 & Vuetify 3 Update

Our base framework [Vuetify](https://vuetifyjs.com/) still in development for Vue 3 at the time of writing this FAQ. You can find roadmap in their [docs](https://vuetifyjs.com/en/introduction/roadmap/), please follow it for upcoming Vue 3 updates.

As we also use third party libraries, till they provide support for vue 3 or till we find alternative libraries for them it is not advisable to use template with Vue 3.

However, we are providing Vue 3 Ready template (still using Vue 2 but with power of Vue 3 Composition API as plugin).

Once we have all things required to move to Vue 3, We will start development for it.

## npm install or yarn install errors

Causes of npm install or yarn install issue can be due to various things which include:

- Missing or inappropriate dependencies like node or some other environmental issues
- Dependency resolved by package manager (npm/yarn) conflict with other installed dependency
- The dependency of the package we use have an internal issue or that dependency has some issue with your environment
- Package or dependency of the package requires some additional step or configuration to work in your environment
- Downloaded package is broken or is got tampered

To resolve such installation issue:

- Please try again downloading fresh package/zip from ThemeForest and perform installation again.
- Please make sure you are using LTS version of node which is recommended and not one with latest features.
- run `yarn cache clean` or `npm cache clean`
- Try using yarn if possible (Recommended).

After following about steps still, you are getting the error please [raise support](/guide/getting-started/support.md) at our support portal with the below details:

- Your OS information, Node version, npm/yarn version, Template/Package version
- Mention if you are able to run fresh VueJS project using Vue CLI without our template
- Attache log file of error you are getting in your console (Provide full log)
- Mention which command you are running
- Mention If you have any other machine, are you able to run our template in that machine

## npm install or yarn install warnings or installation warnings

You might get some warnings while running `npm install` or `yarn install` like below:

```bash
info fsevents@2.3.1: The platform "linux" is incompatible with this module.
info "fsevents@2.3.1" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > bootstrap@4.5.3" has unmet peer dependency "jquery@1.9.1 - 3".
warning " > bootstrap@4.5.3" has unmet peer dependency "popper.js@^1.16.1".
warning " > vue2-leaflet@2.6.0" has unmet peer dependency "@types/leaflet@^1.5.7".
warning "@vue/eslint-config-airbnb > eslint-import-resolver-webpack@0.13.0" has unmet peer dependency "webpack@>=1.11.0".
warning " > sass-loader@10.1.0" has unmet peer dependency "webpack@^4.36.0 || ^5.0.0".
```

The warnings you are receiving while installing is from library/packages we used.

We always keep our packages up to date when we make major release. However, the writer of that package may use an older dependency that is no longer maintained for backward compatibility or any other code related issue. But, that's not an issue. Those packages will work fine with our template.

Even if you like to try you can install this packages in fresh VueJS project without our template and you will get the same.

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

## Authentication/ACL gives "Unexpected token u in JSON at position 0"

You might get this if you have corrupted or wrong data in your `localStorage`. **Please clear localStorage to resolve this issue.**

This error can be caused by below code:

```js
JSON.parse(localStorage.getItem('userData'))
```

In above code we are getting `userData` from localStorage and due to invalid JSON value in your localStorage you might get this error.

## ACL - I have role based system for access control instead ability based

If you are using our ACL provided in our template then it is ability-based ACL not role-based. You can learn more about using role-based system using the same package we used. Please read in their official docs:

[CASL - Roles With Static Permissions](https://casl.js.org/v5/en/cookbook/roles-with-static-permissions)

## How to check what frontend expects in API response

You can find all our fake API responses in "src/@fake-db" folder.

You can get list of fake API endpoints by searching for `mock.on` in "src/@fake-db" folder.

::: tip
You can find authentication related fake responses in "src/@fake-db/jwt/index.js" file.
:::

## Authentication/ACL gives "Unexpected token u in JSON at position 0"

You might get this if you have corrupted or wrong data in your `localStorage`. **Please clear localStorage to resolve this issue.**

This error can be caused by below code:

```js
JSON.parse(localStorage.getItem('userData'))
```

In above code we are getting `userData` from localStorage and due to invalid JSON value in your localStorage you might get this error.

## ACL - I have role based system for access control instead ability based

If you are using our ACL provided in our template then it is ability-based ACL not role-based. You can learn more about using role-based system using the same package we used. Please read in their official docs:

[CASL - Roles With Static Permissions](https://casl.js.org/v5/en/cookbook/roles-with-static-permissions)

## How to check what frontend expects in API response

You can find all our fake API responses in "src/@fake-db" folder.

You can get list of fake API endpoints by searching for `mock.on` in "src/@fake-db" folder.

::: tip
You can find authentication related fake responses in "src/@fake-db/jwt/index.js" file.
:::

## How to update logo and text

You can update the logo and text from "themeConfig.js" file. Please update `themeConfig` variable's `app.name` and `app.logo` to update the text and logo.

## NuxtJS support and its integration

As Admin templates are meant for backend and it doesn't require SEO we didn't provide support for NuxtJS. If you want to integrate NuxtJS in our template please consider checking some online articles on how to migrate VueJS project to NuxtJS.

Here's some of what we have found:

- [Official NuxtJS Docs](https://nuxtjs.org/)
- [How to migrate a VueJs project to NuxtJS in 8 steps](https://dev.to/ngranja19/how-to-migrate-a-vuejs-project-to-nuxtjs-in-8-steps-41dm)

## How to update navbar or footer

You can use layout slots to add your custom navbar or footer. Please refer to [layout](/guide/layout/layout-types.md) docs for example with code snippet.

## What is usage and purpose of app-card-code component

In our full version package you will find usage of `app-card-code` component in most pages. This is custom component created by us for demo purposes to show code snippet (click code icon in right top corner) of the demo your viewing. This component is just enhancement over v-card component for showing code, you don't have to use it.

**What to do with usage of this component in page?**

Just remove the `app-card-code` component from page and replace with [v-card](https://vuetifyjs.com/en/components/cards/) component provided by Vuetify. Generally code snippet is imported from `code.js` file so once you removed `app-card-code` from page also **remove code snippet import** from page and finally **remove that code.js** file.

Again, `app-card-code` is just for demo purpose, you can remove it.

## Picker header is not looking as expected in dark

Please [check](/guide/components/picker.md) the picker page for solution.
