# Introduction

`src/@core` directory in our template is core of our template. All styles, components, composables, etc reside in this dir. As this is the heart of our template, most template updates will require updating this directory.

## Components

Components provided by template core will get auto imported when you use them thanks to [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

## Validators

Another common thing you might use from `@core` is validators for form validation.

Validators are placed in `src/@core/utils/validators.ts` file. All validators are auto imported when you use them thanks to [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).

Later on, just pass these validators to `rules` prop.
