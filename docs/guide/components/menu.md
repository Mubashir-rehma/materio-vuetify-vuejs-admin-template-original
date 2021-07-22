# Menu

## Custom list styling

We have added custom styling for menu content's list which looks like below:

<img :src="$withBase('/images/components/menu-list-style.png')" alt="menu-list-style" class="medium-zoom">

This give menu content rendering a bit pleasing than default vuetify's list rendering. However, there might be case where you want to use the default list styles like where you want large Y space between each list items, In those cases you can use `content-class="list-style"` to get back the list styles in `v-menu` component's content.

- With `content-class="list-style"` prop in `v-menu`

<img :src="$withBase('/images/components/menu-wo-list-style.png')" alt="menu-wo-list-style" class="medium-zoom">
