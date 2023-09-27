# Understanding Login Flow Part 2

## 1. Landed/Redirected on login page

According to "First visit" tour, we should get redirected to login page when we visit the vue app for first time.

## 2. Submitting the login form

```ts
//  file: src/pages/login.vue

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
}

const login = () => {
  ...
}
```

Now, user will fill up the form and submit the form. Form submission will trigger this `login` method.

## 3. Login API call

```ts
//  file: src/pages/login.vue

axios.post<LoginResponse>('/auth/login', { email: email.value, password: password.value })
```

Now, Vue app will make POST request using axios with `email` and `password`.

Do note that, in our demo we are mocking/facking API call. In you case, you will have real API endpoint so make sure to update URL `/auth/login` to your auth URL.

Moreover, make sure to disable mocking API calls by following our documentation.

## 4. Successful API call

```ts
//  file: src/pages/login.vue

const { accessToken, userData, userAbilities } = r.data

localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
ability.update(userAbilities)

localStorage.setItem('userData', JSON.stringify(userData))
localStorage.setItem('accessToken', JSON.stringify(accessToken))

// Redirect to `to` query if exist or redirect to index route
router.replace(route.query.to ? String(route.query.to) : '/')  
```

When our API request is successful, it means that we have successfully logged in. In order to ensure that our login status is updated in Vue app & preserved even if we reload the browser, we need to make some changes to our Vue app.

## 5. Extract response data

```ts
//  file: src/pages/login.vue

const { accessToken, userData, userAbilities } = r.data
```

After successful API request, we will extarct Access token, user data and user abilities from response (_`r.data`_) via [ES6 destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

According to marked code, your API response must contain mentioned data:

- `accessToken` - User access token, This will be used in subsequent API call. (_e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw_)
- `userData` - User's data, it can include name, full name, image URL etc. It completely depends on what you need from user after login. (_e.g. { id: 1, fullName: 'John Doe', username: 'johndoe', avatar: '<https://xyz.jpeg>' }_)
- `userAbilities` - User's abilities, This is one of most important data for implmenting ACL. We will use these abilities later to update CASL's ability instance. (_e.g. [{ action: "manage", subject: "users" }, { ... }]_)

If your API response sends different data then we used please make sure to carefully understand the Auth & ACL and later update the code.

## 6. Updating user abilities

```ts
//  file: src/pages/login.vue

localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
```

In previous step, we retrieved user abilities from response data. Now, let's store this retrieved user ability in localStorage so we can get it back even if users reload the page or come back after closing our app.

Here, we are storing user's abilities in localStorage under `userAbilities` key.

At the moment, user have initial abilities that allows user to visit public pages like login, registration, etc. However, now user is logged in and we know logged in user's abilities (_we retrieved it via API and stored in `userAbilities`_).

So let's update the user abilities in CASL instance so `can` method can use our new abilities to check if user can access particular entity. For this, we will use `ability.update` method and pass abilities we get from API response.

**Related Pages**

- [Access Control]('/src/guide/access-control.md')
