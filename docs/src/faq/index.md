---
aside: false
---

# FAQ

[[toc]]

:::tip
If you can't find your problem. Try searching related term as well.
:::

## Migrating from Vue 2 to Vue 3 version

As our template is now built on Vuetify 3 and written from scratch with new and improved folder structure, there's no easy way to migrate the existing project to the latest update.

The best way to move your existing codebase to new update is gradually adopting the new update. You can start with either full verison of our template or starter-kit version of our template then few pages from your project to new project and add its requirements. Make sure to carefully update/modify your existing codebase with the new project so you don't miss anything.

**Why breaking change was introduced?**

As you already know, Vue 2 was using options API and vue 3 introduced composition API and people are loving the new composition API more. Moreover, Vue 3 introduced some nice features and added some breaking changes.

Vue core team achieved this by rewriting **vue's codebase from the scratch** 😱. As UI framework is built on top of Vue 3, **UI framework** also needs **complete rewrite** to adopt vue 3. Hence, we also have to rebuild the admin template from the scratch. Due to these factors, we got breaking changes that are hard to handle 🙁

## npm install or yarn install errors

Causes of npm install or yarn install issue can be due to various things which include:

- Missing or inappropriate dependencies like node or some other environmental issues
- Dependency resolved by package manager (npm/yarn) conflict with other installed dependency
- The dependency of the package we use has an internal issue or that dependency has some issue with your environment
- Package or dependency of the package requires some additional step or configuration to work in your environment
- Downloaded package is broken or is got tampered

To resolve such installation issues:

- Please try again downloading the fresh package/zip from the purchased site and perform the installation again.
- Please make sure you are using the LTS version of a node that is recommended and not one with the latest features.
- run `yarn cache clean` or `npm cache clean`
- Try using yarn if possible (Recommended).

After following about steps still, you are getting the error please [raise support](/guide/getting-support.md) at our support portal with the below details:

- Your OS information, Node version, npm/yarn version, Template/Package version
- Mention if you can run the fresh VueJS project using Vue CLI without our template
- Attache log file of the error you are getting in your console (Provide full log)
- Mention which command you are running
- Mention If you have any other machine, are you able to run our template on that machine

## Error: `[plugin:vite:css] [sass] Can't find stylesheet to import`

Please refer to the danger note at [installation](/guide/installation.html#getting-started) section of the documentation.

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

## Template is slow

You may feel slowness in our template due to [vue dev tool](https://devtools.vuejs.org/). There are several open issues complaining about the slowness of app while using the vue dev tool:

<https://github.com/vuejs/devtools/issues/1875>

<https://github.com/vuejs/devtools/issues/1939>

If you open your app or our template in the guest window (where vue dev tool isn't available) then you will notice it is pretty fast and working as expected.

Hence, if you don't use dev tool much we suggest you to disable or remove the vue dev tool from your browser extensions.

Still, if you feel there's something missing try disabling the router transition and you will experience a much faster app.

Apart from this, On first load you might feel template is taking the time to load. This is because vite tries to optimize the dependencies and load the necessary modules required to run the app smoothly. Once it's loaded, vite will cache the dependencies and you will experience faster app.

In summary, this is due to vue dev tool and dev mode. Try checking our the live demo and you will find it's smooth and slick 😍

## Missing datatables,form wizards and its related pages

We are using the Vuetify framework for our components, however, a stable version of the datatable and form wizard component has not yet been released by Vuetify. In the meantime, we could use a third-party component for the datatable and form wizards, but you will again need to switch back to Vuetify's datatable and form wizard once they are released officially. Therefore, we plan to integrate these components into our templates once Vuetify releases its stable version, along with the related pages.

## When Data table will be available?

DataTable in Vuetify is still in alpha phase and under vuetify labs. **Vuetify's documentation** strongly says:

> _Components available through Labs are considered NOT production ready and only to be used for testing purposes. Breaking changes will be introduced in patch releases and no support will be provided._

As our template is production ready and we don't want you to experience any serious issues during development and in production, we decided to provide DataTable in our template after it's stable. However, we will check it's usability in BETA as well to provide it as soon as possible.

We know how crucial DataTable component is but due to mentioned reasons we can't provide it officially in our template. You are free to use it in our template though by updating vuetify to the latest version and using it. Do note that, as we can't officially provide component under labs, we won't able to assist you with those components. Moreover, if you use data table component now most likely you will have to update it frequently until it's out of BETA.

I hope you will understand 🙏

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

Article: [How to change logo](/articles/how-to-change-logo)

## How to update navbar or footer

You can use layout slots to add your custom navbar or footer. Please refer to [layout](/guide/layouts/layout-types.md) docs for example with code snippet.

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

## Nuxt 3 Support & its integration

As Admin templates are meant for internal purposes and it doesn't require SEO we didn't provide support for NuxtJS At the moment. However, on lots of feature requirements, we added this in our pipeline.

First of all, we will check if is it possible for us to provide nuxt version of our template along with JavaScript & TypeScript versions of the template. If we will be able to manage Vue (TS + JS) along with Nuxt (TS + JS) then surely we will provide nuxt support in future updates.

Till then if you need nuxt support then you can always implement nuxt yourself.

## How to integrate your theme in our existing project

1. First of all, you have to copy our `@core` into your project's `src` folder.
2. If you want to use our layouts including the vertical nav menu & appbar please extend our layouts from `@core` folder just like we did in our code (you can find them in `src/layouts`) and use them accordingly in your router. Please refer `src/layouts` and `src/router` folders for usage. As you are going to use our vertical nav or horizontal nav menu you also have to add navigation items placed in `src/navigation`. The last thing you have to do is update the `App.vue`.
3. The next thing is the `src/plugins` directory. In this, you have to grab vuetify plugin as our template is built upon this framework. Later, Add other plugins according to your requirement.

You can always reference our codebase for information & HowTo.

::: tip
This FAQ will improve over time so please let us know your feedback if we missed anything.
:::

## Laravel and InertiaJs support?

Our template is primarily focused on utilizing Laravel as an API backend, and while we have not included explicit support for InertiaJs, it can be integrated with the template using the official documentation or tutorial guides provided by InertiaJs. Please keep in mind that we have not extensively tested the compatibility of our template with InertiaJs and we do not provide customer support for inertiaJs.