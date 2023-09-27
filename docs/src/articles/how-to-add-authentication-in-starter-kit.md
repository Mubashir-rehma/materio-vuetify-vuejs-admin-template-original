# How to add authentication in Starter-kit

## Add Fake-api

The fake database that we have created using the msw plugin can be used for testing and development purposes. It allows you to simulate a real database without the need for an actual server. This can save time and resources while still providing reliable and accurate results.

To add the fake database to our starter-kit, all you need to do is copy the **fake-api** folder from full-version, which is located at `src/plugins/fake-api`. This includes all the necessary packages and configurations that have been set up in the full version. This will make it easy to get started with testing and development without the need to set up the fake database from scratch.

In the **fake-api** folder, only the **auth** folder contains the necessary logic for the authentication system. To keep the folder minimal and avoid unnecessary clutter, you can remove all other folders from the **handlers** folder. This will leave you with only the relevant files and code needed for the authentication system in the starter-kit.

## Register CASL

Our authentication is coupled with CASL Plugin, which handles user permissions and access control. To utilize this authentication system in the starter-kit, it is necessary to also include the CASL plugin.  To implement CASL, we need to register the abilitiesPlugin in the main.ts file of our application.

```ts
import ability from '@/plugins/casl/ability'
import { abilitiesPlugin } from '@casl/vue'

app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})
```

## Add Auth Pages

To complete the integration of authentication in the starter-kit, you need to copy the **login.vue**, **register.vue** and **forgot-password.vue** files from the **full-version** of the application to the **starter-kit**. This will ensure that all the necessary components, logic and functionality of the authentication pages are included in the starter-kit.

## How to use real database

After verifying that the authentication system works properly with the **fake-db**, you can remove it and use your actual database. To do this, you can refer to the [article](how-to-remove-fake-api-and-use-real-api.md) that outlines the steps for removing the fake-db.

It is important to note that in addition to removing the fake-db, you will also need to make necessary changes to the API call endpoints(use your API endpoint) and logic to ensure that the application works seamlessly with the actual database.

It's always advisable to test the implementation with your use case in mind, and ensure that it works as expected before deploying it to production.
