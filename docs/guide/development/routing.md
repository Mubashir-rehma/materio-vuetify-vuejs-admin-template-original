# Routing

In this page you will find how to add new routes and how we handled existing routes.

## Overview

You can find our template's router configuration in `src/router/index.js`. This folder contains all routes of our template.

There's nothing special in `src/router/index.js` file, just ignore `router.beforeEach` for now we will explore it in ACL section. Still if there's something which is new to you, make sure you read `vue-router` [docs](https://router.vuejs.org/).

## Route Meta

Our routes just isn't simple routes. Their meta is also required to render proper page. Let's find out each of them:

- **navActiveLink**: Navigation link to active in navigation menu. This shall match to any of [navigation menu item's route](/guide/development/navigation-menus.md). Useful if you have dynamic param and want to only set single item for it in navigation menu. e.g. Email App.
- **resource**: CASL's subject value for route protection. You can read more about it in [Access Control](/guide/development/access-control.md) page.
- **action**: CASL's action value for route protection. You can read more about it in [Access Control](/guide/development/access-control.md) page.

## Route Protection (ACL)

You will learn how to add route protection for particular route in [Access Control](/guide/development/access-control.md) page.
