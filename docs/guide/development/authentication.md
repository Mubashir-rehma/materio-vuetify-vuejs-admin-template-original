# Authentication

Here you will find how to use JWT authentication provided by our template.

## JWT

We provided easy to understand and easy to change JWT support. We written API calls for JWT which common for most of the users. Written JWT code in files is self explanatory so you will understand the code by just looking at it. Plus it is nicely commented so you can understand what's going on. You can find JWT related code in blow files:

- `src/views/Login.vue`

  You can find login related code in `src/views/Login.vue` file. In this file `handleFormSubmit` method is responsible for authenticating user once user fill up the form.

- `src/views/Register.vue`

  You can find registration related code in `src/views/Register.vue` file. In this file `handleFormSubmit` method is responsible for registering user once user fill up the form.

- `src/plugins/axios.js`

  `src/plugins/axios.js` file has axios [interceptor](https://github.com/axios/axios#interceptors) for attaching access token to each API call.

- `src/@core/layouts/components/app-bar/AppBarUserMenu.vue`

  This file has logout method. It has `logoutUser` method which is also self explanatory and well commented.

::: danger
Please make sure that localStorage key you use to get and set access token should be same in All above mentioned files.
:::

## Making authentication API calls

::: warning Prerequisite

- [Axios](https://github.com/axios/axios)
  :::

We provided simple and easy to understand and change authentication because not everyone uses the same authentication mechanism and it may vary according to requirements. As different project have different requirement you can't assume that our current Authentication implementation will work in all of them _(e.g. You project may need refresh token or may not need)_.

There might be case where you have to update the code because your backend API sends you different response than frontend expects. So, our API calls for handling JWT authentication is really simple and easy to customize. I hope you will like it.

[FAQ: How to check what frontend expects in API response](/faq/#how-to-check-what-frontend-expects-in-api-response)
