# Installation - WIP

Materio Admin is built using [Vue CLI](https://cli.vuejs.org/). Vue CLI is nicely documented to start off. You don't need to install or configure tools like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

## Guide

First of all make sure you have installed [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/).

::: tip
Yarn package manager is recommended
:::

::: danger
Please make sure you use node's LTS version which is recommended by official node site and not one with latest feature.
:::

- After downloading zip from marketplace/store, unzip it in your desired location.
- In uncompressed folder you will find folder named `Materio` and it will have all Vue project files. Open this folder in console/terminal.
- Run below command in console:

```bash
# For Yarn (Highly Recommended)
yarn

# For npm
npm install
```

::: tip
If you have any issues regarding installation please search your issue in our [FAQ](/faq/) section for instant solution and still you can't find solution, please follow our guide on [getting support](/guide/getting-started/support.md) for our product.
:::

- Now to run development server of Materio run below command:

```bash
# For yarn
yarn serve

# For npm
npm run serve
```

- Now you will find some output after running above command in console as below:
  <img :src="$withBase('/images/@core/npm-run-serve-result.png')" alt="console-output-of-development-server" class="rounded">
- Visit [http://localhost:8080/](http://localhost:8080/) to check frontend.

::: tip NOTE
Your network URL might not have same URL as screenshot and that is completely fine. It depends on your network.
:::

:::warning
If you have another process running at port `8080` then you might have some other URL (PORT) that screenshot.
:::

## Resolve installation and npm run serve issue

We already listed common installation errors which may encounter. To find your issue all you have to do is find the term in your console's output which looks like error.

e.g.:

- Could not resolve dependency: **vue-property-decorator** @x.x.x
- npm ERR! **Failed at the grpc**@1.24.2 install script.

Search this terms in our [FAQ](/faq/) section and hopefully you will get your solution.

::: warning NOTE
Make sure to attach full screenshot of error since you ran command and log file generated by that error.
:::