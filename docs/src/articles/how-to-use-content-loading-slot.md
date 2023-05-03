# How to use content loading slot

In our template, we have provided various **slots** related to layout, and one of them is the `content-loading` slot. It is very useful when you want to show a **splash screen** while navigating between pages or apps.

Here is an example of how you can use it in both vertical and horizontal menu layouts to improve the user experience.

1. Vertical Menu

    ```vue
    <!-- src/layouts/components/DefaultLayoutWithVerticalNav.vue -->
    <VerticalNavLayout :nav-items="navItems">
      <template #content-loading>
        <div>
          <h1 class="text-h1">
            Loading...
          </h1>
        </div>
      </template>
    </VerticalNavLayout>
    ```

2. Horizontal Menu

    ```vue
    <!-- src/layouts/components/DefaultLayoutWithHorizontalNav.vue -->
    <HorizontalNavLayout :nav-items="navItems">
      <template #content-loading>
        <div>
          <h1 class="text-h1">
            Loading...
          </h1>
        </div>
      </template>
    </HorizontalNavLayout>
    ```

    Refer this GIF

    ![content-loading](/images/guide/content-loading.gif)
