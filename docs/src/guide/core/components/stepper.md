# Stepper

> File: src/@core/components/AppStepper.vue

---

The Stepper component is a useful tool for simplifying complex processes into a series of step-by-step instructions. There are two types of steppers available in this component:

- Default stepper (without icons)
- Icon stepper - Automatically chosen when an `icon` is added to an item in the stepper's step array.

:::warning
Please note that although we have created a custom component for the stepper, it will be replaced with Vuetify's stepper component in the future.
:::

## Props

The following are the props available for this component:

### items

 | Required | Type: Array | Default : undefined |
 | -------- | -------- | -------- |

  This is an array of objects representing the different steps of the stepper. Each object should have a `title` property and can optionally have `icon`, `size`, and `subtitle` properties.

### direction

 | Optional | Type: String | Default : horizontal |
 | -------- | -------- | -------- |

  You can choose between displaying the stepper in two different directions: `vertical` or `horizontal`.

### currentStep

 | Required | Type: number | Default : 0 |
 | -------- | -------- | -------- |

This prop is mandatory and needs to be assigned with `v-model` like this: `v-mode:currentStep="your_current_step_variable"`. The currentStep prop represents the currently active step in the stepper.

### iconSize

 | Optional | Type: number| Default : 52 |
 | -------- | -------- | -------- |

This is an optional prop that allows you to set the `size` of the **icons** in the icon type stepper. If you're using the default stepper, this prop is not applicable.

### isActiveStepValid

 | Optional | Type: Boolean | Default : undefined |
 | -------- | -------- | -------- |

 This is another optional prop that you can use to `validate` your step. If set to `true`, the current step will be considered valid and the user can move on to the next step. If set to `false`, the user won't be able to proceed to the `next` step until the current step is valid. If this prop is not provided, all steps will be considered valid by default.

## Style

- **stepper-icon-step-bg**: The class .stepper-icon-step-bg is designed specifically for creating steppers with colored backgrounds for each step, and is intended to be used exclusively with **icon-based** steppers. Please note that this class is not compatible with default steppers that display numbers.
