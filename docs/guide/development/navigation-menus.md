# Navigation Menus

In this page you will find how to add/update navigation menu items.

## Vertical Navigation Menu

To update the vertical navigation menu items, update `src/navigation/vertical/index.js` file. We just created different files for different sections so we can find items easily. You can follow the same or just write the all the items in `index.js` file.

Let's understand how to create each navigation menu item:

### Section Title

You can create section title using simple object with single property `subheader`:

```js
{
  subheader: 'Apps & Pages',
},
```

This will create header section title and **will handle i18n**. Value of header property will be used as key for i18n.

<br>

### Navigation Menu Link

This will be the route link. For creating link follow below object structure:

```js
{
  title: 'Email',
  to: 'apps-email',
  icon: 'MailIcon',
},
```

Let's understand what each property represents:

- `title` property will be title (rendered text) of this link. This will be key for i18n.
- `to` is vur-router's [route name](https://router.vuejs.org/guide/essentials/named-routes.html).
- `icon` property value should be material design icon.

You can also use route object as value of `to` property.

```js
{
  title: 'John Doe',
  to: { name: 'apps-users-view', params: { id: 21 } },
  icon: mdiAccount,
},
```

Besides internal route of app you can also create link for external sites:

```js
{
  title: 'Documentation',
  href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
  icon: mdiFile,
},
```

This will create external link which will open this link in new tab using `target="_blank"` and also it will add `rel="nofollow"`. Please note in above example we have used `href` property for external links and not `to` property.

::: tip
You can also use `target` property in internal app route if you want to open your app's internal route in new tab, just like we did with authentication pages.
:::

This will help you provide link for any type you wish in your navigation menu. Isn't it great. 😍

:::warning Rendering as child of Menu Group
If your navigation menu link is child of any navigation menu group then it will render circle as icon and if you provide any icon using icon property it will render as well but size of that icon will be smaller than normal icons.

So, don't provide `icon` property if your navigation link is child of navigation menu group.
:::

Besides this feature, you can also add badge to your link or group:

```js
{
  title: 'Email',
  route: 'apps-email',
  icon: mdiEmailOutline,
  badge: 'new',
  badgeColor: 'error',
},
```

You can use `badge` and `badgeColor` property to render tag for link.

- **badge**: property is used to render badge text
- **badgeColor**: This property is optional. Default variant for badge is `primary`.

There's also way to disable certain link if you don't want to allow navigation, just use `disable` property and set it to `true`.

```js
{
  title: 'Disabled Menu',
  route: null,
  icon: mdiClose,
  disabled: true,
},
```

<br>

### Navigation Menu Group

For navigation menu group you can use below object:

```js
{
  title: 'Dashboards',
  icon: mdiHome,
  children: [
    // This is array of menu items or menu groups
    // NOTE: You can't use section titles (subheader) as children
  ],
},
```

Let's understand what each property represents:

- `title` property will be title of that group and it is key for i18n as well.
- `icon` property value should be material design icon.
- `children` property is group children. It can have menu items or menu groups as children.

This also support `badge`, `badgeColor` and `disabled` properties same as menu link.

::: warning Rendering as child of Menu Group
If menu group is child of menu group then it's icon property is `optional` just like rendering of _menu link inside menu group_.
:::

## Horizontal Navigation Menu

To update horizontal navigation menu items, update `src/navigation/horizontal/index.js` file. Let's understand how to create horizontal navigation menu:

### Header

Creating section title is little bit different than vertical navigation menu. You need to specify `icon` and `children` of header this time:

```js
{
  header: 'Dashboards',
  icon: mdiHome,
  children: [
    // This is array of menu items or menu groups
    // NOTE: You can't use menu header as children
  ],
},
```

All property purpose is same as vertical navigation menu.

### Navigation Menu Link

_Same as vertical navigation menu_

You can also render menu link at top level outside of section title just like vertical navigation menu's link don't need header on top of it.

:::warning WARNING
Horizontal navigation menu don't support `badge` & `badgeColor` properties. This decision is made to make UI clutter free.
:::

### Navigation Menu Group

_Same as vertical navigation menu_

Use section title if you want to create top level group for horizontal navigation menu.

## Adding ACL

You will learn how to show/hide navigation based items for different users in [Access Control](/guide/development/access-control.md) page.
