# Frontend API Call

We have to create Laravel APIs before testing the frontend API Call. We have used the same API endpoint that is created [here](laravel-sanctum-authentication.html#step-3-login-user-api).

We have implemented login method in our `login.vue` file. You can find this file here: `resources/{ts/js}/pages/login.vue`

```ts
const login = async () => {
  try {
    const res = await $api('/auth/login', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { accessToken, userData, userAbilityRules } = res

    useCookie('userAbilityRules').value = userAbilityRules
    ability.update(userAbilityRules)

    useCookie('userData').value = userData
    useCookie('accessToken').value = accessToken

    // Redirect to `to` query if exist or redirect to index route
    // ❗ nextTick is required to wait for DOM updates and later redirect
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : '/')
    })
  }
  catch (err) {
    console.error(err)
  }
}
```

Replace `login` method with below method which includes the API call.

::: danger
This is just showing how to use axios to make API calls for authentication. Please consider checking below resources for valid API response.

[FAQ: How to check what frontend expects in API response](/faq/#how-to-check-what-frontend-expects-in-api-response)
:::

```js
const login = async () => {
try {
  const res = await $api('/api/auth/login',{
    method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      }
  })

 console.log('response >>>', res);
 } catch (error) {
  console.error(err)
 }
}
```

Open your console and you should see following API response

![api](/images/code-examples/frontend-api-response/api-response.png)

::: tip Note
Repeat the same process for Register, get user and logout APIs to authenticate user, get user details and logout the user.
:::
