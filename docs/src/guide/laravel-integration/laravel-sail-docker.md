# Laravel Sail & Docker

This guide will show Laravel sail and docker environment.

## Introduction

Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker development environment. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience.

At its heart, Sail is the `docker-compose.yml` file and the `sail` script that is stored at the root of your project. The `sail` script provides a CLI with convenient methods for interacting with the Docker containers defined by the `docker-compose.yml` file.

Laravel Sail is supported on `macOS`, `Linux`, and `Windows` (via WSL2).

## What is the Docker?

Docker is a tool for running applications and services in small, light-weight "containers" which do not interfere with your local computer's installed software or configuration. This means you don't have to worry about configuring or setting up complicated development tools such as web servers and databases on your personal computer. To get started, you only need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).

## Installation & Setup

Laravel Sail is automatically installed with all new Laravel applications so you may start using it immediately. To learn how to create a new Laravel application, please consult Laravel's [installation documentation](https://laravel.com/docs/10.x/installation) for your operating system.

## Installing Sail Into Existing Applications

If you are interested in using Sail with an existing Laravel application, you may simply install Sail using the Composer package manager. Of course, these steps assume that your existing local development environment allows you to install Composer dependencies:

```sh
composer require laravel/sail --dev
```

After Sail has been installed, you may run the `sail:install` Artisan command. This command will publish Sail's `docker-compose.yml` file to the root of your application:

```sh
php artisan sail:install
```

Finally, you may start Sail. To continue learning how to use Sail, please continue reading the remainder of this documentation:

```sh
./vendor/bin/sail up
```

## Configuring A Bash Alias

By default, Sail commands are invoked using the `vendor/bin/sail` script that is included with all new Laravel applications:

```sh
./vendor/bin/sail up
```

However, instead of repeatedly typing `vendor/bin/sail` to execute Sail commands, you may wish to configure a Bash alias that allows you to execute Sail's commands more easily:

```sh
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

Once the Bash alias has been configured, you may execute Sail commands by simply typing `sail`. The remainder of this documentation's examples will assume that you have configured this alias:

```sh
sail up
```

## Starting & Stopping Sail

Laravel Sail's `docker-compose.yml` file defines a Docker variety of containers that work together to help you build Laravel applications. Each of these containers is an entry within the `services` configuration of your `docker-compose.yml` file. The `laravel.test` container is the primary application container that will be serving your application.

Before starting Sail, you should ensure that no other web servers or databases are running on your local computer. To start all of the Docker containers defined in your application's `docker-compose.yml` file, you should execute the `up` command:

```sh
sail up
```

To start all of the Docker containers in the background, you may start Sail in "detached" mode:

```sh
sail up -d
```

Once the application's containers have been started, you may access the project in your web browser at: [http://localhost](http://localhost).

To stop all of the containers, you may simply press Control + C to stop the container's execution. Or, if the containers are running in the background, you may use the `down` command:

```sh
sail stop
```

## How to run the template with docker?

You can run our template in docker environment using sail. After, successfully installed [docker](https://www.docker.com/products/docker-desktop) in your system run the below command to install sail and composer modules in the template.

```sh
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

Now, run the below command to start the sail.

```sh
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'  //created alias

sail up
```

In the root directory, you will find a file named `.env.example`, rename the given file name to `.env` and run the following command to generate the key (and you can also edit your database credentials here).

```sh
sail php artisan key:generate
```

By running the following command, you will be able to get all the dependencies in your `node_modules` folder:

```sh
sail yarn
```

To run the project in development mode , you need to run following command in the project directory. It will compile the php files & all the other project files. It will also enable hot module replacement.

```sh
sail yarn dev
```

Now, your project served on: <http://localhost/>
