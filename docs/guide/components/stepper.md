# Stepper

Stepper component can have some additional styles on top of existing `v-stepper` component provided by Vuetify. Let's check them out.

::: tip
You can check our template's source code for full code.
:::

## Styling header

When you use stepper without our customization stepper will look like below image:

<img :src="$withBase('/images/components/stepper-wo-custom-header-class.png')" alt="stepper-wo-custom-header-class" class="medium-zoom">

Notice the header of stepper component. We enhanced the header of stepper component to suite our theme and it will provide best visuals and pleasant animations. For this you have to use `custom-header` class to `v-stepper-header` component.

```vue{1}
<v-stepper class="custom-header">
  <!-- Your content... -->
</v-stepper>
```

With this class added now header will look like below image:

<img :src="$withBase('/images/components/stepper-w-custom-header-class.png')" alt="stepper-w-custom-header-class" class="medium-zoom">

Isn't it more user friendly and beautiful 😍

## Transparent Header

To create transparent header you can use below code snippet:

```vue{2,10}
<!-- We are using `alt-labels` just for showing another variant. You can remove it and still use transparent header. -->
<v-stepper v-model="activeStep" class="custom-header transparent" flat alt-labels>
  <!-- Header -->
  <v-stepper-header>
    <!-- Stepper Header Content -->
  </v-stepper-header>

  <!-- NOTE: This is important step -->
  <!-- Wrap the `v-stepper-items` in `v-card` component -->
  <v-card>
    <v-stepper-items>
      <!-- Content... -->
    </v-stepper-items>
  </v-card>
</v-stepper>
```

Above code will create result like below:

<img :src="$withBase('/images/components/stepper-transparent-header.png')" alt="stepper-transparent-header" class="medium-zoom">
