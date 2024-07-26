# Laravel Sanctum Integration

This guide will show Laravel API authentication using sanctum

## Introduction

Laravel [Sanctum](https://laravel.com/docs/9.x/sanctum) provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token based APIs. Sanctum allows each user of your application to generate multiple API tokens for their account. These tokens may be granted abilities / scopes which specify which actions the tokens are allowed to perform.

## Installation

::: info
Laravel 11 does not include Laravel Sanctum by default. However, if your application's composer.json file does not include laravel/sanctum, you may follow the installation instructions below. 🙏
:::

- You may install Laravel Sanctum via the install:api Artisan command:

  ```bash
  php artisan install:api
  ```

- Sanctum allows you to issue `API tokens / personal access tokens` that may be used to authenticate API requests to your application. When making requests using API tokens, the token should be included in the Authorization header as a Bearer token.
**To begin issuing tokens for users, your User model should use the `Laravel\Sanctum\HasApiTokens` trait:**

  ```php
  use Laravel\Sanctum\HasApiTokens;

  class User extends Authenticatable
  {
      use HasApiTokens, HasFactory, Notifiable;
  }
  ```

- `install:api` command will add `routes/api.php` file. That should be included in the `bootstrap/app.php` file inside withRouting as below

  ```php
  return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
      web: __DIR__ . '/../routes/web.php',
      api: __DIR__ . '/../routes/api.php', // Add this if not added by install:api
      commands: __DIR__ . '/../routes/console.php',
      health: '/up',
    )
  ```

- Finally, you should run your database migrations. Sanctum will create one database table in which to store API tokens:

  ```bash
  php artisan migrate
  ```
