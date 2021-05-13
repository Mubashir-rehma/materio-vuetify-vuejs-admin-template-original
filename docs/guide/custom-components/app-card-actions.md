# App Card Actions

Use `app-card-actions` component to create card with collapse, refresh and remove actions.

## Default

`app-card-actions` component is same as Vuetify's [v-card](https://vuetifyjs.com/en/components/cards/) component.

:::warning WARNING
As refresh action is used for async data fetching, you have to call card's `hideOverlay` emitted event value to hide the overlay once you are done with fetching data.
:::

```vue
<template>
  <app-card-actions @refresh="refetchData">
    <template slot="title">
      Card With All Actions
    </template>
  </app-card-actions>
</template>

<script>
import AppCardActions from '@core/components/app-card-actions/AppCardActions.vue'

export default {
  components: {
    AppCardActions,
  },
  setup() {
    const refetchData = hideOverlay => {
      setTimeout(() => {
        hideOverlay()
      }, 3000)
    }

    return {
      refetchData,
    }
  },
}
</script>
```

You can check demo in "Card Actions" card on [this](#) page.

## Specific Action

You can also use only specific action if you don't want to use all actions. Just pass the name of action with `action-` prefix as prop and you will get that specific action.

e.g. `action-close`

```vue{2}
<template>
  <app-card-actions title="Card w/ Collapse Action Only" action-collapse>
    <span>You can use default slot to render your content inside card.</span>
  </app-card-actions>
</template>
```

You can check demo in "Collapsible", "Refresh Content" and "Remove Card" card on [this](#) page.

::: tip
`app-card-actions` component also accepts all valid `v-card` props.
:::

## Component API

### Props

| Name           | Description                                                                               | Type    | Parameters | Default |
| :------------- | :---------------------------------------------------------------------------------------- | :------ | :--------- | :------ |
| collapsed      | make card collapsed from start                                                            | boolean | true/false | false   |
| noActions      | Remove all actions from component. (If you are using this prop just use v-card component) | boolean | true/false | false   |
| actionCollapse | Enable Collapse action                                                                    | boolean | true/false | false   |
| actionRefresh  | Enable refresh action                                                                     | boolean | true/false | false   |
| actionRemove   | Enable remove action                                                                      | boolean | true/false | false   |

### Events

| Name     | Description               | Value                                    |
| :------- | :------------------------ | :--------------------------------------- |
| collapse | Collapse action triggered | Value indicating if content is collapsed |
| refresh  | Refresh action triggered  | `hideOverlay` method for hiding overlay  |
| remove   | remove action triggered   |                                          |

### Slots

| Name           | Description                                    | Slot Props |
| :------------- | :--------------------------------------------- | :--------- |
| title          | For rendering title                            | None       |
| before-actions | For rendering content on left side of actions  | None       |
| after-actions  | For rendering content on right side of actions | None       |
