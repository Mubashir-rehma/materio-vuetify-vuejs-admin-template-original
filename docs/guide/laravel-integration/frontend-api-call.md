# Frontend API Call

We have to create Laravel APIs before testing the frontend API Call. We have used the same API endpoint that is created [here](laravel-sanctum-authentication.html#step-3-register-user-api).

Now, we have to change the baseURL of the axios like below.

```js
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'http://127.0.0.1:8000/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

export default axiosIns
```

::: tip Note
You can change the `baseURL`, `timeout`, and `headers` according to your requirement.
:::

We have implemented register method in our `register.vue` file. You can find this file here: `resources/{ts/js}/pages/register/.vue`

```ts
const register = () => {
  axios.post<RegisterResponse>('/auth/register', {
    username: username.value,
    email: email.value,
    password: password.value,
  })
    .then(r => {
      const { accessToken, userData, userAbilities } = r.data

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)

      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))

      // Redirect to `to` query if exist or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/')

      return null
    })
    .catch(e => {
      const { errors: formErrors } = e.response.data

      errors.value = formErrors
      console.error(e.response.data)
    })
}
```

Replace `register` method with below method which includes the API call.

::: danger
This is just showing how to use axios to make API calls for authentication. Please consider checking below resources for valid API response.

[FAQ: How to check what frontend expects in API response](/faq/#how-to-check-what-frontend-expects-in-api-response)
:::

```js
const register = () => {
 axios.post('/api/auth/register',{
    name: username.value,
    email: email.value,
    password: password.value,
    c_password: password.value,
  }).then(response => {
    console.log('response >>>', response);
  })
}

```

Open your console and you should see following API response

<img :src="$withBase('/images/code-examples/frontend-api-response/api-response.png')" alt="api">

::: tip Note
Repeat the same process for Login, get user and logout APIs to authenticate user, get user details and logout the user.
:::
