# Installation

Given below are the steps you need to follow to install the **full-version** / **starter-kit** on your system:

::: warning System Requirements

- Node: LTS
- PHP: 8.2.0 or greater
- Composer: 2.4.2
:::

## Guide

- Download our template from marketplace

- Unzip it in your desired location

    :::danger Getting Error: [plugin:vite:css] [sass] Can't find stylesheet to import.

    You might get this error on Windows OS if you unzip the template in a directory which has **space in its path**. For example, `C:\Users\My User\Documents\my-project`. Notice, there is a space in `My User` directory name.

    To avoid this error, please make sure you unzip the template in a directory which doesn't have space in its path. For example, `C:\Users\MyUser\Documents\my-project`. Additionally, also make sure your project it self doesn't have space in its name. For example, `my-project` is fine but `my project` is not.

    We already reported the issue to vuetify team. You can track the issue here: [#300](https://github.com/vuetifyjs/vuetify-loader/issues/300)
    :::

- Navigate to the project you want to run (`full-version` or `starter-kit`). To make sure you are in right directory check if that directory contains files like `package.json`, `.gitignore` etc.

:::details Copying from unzipped directory
If you are copying file from unzipped directory then make sure to copy all the hidden files as well, like `.eslintrc.js`, `.gitignore`, etc.

To make sure, match the zip file content and extracted directory.

Enable show hidden files feature in your system to view the hidden files if you can't see them in extracted directory.
:::

- Open the terminal in that directory & to install the composer packages, run the following command:

  ```sh
  composer install
  ```

- Run the following command to copy `.env.example` file content into `.env` file.

  ```sh
  cp .env.example .env
  ```

- Run the following command to generate the key (You can also edit your data base credentials here)

  ```sh
  php artisan key:generate
  ```

- By running the following command, you will be able to get all the dependencies in your node_modules folder:

  ```sh
  pnpm install
  ```

- You can run the development server via the dev command, which is useful while developing locally. The development server will automatically detect changes to your files and instantly reflect them in any open browser windows.

  ```sh
  pnpm run dev
  ```

- To serve the application you need to run the following command in the project directory. (This will give you an address with port number 8000)

  Now navigate to the given address you will see your application is running.

  ```sh
  php artisan serve
  ```

  To change the port address, run the following command:

  ```sh
  php artisan serve --port=8080    // For port 8080
  sudo php artisan serve --port=80 // If you want to run it on port 80, you probably need to sudo.
  ```

- **Building for Production:** Running the `build` command will version and bundle your application's assets and get them ready for you to deploy to production:
  
  ```sh
  # Build and version the assets for production...

  pnpm run build
  ```

---

**Related FAQ:**

- [npm install or yarn install warnings or installation warnings](/faq/#npm-install-or-yarn-install-warnings-or-installation-warnings)

## Required Permissions

If you are facing any issues regarding the permissions, then you need to run the following command in your project directory:

```sh
sudo chmod -R o+rw bootstrap/cache
sudo chmod -R o+rw storage
```
