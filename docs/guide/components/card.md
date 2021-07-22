# Card

## "dense" class

You can use `dense` class along with `v-card-actions` to create button which has properly aligned button text with the other card content.

- With `dense` class

<img :src="$withBase('/images/components/v-card-actions-dense.png')" alt="v-card-actions-dense" class="medium-zoom">

- Without `dense` class

<img :src="$withBase('/images/components/v-card-actions-wo-dense.png')" alt="v-card-actions-wo-dense" class="medium-zoom">

- Code Snippet

```html{1}
<v-card-actions class="dense">
  <v-btn color="primary" text>
    Details
  </v-btn>
</v-card-actions>
```
