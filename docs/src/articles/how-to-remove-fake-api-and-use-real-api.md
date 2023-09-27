# How To Remove Fake Api And Use Real Api

We used [msw](https://github.com/mswjs/msw) (opens new window)for mocking API calls. This makes our template API ready 😍 and more easier for you to communicate with your backend.

However, you won't need fake-api if you are using real APIs. In this case please follow below steps to remove fake-db from template.

1. Remove @fake-api folder from `src/plugins` directory.
2. Add endpoints of your real api in .env file.

  :::code-group

  ```ts [main.ts]
  import '@/@fake-db/db' // [!code --]
  ```

  :::

3. Finally we don't need msw in our package any more so remove it from package.json

:::code-group

```json [package.json]
{
  "dependencies": {
        "msw": "^1.3.0" // [!code --]
  }
}
```

:::

This will remove fake-db completely from your package. 🎉

4. Replace all fake-api endpoints with real api endpoints.

That's all !! You have replaced fake-api with real api.😍
:::warning

Now all (fake) API calls will result in 404 error until you replace them with your real API endpoints.
:::

:::tip
  Please remove `@sindresorhus/is` after removing `fake-api` as it was only used in `fake-api` for checking the types.
:::
