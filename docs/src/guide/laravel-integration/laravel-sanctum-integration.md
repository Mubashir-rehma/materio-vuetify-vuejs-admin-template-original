# Laravel Sanctum Integration

This guide will show Laravel API authentication using sanctum

## Introduction

Laravel [Sanctum](https://laravel.com/docs/9.x/sanctum) provides a featherweight authentication system for SPAs (single page applications), mobile applications, and simple, token based APIs. Sanctum allows each user of your application to generate multiple API tokens for their account. These tokens may be granted abilities / scopes which specify which actions the tokens are allowed to perform.

## Installation

::: warning
The most recent versions of Laravel already include Laravel Sanctum. However, if your application's composer.json file does not include laravel/sanctum, you may follow the installation instructions below.
:::

- You may install Laravel Sanctum via the Composer package manager:

  ```bash
  composer require laravel/sanctum
  ```

- Next, you should publish the Sanctum configuration and migration files using the vendor:publish Artisan command. The sanctum configuration file will be placed in your application's config directory:

  ```bash
  php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
  ```

- Next, if you plan to utilize Sanctum to authenticate an SPA, you should add Sanctum's middleware to your `api` middleware group within your application's `app/Http/Kernel.php` file:

  ```php
  'api' => [
      \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
      'throttle:api',
      \Illuminate\Routing\Middleware\SubstituteBindings::class,
  ],
  ```

- Sanctum allows you to issue API tokens / personal access tokens that may be used to authenticate API requests to your application. When making requests using API tokens, the token should be included in the Authorization header as a Bearer token.

- To begin issuing tokens for users, your `User` model should use the `Laravel\Sanctum\HasApiTokens` trait:

  ```php
  use Laravel\Sanctum\HasApiTokens;

  class User extends Authenticatable
  {
      use HasApiTokens, HasFactory, Notifiable;
  }
  ```

- Next, in your application's `config/auth.php` configuration file, you should add the driver option for the api authentication guard.

  ```php
  'guards' => [
      'web' => [
          'driver' => 'session',
          'provider' => 'users',
      ],

      'api' => [
          'driver' => 'sanctum',
          'provider' => 'users',
          'hash' => false,
      ],
  ],
  ```

- Finally, you should run your database migrations. Sanctum will create one database table in which to store API tokens:

  ```bash
  php artisan migrate
  ```
  