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

## Error: *[plugin:vite:css] [sass] Can't find stylesheet to import*

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

To determine what the frontend expects in API responses, you can refer to the fake API responses located in the `src/plugins/handlers/` folder.

For a specific list of fake API response endpoints related to a particular page, you can inspect the `index.ts` file within the corresponding page's directory. For instance, if you need the endpoints for the Invoice app, you can find them in the `index.ts` file located in the `apps/invoice` directory.

::: tip
You can find authentication related fake responses in `src/plugins/fake-api/handlers/auth/index.ts` file.
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

## What is a CORS error?

CORS stands for Cross-Origin Resource Sharing. It is a security mechanism implemented in web browsers that controls access to resources (such as fonts, images, scripts, or API endpoints) on a web page from different domains.

CORS errors can be caused by either the frontend or the backend. On the frontend, the error can be caused by a misconfiguration of the browser's CORS settings. On the backend, the error can be caused by a misconfiguration of the server's CORS settings.

To troubleshoot a CORS error, you can use the following steps:

1. Check the browser's CORS settings. Make sure that the browser is configured to allow cross-origin requests.
2. Check the server's CORS settings. Make sure that the server is configured to allow cross-origin requests.
3. If the browser and server are both configured to allow cross-origin requests, then the error is likely caused by a misconfiguration of the browser or server. In this case, you will need to consult the documentation for the browser or server to find out how to fix the error.

Here are some common causes of CORS errors:

- The browser is not configured to allow cross-origin requests.
- The server is not configured to allow cross-origin requests.
- The request is using a method that is not allowed by the server.
- The request is using a header that is not allowed by the server.
- The request is using a cookie that is not allowed by the server.

In most cases, CORS errors occur because the server is not configured to allow cross-origin requests. Therefore, it is important to ensure that your server is properly configured to handle such requests. To diagnose and address the issue, you can attempt to replicate it in a blank Vue project. If the error persists in the blank project, it indicates that the server needs to be configured correctly. By resolving the server's CORS configuration, you can ensure that the issue will be resolved not only in the template but also in your specific project.

## How to set title for each Individual page

Typically, there is no need to modify the title in admin panels. However, if you still wish to make changes, you can achieve this by integrating the `unhead/vue` library into your project.

For detailed instructions regarding implementation, please visit the following link: [Unhead Setup](https://unhead.harlanzw.com/integrations/vue/setup)

## Why we have removed store from email app?

In our email app, there is not any requirement to access states across multiple components. So, the need for a store in the email app has been eliminated. All essential functions have been moved to the `useEmail.ts` file.

To review the changes made for the removal of the store, please refer to this [commit](https://github.com/themeselection/master-vue--material/pull/324)

## Nuxt Terminal Warnings

#### Why am I seeing warnings related to Vuetify components when running nuxt?

The warnings you are encountering are due to the fact that Vuetify components are not fully Nuxt-ready by default. These warnings are typically triggered when you override Sass variables while using Vuetify components in a Nuxt.js project.

<br>

#### Are these warnings harmful, and do they affect the functionality of my Admin Dashboard?

No, these warnings are not harmful and do not impact the core functionality of your Admin Dashboard. They are primarily informational and are intended to alert you to potential compatibility issues between Vuetify and Nuxt.js when customizing the styling.

<br>

#### How can I resolve or suppress these warnings during development?

While the warnings can be safely ignored, there are a couple of approaches you can take to suppress them:

Turn off SSR (Server-Side Rendering): This approach can suppress the warnings, but it may not be ideal if SSR is essential for your development. Disabling SSR can help alleviate the warnings but may impact the overall development experience.

Vuetify Nuxt Module: Implementing the Vuetify Nuxt module can resolve the warnings. However, it's important to note that this approach may introduce some other issues, such as limitations with handling icon libraries other than the default Material Design Icons (MDI) used by Vuetify and potential challenges with the internationalization (i18n) setup for Vuetify components. Given these limitations, our development team has decided to wait for an official solution.

<br>

#### When can I expect these warnings to be resolved?

Both Vuetify and Nuxt.js communities are actively working towards improving compatibility. These warnings are expected to be addressed in future releases of either Vuetify or Nuxt.js.

We apologize for any inconvenience caused in the meantime and are committed to resolving this issue as soon as a fix is available from either party.

<br>

#### How can I stay updated on the progress of this issue?

You can keep an eye on the official repositories and release notes for both Vuetify and Nuxt.js for updates on this issue. Additionally, we will also notify users through our official communication channels once a resolution is available.

We would like to share few important reference links on this issue to keep track of this issue:

<https://github.com/vuetifyjs/vuetify-loader/pull/313>

<https://github.com/nuxt/nuxt/issues/14124>

<https://github.com/vuetifyjs/vuetify-loader/issues/290>

<https://github.com/nuxt/nuxt/issues/15412>

<br>

#### Is the warning related to Vuetify components a barrier to using my Admin Dashboard in production?

No, the warning related to Vuetify components is not a barrier to using your Admin Dashboard in production. This warning is purely a development-time informational message and does not affect the functionality, performance, or stability of your Admin Dashboard in a production environment.

Rest assured that your Admin Dashboard is fully functional and reliable for use in production scenarios. You can confidently deploy and utilize your Dashboard without any concerns related to the warnings seen during development.

We appreciate your understanding and patience as we work towards a smoother integration between Vuetify and Nuxt.js. In the meantime, if you have any other questions or encounter any issues, please don't hesitate to reach out to our support team for assistance.

Thank you for choosing our Admin Dashboard, and we apologize for any inconvenience caused by these warnings.
