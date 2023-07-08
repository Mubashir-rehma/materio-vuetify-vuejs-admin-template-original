# Authentication

Our template uses [JWT token](https://en.wikipedia.org/wiki/JSON_Web_Token) for authentication.

## Login

Once the form is validated and successful API call is made to your API endpoint, we update user ability for access control and store the authentication related data in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

For authentication, our admin template store below data in localStorage for persisting your session during reloads:

- access token
- user data (username, full name, etc.)
- user abilities

You can find login related self explanatory code in `src/pages/login.vue` file's `login` method.

## Sending access token in API call

We use [axios](https://axios-http.com/) to make API calls. Axios allows intercepting requests & responses. We intercept all requests and attach the access token in [Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization) header so API service can identify logged in user.

You can find self explanatory code for this in `src/plugins/axios.ts` file.

## Logout

In logout we remove the stored data and reset the user abilities to initial abilities.

You can find login related self explanatory code in `src/layouts/components/UserProfile.vue` file's `logout` method.

## Registration

Registration is also same as login except than API endpoint we make API call to is different.
