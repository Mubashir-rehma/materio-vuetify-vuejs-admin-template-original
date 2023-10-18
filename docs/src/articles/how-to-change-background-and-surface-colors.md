# How to change background and surface color?

To change the background and surface color of a Vuetify template, you need to understand the theme options provided by Vuetify. Vuetify offers a powerful feature called **theme** that allows you to create multiple custom themes to suit your needs. For more information on this, you can refer to the official Vuetify documentation: <https://next.vuetifyjs.com/en/features/theme/>

By default, Vuetify comes with two themes pre-installed, namely light and dark. These themes include predefined colors and variables that you can use to customize your application. Additionally, you can create your own custom variables to achieve a unique look and feel for your application.

To change the background color of the template, you can modify the background theme variable. This variable controls the background color of the entire application. On the other hand, the surface theme variable controls the color of the card components in your application. By modifying these variables, you can easily change the background and surface color of your Vuetify template to match your design preferences.

For example:

```js
// src/plugins/vuetify/theme.ts

const theme: VuetifyOptions['theme'] = {
  themes: {
    light: {
      dark: false,
      colors: {
        'background': '#f4f5fa', // for background color
        'surface': '#fffff', // for card color
        'skin-bordered-background': '#fff', // for background color in bordered skin
        'skin-bordered-surface': '#fff', // for card color in bordered skin
      },
    },
    dark: {
      dark: true,
      colors: {
        'background': '#28243d',   // for background color in dark theme
        'surface': '#312d4b', // for card color in dark theme
        'skin-bordered-background': '#312d4b', // for background color in bordered skin and dark theme
        'skin-bordered-surface': '#312d4b', // for card color in bordered skin and dark theme
      },
    },
  },
}

export default theme
```

In the above example, you can see a sample `theme.ts` file located in the `src/plugins/vuetify` directory. This file defines a custom theme object for Vuetify. The theme object contains a themes property, which is an object that defines two themes: `light` and `dark`.

Each theme object includes a dark property that determines whether the theme is a dark or light theme. Additionally, each theme object includes a colors property, which is an object that defines custom color variables that can be used throughout the application. In the example, you can see that custom variables such as `skin-bordered-background` and `skin-bordered-surface` have been defined for a bordered skin.

By setting the values of these custom variables, you can easily switch between different background and surface colors when the bordered skin is applied.
