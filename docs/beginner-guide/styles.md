# Styles

## Writing your own SCSS

You can write your own SCSS in `/src/styles/styles.scss` file.

## Overriding variables

If you want to override any of vuetify or our custom variable then you can override it in `/src/styles/_variables.scss` file.

You can override variables like below:

```scss{2}
@forward "@layouts/styles/variables" with (
  $enable-rtl-styles: false
);
```

<br>

You can get list of variables you can override in below locations:

- Check `/src/@core/layouts/styles/_variables.scss` file for our custom variables
<!-- TODO: Update below URL -->
- Check Vuetify SASS variables [page](https://vuetifyjs.com/en/features/sass-variables/)
