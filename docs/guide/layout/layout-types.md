# Layout Types

There are two layout types:

## 1. Blank Layout

This is useful if you want to create pages without any other content like _Authentication_ page where you don't need navbar, navigation menu, footer, etc.

Basically this is blank page and you will create everything from scratch.

Template Example:

- [Login V1](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/authentication/login-v1)
- [Register V1](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/authentication/register-v1)
- [Forgot Password v1](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/authentication/forgot-password-v1)

### How to enable blank layout for specific route?

To create route with blank layout use route meta `layout` and set value to `'blank'`.

```js{6}
  {
    path: '/pages/authentication/login',
    name: 'auth-login',
    component: () => import('@/views/pages/authentication/Login.vue'),
    meta: {
      layout: 'blank',
      redirectIfLoggedIn: true,
    },
  },
```

Now write your content in your SFC and it will get rendered in blank layout.

## 2. Layout w/ Layout Components

To create route with content layout use route meta `layout` and set value to `'content'`. With this layout you will get below layout components:

1. Navigation Menu
2. Navbar
3. Footer

All of above layout components are configurable. You can customize this layout components using [themeConfig](/guide/development/theme-configuration.md) to get your desired layout.
