# Authentication - WIP

Here you will find how to use JWT authentication provided by our template.

## JWT

We provided JWT service for quickly getting started with authentication. It is also extendable so you can write your own JWT without removing ours or modify our JWT config.

You can find our core JWT files in `src/@core/auth/jwt`. Let's understand what each file has to offer:

- **uswJwt.js**: This file holds composition function `useJwt`. `useJwt` function accepts axios instance as first parameter and jwt config object as second parameter. It return instance of JWT service.
- **jwtDefaultConfig.js**: This file has default config we used in our template. Still, you can modify by passing your own config object in `useJwt` composition function.
- **jwtService.js**: This is actual JWT service which provides login, register, etc method for working with JWT.

## jwtService

::: tip
Do consider checking what our provided JWT service is doing (Understanding its class methods and etc) to understand the flow of our current authentication system.
:::

`jwtService.js` holds `JwtService` class which have several method and properties which we will explore below. You will get instance of this class when you use `useJwt` composition function.

### Axios response interceptor

We added axios response interceptor to auto renew JWT token once it get expired. We tried our best to provide this interceptor usable by almost all people. Still if you have any suggestions for us we are always ready for it. We love to improve our template and serve you better. 😇

Class methods as self explanatory just by names so it doesn't require any explanation. Just one thing you have to look for is constructor of `JwtService`. We commented the code so you can understand it better.

## Using JWT Service

::: warning
We provided JWT service with our best efforts but it is not universal JWT service which will work no matter what. You might need to update the code according to your API response or your Authentication system flow.

e.g. Current Authentication and Access Control expects your response contains userData, accessToken, etc.

[FAQ: I don't have refresh token in my authentication flow](/faq/#i-don-t-have-refresh-token-in-my-authentication-flow)

[FAQ: How to check what current frontend expects in API response](/faq/#i-don-t-have-refresh-token-in-my-authentication-flow)
:::

Above mentioned JWT files are core files so please don't update them, you might break something if we provide the update. So, you can use composition function we provided to use JWT. You can find your JWT files in `src/auth/jwt`. In `useJwt.js` file instead of passing blank object you can pass your own config to configure JWT service. You can refer to default config to check which options are available to override.

We haven't provided config for storing user data because it is up to you how to save user data.

You will also find auth utils in `src/auth/utils.js` file. Those utils are well commented and self explanatory as well.

Unlike previous version, we didn't provide login and register actions for providing flexibility in writing your own logic for login, register etc. You can find user ACL update and other post login/register/other code in their respective page's SFC file. e.g. To check post login process/logic check `Login.vue`.

### Overriding Jwt Service

Certainly, you might don't want to use localStorage to save token as it is not much secure and you want to use cookies instead. In this case you can use our class to create your own JWT service and use that.

## Making authentication API calls

::: warning Prerequisite

- [Axios](https://github.com/axios/axios)
  :::

We provided Authentication with best of our knowledge. As different project have different requirement you can't assume that our current Authentication implementation will work in all of them _(e.g. Current authentication flow expects refresh token flow)_.

There might be case where you have to update the code because your backend API sends you different response then frontend expects. In this case you first have to know what frontend expects in response.

[FAQ: How to check what frontend expects in API response](/faq/#how-to-check-what-frontend-expects-in-api-response)

Next, you need to update the API response you sent from your backend Or if you can't modify response sent via API then you need to update the frontend code.

[Article: Frontend Authentication Flow](/articles/frontend-authentication-flow.md)
