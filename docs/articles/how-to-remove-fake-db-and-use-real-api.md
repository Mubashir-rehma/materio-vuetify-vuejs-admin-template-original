# How To Remove Fake Db And Use Real Api

We used [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) (opens new window)for mocking API calls. This makes our template API ready 😍 and more easier for you to communicate with your backend.

However, you won't need fake-db if you are using real APIs. In this case please follow below steps to remove fake-db from template.

1. Remove @fake-db folder from src directory
2. Remove fake-db import from main.js or main.ts file

```diff
// main.ts or main.js

- import '@/@fake-db/db'
```

3. Finally we don't need axios-mock-adapter in our package any more so remove it from package.json

```diff
{
  dependencies: {
-    "axios-mock-adapter": "^1.21.2",
  }
}
```

This will remove fake-db completely from your package. 🎉

4. Replace all fake-db api endpoints with real api endpoints.

That's all !! You have replaced fake-db with real api.😍
:::warning

Now all (fake) API calls will result in 404 error until you replace them with your real API endpoints.
:::
