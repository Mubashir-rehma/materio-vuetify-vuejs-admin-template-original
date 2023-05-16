# How to use cookies instead of local storage?

In our template, we have currently used **local storage** to facilitate features such as **authentication**, and **access control**. While this approach serves our demo purpose adequately, using cookies instead of local storage may offer greater security benefits. Cookies provide an additional layer of security as they can be configured with attributes such as **HttpOnly**, **Secure**, and **SameSite**, which can protect against cross-site scripting (XSS) attacks and other malicious activities.

To implement the use of cookies instead of local storage in our template, we recommend installing two packages from VueUse: **@vueuse/integrations** and **universal-cookie**. Follow installation [documentation](https://vueuse.org/integrations/useCookies/#usecookies). These packages provide convenient methods for setting and getting cookies in your project. For more information on how to use these packages, please refer to the official documentation available at <https://vueuse.org/integrations/useCookies/#usecookies>. By adopting these packages, we can enhance the security of our template and protect against potential security threats that may arise from using local storage.

For example:

```vue
<template>
  <div>
    <strong>locale</strong>: {{ cookies.get('locale') }}
    <hr>
    <pre>{{ cookies.getAll() }}</pre>
    <button @click="cookies.set('locale', 'ru-RU')">Russian</button>
    <button @click="cookies.set('locale', 'en-US')">English</button>
  </div>
</template>

<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'
  
const cookies = useCookies(['userAbilities', 'userData', 'accessToken'])

const login = () => {
axios.post<LoginResponse>('/auth/login', { email: email.value, password: password.value })
  .then(r => {
    const { accessToken, userData, userAbilities } = r.data

    cookies.set('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)

    cookies.set('userData', JSON.stringify(userData))
    cookies.set('accessToken', JSON.stringify(accessToken))

    // Redirect to `to` query if exist or redirect to index route
    router.replace(route.query.to ? String(route.query.to) : '/')
  })
  .catch(e => {
    const { errors: formErrors } = e.response.data

    errors.value = formErrors
    console.error(e.response.data)
  })
}
</script>
```
