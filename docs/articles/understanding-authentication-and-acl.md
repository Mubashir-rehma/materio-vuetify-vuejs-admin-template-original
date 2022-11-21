# Understand Authentication & ACL

We suggest referencing the graphs in [link](https://miro.com/app/board/uXjVOtmRCb4=/?share_link_id=701570938891) as you go through each section.

## First visit

1. First vue app gets loaded
2. Along with other plugins, [CASL](https://casl.js.org/v6/en/package/casl-vue) (Access Control library) gets initialized
3. CASL initializes user ability. It will try to fetch it from localStorage if exist or will use from `initialAbility` const defined in the same file. _(File: @/plugins/casl/ability.ts)_
4. All plugins are loaded. Vue router starts navigation.
5. Router's [beforeEach](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards) guard triggers
6. We checks if users is logged in via `isUserLoggedIn` method and assign it to `isLoggedIn` const. `isUserLoggedIn` method is in `@/router/utils.ts`. If `userData` and `accessToken` both keys are exist in localStorage then it returns `true` indicating user is logged in or else return `false` indicating user isn't logged in.
7. If user can navigate to requested route _(calls `canNavigate` method in `@/@layouts/plugins/casl.ts`)_
   - **If True,** check if user is logged in & has `redirectIfLoggedIn` route meta set to `true`.
     - **If True,** redirect user to index route. This is useful for pages like login where we don't want user to visit login page if he/she is already logged in.
     - **If False,** redirect user to requested route. It's normal flow, if user wants to navigate to dashboard let he/she navigate.
   - **If False,** check if user is logged in
     - **If True,** redirect user to **not authorized** page.
     - **If False,** redirect user to login page

_(As this is our fist visit we will get landed to login page)_

## Login Flow

1. According to above, we are first time visitor and we are on login page at the moment
2. Now, we will fill up the form and submit the form to login
3. Vue app will make API call using axios
   1. If response is successful
      1. we will extract `accessToken`, `userData` & `userAbilities` from response data

          ```ts
          const { accessToken, userData, userAbilities } = r.data
          ```

      2. Now, we have authenticated we have to update the ability instance for this first we will store received abilities in localStorage `localStorage.setItem('userAbilities', JSON.stringify(userAbilities))` and update the ability instance using `ability.update(userAbilities)`. We are store received abilities in localStorage so that we can retrieve them back when we reload the page (this is covered in ["First visit"](#first-visit) section).
      3. Just like we want to retrieve userAbilities on page reload, we also have to retrieve `userData` & `accessToken` so let's store them in localStorage as well.

          ```ts
          localStorage.setItem('userData', JSON.stringify(userData))
          localStorage.setItem('accessToken', JSON.stringify(accessToken))
          ```

      4. Finally, we will redirect user to home page. Here, first we will check if there's `to` query param present to navigate user to specific page after login. If `to` query param is present we will redirect user to that page or else redirect to home page.

          ```ts
          router.replace(String(route.query.to) || '/')
          ```
