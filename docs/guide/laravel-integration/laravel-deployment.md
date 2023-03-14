# Laravel Deployment

- Please follow the Laravel official Deployment [documentation](https://laravel.com/docs/10.x/deployment)

**Let's create a production build:**

- First, we have to change the base path of vue-router in below file.

```js
// full-version/src/router/index.{ts/js}

history: createWebHistory(import.meta.env.BASE_URL) => history: createWebHistory('/'), 
// if you deploy in subfolder then path should be according to your sub folder.
```

- Generate production build following below command:

```bash
npm run build

OR 

yarn build
```

- *We have successfully created build files.*

**Let's understand by an example:**

- In this example, we are going to separate the Laravel and public folder for security reasons. Now We have to change the path of laravel resources in `public/index.php` file.
- It may differ from server to server.

- We have two folder in our server.

  ```text
  ├── public_html (folder for public accessible)
  │   ├── build
  │   │   ├── assets
  │   │   └── mix-manifest.json
  │   ├── .htaccess
  │   ├── favicon.ico
  │   ├── index.php
  │   ├── loader.css
  │   ├── logo.png
  │   ├── robots.txt
  ├── laravel  (folder where laravel live)
  │   ├── app                      
  │   ├── bootstrap                
  │   ├── config                   
  │   ├── database                 
  │   ├── lang                     
  │   ├── resources                            
  │   ├── routes/                  
  │   ├── storage/                 
  │   ├── tests/                   
  │   ├── .editorconfig            
  │   ├── .env.example             
  │   ├── .gitattributes           
  │   ├── .gitignore               
  │   ├── .stylelintrc.json        
  │   ├── .eslintrc.js             
  │   ├── auto-imports.d.ts        
  │   ├── components.d.ts          
  │   ├── artisan                  
  │   ├── shims.d.ts               
  │   ├── composer.json            
  │   ├── package.json             
  │   ├── env.d.ts                 
  │   ├── themeConfig.ts           
  │   ├── tsconfig.json            
  │   ├── jsconfig.json            
  │   ├── phpunit.xml              
  │   ├── server.php               
  │   └── vite.config.ts
  ```

- As an above structure, we have to changes some paths in the `index.php` file in the `public` or `public_html` file. Also, we have to bind the document root to he current file path, where `index.php` exists.

  ```php
  <?php

  use Illuminate\Contracts\Http\Kernel;
  use Illuminate\Http\Request;

  define('LARAVEL_START', microtime(true));

  /*
  |--------------------------------------------------------------------------
  | Check If Application Is Under Maintenance
  |--------------------------------------------------------------------------
  |
  | If the application is maintenance / demo mode via the "down" command we
  | will require this file so that any prerendered template can be shown
  | instead of starting the framework, which could cause an exception.
  |
  */

  if (file_exists(__DIR__.'/../laravel/storage/framework/maintenance.php')) {
      require __DIR__.'/../laravel/storage/framework/maintenance.php';
  }

  /*
  |--------------------------------------------------------------------------
  | Register The Auto Loader
  |--------------------------------------------------------------------------
  |
  | Composer provides a convenient, automatically generated class loader for
  | this application. We just need to utilize it! We'll simply require it
  | into the script here so we don't need to manually load our classes.
  |
  */

  require __DIR__.'/../laravel/vendor/autoload.php';

  /*
  |--------------------------------------------------------------------------
  | Run The Application
  |--------------------------------------------------------------------------
  |
  | Once we have the application, we can handle the incoming request using
  | the application's HTTP kernel. Then, we will send the response back
  | to this client's browser, allowing them to enjoy our application.
  |
  */

  $app = require_once __DIR__.'/../laravel/bootstrap/app.php';

  app()->usePublicPath(__DIR__);

  $kernel = $app->make(Kernel::class);

  $response = tap($kernel->handle(
      $request = Request::capture()
  ))->send();

  $kernel->terminate($request, $response);

  ```

- **Required Permissions**

  If you are facing any issues regarding the permissions, then you need to run the following command in your project directory:

  ```sh
  sudo chmod -R o+rw bootstrap/cache
  sudo chmod -R o+rw storage
  ```

::: tip
As above code, we have changed all paths as per our folder structure.

Note: `public_html` folder may differ from server to server.
:::

*Congratulation! You have successfully deployed the package.*
