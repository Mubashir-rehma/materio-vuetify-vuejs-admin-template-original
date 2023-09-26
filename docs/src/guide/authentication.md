# Authentication

Our template uses [JWT token](https://en.wikipedia.org/wiki/JSON_Web_Token) for authentication.

## Login

Once the form is validated and successful API call is made to your API endpoint, we update user ability for access control and store the authentication related data in [Cookies](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies).

For authentication, our admin template store below data in cookies for persisting your session during reloads:

- access token
- user data (username, full name, etc.)
- user abilities

You can find login related self explanatory code in `src/pages/login.vue` file's `login` method.

## Logout

In logout we remove the stored data and reset the user abilities to initial abilities.

You can find login related self explanatory code in `src/layouts/components/UserProfile.vue` file's `logout` method.
