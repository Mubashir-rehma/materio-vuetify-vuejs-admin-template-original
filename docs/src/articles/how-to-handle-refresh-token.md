# How to handle refresh token

We don't provide support for refresh token out of the box due to certain reasons and one of them is someone developers may not use refresh token in their authentication flow.

However, It's easy to add refresh token support in current implementation.

Before heading forward, we suggest you first learn what is refresh token, why it's needed and how backend/API handles it. Next, make sure you have test your refresh token API via client like [Postman](https://www.postman.com/).

Finally in your Vue app, all you have to do is add axios **response interceptor** like below:

```ts{9-40}
// File: src/plugins/axios.ts

import axios from 'axios'

const axiosIns = axios.create({ ... })

axiosIns.interceptors.request.use(config => { ... })

axiosIns.interceptors.response.use(response => {
  return response
}, error => {
  const { config, response: { status } } = error
  const originalRequest = config

  if (status === 401) {
    // ❗ Make sure to change refresh token API endpoint
    return axiosIns.post('/auth/refresh-token', {
      refreshToken: localStorage.getItem('refreshToken')
    }).then(({ data }) => {
      if (data.accessToken) {

        // ❗ Make sure localStorage key matches the key/name you use on login & register
        localStorage.setItem('accessToken', data.accessToken)

        localStorage.setItem('refreshToken', data.refreshToken)

        // Update the headers with the new access token
        axiosIns.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`

        // Repeat the original request
        return axiosIns(originalRequest)
      } else {
        // Handle the case where the refresh token is expired or invalid
        // You can redirect to login page, show an error message, or whatever you want to do
      }
    })
  }

  return Promise.reject(error)
});

export default axiosIns
```

That's it. Your access token will auto refresh on expiration 🥳

Do note that, This is basic/common implementation of handling refresh token. You might have to update it according to your usage.
