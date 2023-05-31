# Styles

We have created a set of highly useful mixins that greatly facilitate fast and efficient development.

## before-pseudo

The `before-pseudo` mixin is inspired by Vuetify and provides a convenient way to add hover styles using a before pseudo-element in SCSS (Sass) stylesheets.

### Usage

To use the `before-pseudo` mixin, follow these steps:

  1. Include the mixin in your SCSS file using the @include directive.
  2. Apply the before-pseudo mixin to the desired selector.

```scss
@use "@core/scss/base/mixins";

.my-element {
  @include before-pseudo;
}
```

<<< ../typescript-version/full-version/src/@core/scss/base/_mixins.scss#before-pseudo

### Example

Here's an example usage of the `before-pseudo` mixin:

```scss
.button {
  @include before-pseudo;

  // Adds vuetify states
  @include vuetifyStates.states($active: false);
}
```

In the above example, the `.button` class will have a `before` pseudo-element added, which covers the entire element. When the button is hovered over, the opacity of the before pseudo-element changes to `0.5`, creating a hover effect.

## selected-states

The `selected-states` mixin is inspired by Vuetify's active-states mixin. It provides a convenient way to apply selected states to a specified selector, adding visual effects such as opacity changes. This mixin is especially useful for enhancing interactivity in SCSS (Sass) stylesheets.

### Usage

To utilize the `selected-states` mixin, follow these steps:

   1. Include the mixin in your SCSS file using the `@include` directive.
   2. Pass the desired selector as an argument to the mixin.

  ```scss
  @include selected-states('.my-selector') {
    // Styles specific to the selected states of '.my-selector'
  } 
  ```

  <<< ../typescript-version/full-version/src/@core/scss/base/_mixins.scss#selected-states{1}

## Example

Here's an example usage of the `selected-states` mixin:

```scss
.my-button.active {
  @include selected-states('.my-selector') {
    background-color: blue;
    color: white;
  }
}
```

In the above example, the `.my-button` class will have the selected states styles applied to the `.my-selector` element, resulting in a blue background and white text color when the element is in the selected states.
