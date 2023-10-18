# Introduction

`src/@core` directory in our template is core of our template. All styles, components, composables, etc reside in this dir. As this is the heart of our template, most template updates will require updating this directory.

## Components

Components provided by template core will get auto imported when you use them thanks to [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

## Composables

We have developed a set of composables that simplifies the development process. You can find all the composables at: `src/@core/composable/`. Please refer this [page](composables.md) for detailed description of composables.

All the composables will get auto imported when you use them thanks to [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

## Scss

In this directory we have defined the styles for our template.

## Stores

In `config.ts` file, we have defined a store `useConfigStore` which helps us to modify configs.

## Utils

In this directory, we have defined various utilities in `formatters.ts`, `validators.ts`, `helpers.ts` files. As the code in this files are self explanatory, you can explore this files for more details.

### Validators

Another common thing you might use from `@core` is validators for form validation.

Validators are placed in `src/@core/utils/validators.ts` file. All validators are auto imported when you use them thanks to [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).

Later on, just pass these validators to `rules` prop.
