---
sidebar: 'auto'
---

# FAQ

::: tip
If you can't find your problem. Try searching related term as well.
:::

::: tip I can't find my issue/problem/question listed here, What to do now?
If you can't find your issue/problem/question listed here then you can [raise support](/guide/getting-started/support.md) at our support portal. For **getting your solution quickly with minimum conversation**, please check out our getting support page which provides some tips on how to raise perfect support ticket to get solution quickly so our development team don't have to ask for things which takes time and waste your precious development time.
:::

## Picker header is not looking as expected in dark

Please [check](/guide/components/picker.md) the picker page for solution.

## How to check what frontend expects in API response

You can find all our fake API responses in "src/@fake-db" folder.

You can get list of fake API endpoints by searching for `mock.on` in "src/@fake-db" folder.

::: tip
You can find authentication related fake responses in "src/@fake-db/jwt/index.js" file.
:::

## Authentication/ACL gives "Unexpected token u in JSON at position 0"

You might get this if you have corrupted or wrong data in your `localStorage`. **Please clear localStorage to resolve this issue.**

This error can be caused by below code:

```js
JSON.parse(localStorage.getItem('userData'))
```

In above code we are getting `userData` from localStorage and due to invalid JSON value in your localStorage you might get this error.

## ACL - I have role based system for access control instead ability based

If you are using our ACL provided in our template then it is ability-based ACL not role-based. You can learn more about using role-based system using the same package we used. Please read in their official docs:

[CASL - Roles With Static Permissions](https://casl.js.org/v5/en/cookbook/roles-with-static-permissions)
