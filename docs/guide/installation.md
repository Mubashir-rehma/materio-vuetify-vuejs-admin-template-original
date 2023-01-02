# Installation

## Prerequisite

- [Yarn](https://yarnpkg.com/) package manager is recommended
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
3. Navigate to the project you want to run (`full-version` or `starter-kit`). To make sure you are in right directory check if that directory contains files like `package.json`, `.gitignore` etc.

:::details Copying from unzipped directory
If you are copying file from unzipped directory then make sure to copy all the hidden files as well, like `.eslintrc.js`, `.gitignore`, etc.

To make sure, match the zip file content and extracted directory.

Enable show hidden files feature in your system to view the hidden files if you can't see them in extracted directory.
:::

4. Open terminal in that directory
5. Run below commands:

```bash
# It will install all packages
yarn

# Will start the dev server
yarn dev
```

6. Open the dev server URL in browser. Probably it will be [http://localhost:5173](http://localhost:5173)

---

**Related FAQ: [Template is slow](/faq/#template-is-slow)**
