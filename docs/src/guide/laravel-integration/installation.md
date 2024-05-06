# Installation

Given below are the steps you need to follow to install the **full-version** / **starter-kit** on your system:

::: warning System Requirements

- Node: LTS
- PHP: 8.2.0 or greater
- Composer: 2.4.2
:::

## Guide

- Open the terminal in your root directory(full-version / starter) & to install the composer packages, run the following command:

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

### Required Permissions

If you are facing any issues regarding the permissions, then you need to run the following command in your project directory:

```sh
sudo chmod -R o+rw bootstrap/cache
sudo chmod -R o+rw storage
```
