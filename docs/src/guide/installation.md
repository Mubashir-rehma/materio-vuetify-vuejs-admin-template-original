# Installation

## Prerequisite

- [Pnpm](https://pnpm.io/) package manager is recommended
- [Node](https://nodejs.org/) LTS version is required

:::details How do I check my node version?
Run below command in your terminal:

```bash
node -v
```

Make sure output version is LTS version.
:::

## Getting started

1. Download our template from marketplace
2. Unzip it in your desired location

    :::danger Getting Error: [plugin:vite:css] [sass] Can't find stylesheet to import.

    You might get this error on Windows OS if you unzip the template in a directory which has **space in its path**. For example, `C:\Users\My User\Documents\my-project`. Notice, there is a space in `My User` directory name.

    To avoid this error, please make sure you unzip the template in a directory which doesn't have space in its path. For example, `C:\Users\MyUser\Documents\my-project`. Additionally, also make sure your project it self doesn't have space in its name. For example, `my-project` is fine but `my project` is not.

    We already reported the issue to vuetify team. You can track the issue here: [#300](https://github.com/vuetifyjs/vuetify-loader/issues/300)
    :::

3. Navigate to the project you want to run (`full-version` or `starter-kit`). To make sure you are in right directory check if that directory contains files like `package.json`, `.gitignore` etc.

:::details Copying from unzipped directory
If you are copying file from unzipped directory then make sure to copy all the hidden files as well, like `.eslintrc.js`, `.gitignore`, etc.

To make sure, match the zip file content and extracted directory.

Enable show hidden files feature in your system to view the hidden files if you can't see them in extracted directory.
:::

4. Open terminal in that directory
5. Run below commands:

::: code-group

```bash [Vue]
# It will install all packages
pnpm install

# Create MSW script for faking API calls
pnpm msw:init

# Will start the dev server
pnpm run dev
```

```bash [Nuxt]
# It will install all packages
pnpm install

# Will start the dev server
pnpm run dev
```

:::

6. Open the dev server URL in browser. Probably it will be <http://localhost:5173>

---
**Related FAQ: [Template is slow](/faq/#template-is-slow)**

## Generating build for production

1. To generate a production build, use the following commands:

 ```ts
 // Using yarn package manager
  yarn build

// Using npm package manager
  npm run build

// using pnpm package manager
  pnpm run build
  ```

2. Once the build is generated, you can preview it on your local system using the following commands:

```ts
// Using yarn package manager
  yarn preview

// Using npm package manager
  npm run preview

// using pnpm package manager
  pnpm run preview
```

:::warning Note
Make sure you are in the project directory before running above commands and also that you have yarn or npm installed on your machine
:::

:::tip
Refer to [this](https://vitejs.dev/guide/static-deploy.html) documentation for detailed deployment guide.
:::
