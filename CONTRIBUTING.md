# Contributing

We try to make our admin template the best in class so developers don't have to look for any other resources while developing their apps.

Besides UI & UX we also focus on DX (Developer Experience). Please read the full guide to understand how to contribute to our template.

## 🎯 Goals

- Easy to understand
- Quick to get started
- Readable code
- Follow DRY

### 🖖 Easy to understand

First of all, folder structure of the template should be easy to understand so that new developers can easily grasp it. It will also allow them to easily find code/file they are looking for

### 🏃‍♂️💨 Quick to get started

No one wants to spend their week understanding the template. Hence, our template should provide:
- Easy installation
- Quick customization
- Detailed documentation

### 📃 Readable code

> _"Code is written once but read many times"_

As an author of the code, we know what's going on in our code but for other developers, it is beneficial to write the readable code. For writing readable code:
- Comment the code
- Format the code _(it is automated via formatters like prettier, eslint, etc)_
- Refactor if required
- Add whitespaces if needed
- Follow [zen of python](https://peps.python.org/pep-0020/#the-zen-of-python)
- Self descriptive naming of variables, methods, classes, etc.

Below is example of why commenting the code improves readability

```vue
<!-- Without commenting and whitespaces -->
<template>
  <v-btn color="primary">
    <span>Activator</span>
    <v-menu activator="parent">
      <v-list>
        <v-list-item
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
        >
          <v-list-item-avatar start>
            <div :class="lang.flagpackClass" />
          </v-list-item-avatar>
          <v-list-item-title>{{ lang.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
```

```vue
<!-- With commenting & whitepsaces -->
<template>
  <v-btn color="primary">
    <span>Activator</span>

    <!-- Menu -->
    <v-menu activator="parent">
    
      <!-- List -->
      <v-list>
      
        <!-- List item -->
        <v-list-item
          v-for="lang in props.languages"
          :key="lang.i18nLang"
          :value="lang.i18nLang"
        >
          <!-- Flag -->
          <v-list-item-avatar start>
            <div :class="lang.flagpackClass" />
          </v-list-item-avatar>

          <!-- Flag label -->
          <v-list-item-title>{{ lang.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>
```

Moreover, if your code is logical and complex it should be commented properly so we don't have to log/debug it to understand how it works.

Writing descriptive names is also great boost to code readability. Let's see an example:

#### Without descriptive name

```ts
const visible = false
const reload = () => {}
```

It is not clear what this variable refers to. We have to read the whole code and understand its context to working with it.

With function name, name of function doesn't tell what it reloads. Does it reload the page or something else?

#### With descriptive name

```ts
const isLayoutOverlayVisible = false
const reloadTableData = () => {}
```

This variable is now self descriptive, meaning we can just look at the name of variable and understand that it is for layout overlay.

With self descriptive name like `reloadTableData` you can easily understand that it will just reload the table data and won't affect any other ongoing process.

This kind of self descriptive name will allow users to easily skim through code and allow us changing portion of the code without worrying about breaking the whole code.


### ♻️ DRY

> _"Do not Repeat Yourself"_


Loosely speaking DRY means no duplicate code. DRY, code refactoring and code reusability are closely related terms.

To keep your code DRY (no duplication), you have to refactor it.

Assume, you want to update the tooltip position each time there's a change in window size or window is scrolled.

```ts
/* 6 Lines */
// code variables and functions...

window.addEventListener('scroll', () => {
  tooltipPosition.y = getTooltipPositionY()
})

window.addEventListener('resize', () => {
  tooltipPosition.x = getTooltipPositionX()
  tooltipPosition.y = getTooltipPositionY()
})
```

You can refactor above code to:

```ts
// == 9 Lines
// code variables and functions...

const addEventListener = (listener, callbackFn) => {
  window.addEventListener(listener, callbackFn)
}

const calculateTooltipPosition = () => {
  tooltipPosition.x = getTooltipPositionX()
  tooltipPosition.y = getTooltipPositionY()
}

addEventListener('scroll', calculateTooltipPosition)
addEventListener('resize', calculateTooltipPosition)
```

We removed duplicate code where we were writing `getTooltipPosition{X|Y}` multiple times. Now, it is only written inside `calculateTooltipPosition`.

Moreover, we also wrapped `window.addEventListener` in `addEventListener` for reusability.

Refactored code might be longer in this small code example but this will be greatly helpful in real world or large codebase.

Let's calculate tooltip position in multiple places:

```ts
// == 8 Lines
import { getTooltipPositionX, getTooltipPositionY } from 'some-module'

window.addEventListener('scroll', () => {
  tooltipPosition.y = getTooltipPositionY()
})

window.addEventListener('resize', () => {
  tooltipPosition.x = getTooltipPositionX()
  tooltipPosition.y = getTooltipPositionY()
})
```

Reusing refactored code we are able to follow DRY - No duplication, code reusability, clean & easy to understand code.

```ts
// == 3 Lines
import { addEventListener, calculateTooltipPosition } from 'some-module'

addEventListener('scroll', calculateTooltipPosition)
addEventListener('resize', calculateTooltipPosition)
```

Great! Now, we can calculate the tooltip position in just 3 lines. 😍
