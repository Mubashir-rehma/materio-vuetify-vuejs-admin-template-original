# Content Renderer

::: tip Optional
If you are **not using** any of **Email, Todo, Chat or eCommerce** app then it is not required to check _Content Renderer_ docs. Content renderer are only used in these four apps.
:::

Besides layout type there is also content renderers which provides markup structure and slots to achieve some of our page structure (e.g. Chat App, Email App, ECommerce Shop, etc.)

::: tip INFO
Content renderers are not available in blank layout. It doesn't make sense in having content render because blank layout shall provide full freedom.
:::

You might not need this but if you are using one of our application which uses this content renderer then you might use it for getting proper rendering page styles.

::: tip
Search for `contentRenderer` string in `src/router` to find out which page/route uses different content renderer than default one.
:::

Below is list of content renders':

1. **default**: This is default content renderer. Mostly all pages in our template uses this default content renderer. There are high chances that **you will always use this content renderer** unless you use one of our application which uses different content renderer. **This content renderer doesn't need any configuration.**
2. `sidebar-left`: This content renderer is used in Email App, ToDo app and Chat app for rendering left sidebar.
3. `sidebar-left-detached`: This content renderer is used only in eCommerce Shop route. Again for rendering left sidebar but in detached mode.

`sidebar-left` and `sidebar-left-detached` content renderer have special requirement and that is usage of [portal-vue](https://github.com/LinusBorg/portal-vue). With this we can render our left sidebar outside of content wrapper div.

```vue{2}
<!-- ToDo Left Sidebar rendering in Todo.vue -->
<portal to="content-renderer-sidebar-left">
  <todo-left-sidebar
    :task-tags="taskTags"
    :is-task-handler-sidebar-active.sync="isTaskHandlerSidebarActive"
    :class="{'show': mqShallShowLeftSidebar}"
    @close-left-sidebar="mqShallShowLeftSidebar = false"
  />
</portal>
```

Above will teleport this `<todo-left-sidebar>` component in our structure's appropriate location to get accurate styles.

Let's check how to use both content renderer in case if you use them:

## sidebar-left Content renderer

1. Set contentRenderer route meta.

```js{6}
{
  path: '/apps/todo',
  name: 'apps-todo',
  component: () => import('@/views/apps/todo/Todo.vue'),
  meta: {
    contentRenderer: 'sidebar-left',
    contentClass: 'todo-application',
  },
},
```

Teleport your content using portal-vue, use `content-renderer-sidebar-left` as value of `to` prop in your SFC.

```vue{2}
<!-- ToDo Left Sidebar rendering in Todo.vue -->
<portal to="content-renderer-sidebar-left">
  <todo-left-sidebar
    :task-tags="taskTags"
    :is-task-handler-sidebar-active.sync="isTaskHandlerSidebarActive"
    :class="{'show': mqShallShowLeftSidebar}"
    @close-left-sidebar="mqShallShowLeftSidebar = false"
  />
</portal>
```

Everything inside this portal tag will render in left sidebar and other markup will render on right side of sidebar.

That's it. You are done. 🥂

## sidebar-left-detached Content renderer

This is used only in eCommerce app. So, this content render will be only useful in this app.

Set contentRenderer in route meta:

```js{6}
  {
    path: '/apps/e-commerce/shop',
    name: 'apps-e-commerce-shop',
    component: () => import('@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue'),
    meta: {
      contentRenderer: 'sidebar-left-detached',
      contentClass: 'ecommerce-application',
      pageTitle: 'Shop',
      breadcrumb: [...],
    },
  },
```

Teleport your content using portal-vue, use `content-renderer-sidebar-detached-left` as value of `to` prop in your SFC.

```vue{2}
<!-- eCommerce shop left Sidebar in detached mode -->
<portal to="content-renderer-sidebar-detached-left">
  <shop-left-filter-sidebar
    :filters="filters"
    :filter-options="filterOptions"
    :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
  />
</portal>
```
