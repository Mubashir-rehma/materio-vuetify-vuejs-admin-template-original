# How to set/change the base url

`VITE_API_BASE_URL` is an environment variable for managing base url of the endpoint. This will help us by not writing the base url every time we call api endpoint. We just need to write endpoint of the api. This is also helpful when we want to configure different base url for dev & production environment.

To set the base url, you need to configure `VITE_API_BASE_URL` environment variable in `.env` file.
If you don't set base url in `.env` file, it will take `/api` as default base url for all api endpoints.

When you are ready to replace the fake API with a real database, you need to update the `VITE_API_BASE_URL` with the URL of your new real API endpoints.

<Badge text='Nuxt Only' />
To set base url in nuxt, you need to configure `NUXT_PUBLIC_API_BASE_URL` environment variable, also note that we have not set the default base url in nuxt.
