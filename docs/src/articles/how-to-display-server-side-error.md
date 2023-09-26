# How to display server side errors

For displaying server side errors, we need to return error response from the server.

We have implemented `Server side error handling` in the `Login` page. When Email id or password doesn't match with the correct credentials, the server returns error response and will display them as error messages in our page.

Please check below code snippet:

```ts

const errors = ref<Record<string, string | undefined>>({
    email: undefined,
    password: undefined,
})

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
    
```

In the code snippet above, we are initiating the POST request to server for verifying our credentials. If there is any error in verifying the credentials we will receive an error from the server, which will then captured and assigned to errors object in `onResponseError` callback. Further, we can use this object to show error in our page.
