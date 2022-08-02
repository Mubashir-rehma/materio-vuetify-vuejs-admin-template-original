# Axios

We use axios to make API calls in our template.

## Axios instance

We don't use axios directly in our template. We use configured axios instance through out the template.

Please make sure to import the axios instance in your code instead of using `axios` directly.

```diff
- import axios from 'axios'
+ import axios from '@axios'
```

`@axios` is alias we created in `vite.config.ts` file. It points to `/src/plugins/axios` file.

### Why use configured axios instance?

- You can set default base URL for all your API calls.
- You can set interceptors for all your API calls to handle errors and success. This is especially helpful if you are using refresh token for authentication.
- You can set default headers for all your API calls.
- You can set default timeout for all your API calls.

Please refer to its [docs](https://github.com/axios/axios#request-config) for available options.
