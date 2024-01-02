# Folder Structure

Understand folder structure of template and what everything contains

## Overview

Once you download the template from **Themeselection**, you will find the below folder structure in **materio/vue-laravel-version/**. This folder contains `typescript` and `javascript` version of template. Both Typescript and Javascript version contain `full-version` and `starter-kit` version.

Before checking folder structure it is better you know some stuff related to folder structure.

- `resources/{js/ts}` folder contains the whole vuejs code, this is the main folder where Auth, ACL, Routing, Navigation everything is managed from Vue not from Laravel. We have just provided Laravel integration which means all the routes are redirected to Application view which is responsible to load the application. All the assets are compiled from this folder to Laravel's public folder. We have considered Laravel usage for API purposes only.

```bash
materio-vuejs-laravel-template/
├── app                      # Controllers and Models
├── bootstrap                # Contains cache and app.php
├── config                   # Application's configuration files
├── database                 # Migrations, model factories, & seeds
├── public                   # index.php ,static folder & Build
│   ├── images/              # Public images
│   ├── favicon.ico           # Favicon
│   └── index.php             # Main php file
├── resources                # Views, Layouts, store and vue.js components
│   ├── images/                # Include all images
│   ├── styles/                # Include all styles files
│   ├── {js/ts}/               # Include all vue files
│   └── views/                 # Contain Blade templates
├── routes/                  # Include Routes Web.php
├── storage/                 # Contains compile blade templates
├── tests/                   # For testing
├── .editorconfig            # Related with your editor
├── .env.example             # Include Database credentials and other environment variables
├── .gitattributes           # Give attributes to path names
├── .gitignore               # Files and Directories to ignore
├── .stylelintrc.json        # Style related file
├── .eslintrc.js             # ESLint Configuration
├── auto-imports.d.ts        # Unplugin auto import file
├── components.d.ts          # Unplugin vue components
├── artisan                  # Include artisans commands
├── shims.d.ts               # Typescript only
├── composer.json            # Dependencies used by composer
├── package.json             # Dependencies used by node
├── env.d.ts                 # Typescript only
├── themeConfig.ts           # Theme Customizer
├── tsconfig.json            # Typescript only file
├── jsconfig.json            # Javascript only file 
├── phpunit.xml              # Related With testing
├── server.php               # For php's internal web server
└── vite.config.ts           # Laravel's vite file
```
