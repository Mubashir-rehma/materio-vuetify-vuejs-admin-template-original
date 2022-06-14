# themeConfig

We provide a themeConfig file for users to customize the look and feel of the template. The themeConfig file is located in the root of the template folder with the name of `themeConfig.ts`.

## Typing themeConfig

### tl;dr

- `UserThemeConfig`: user theme config object
- `ThemeConfig`: `UserThemeConfig` with `Ref`
- `UserConfig`: user layout config object for layout plugin. Aliases as `UserLayoutConfig` in `@core`.
- `Config`: `UserConfig` with `Ref`. Its value has default config values.
- As `UserThemeConfig` also have typings for `UserConfig` it should take them from `UserConfig` via `UserConfig['<propertyName>']`. _(e.g. `UserLayoutConfig['app']['title']`)_

<br>

---

<br>

We have a bit complex types for themeConfig file because we have `@layouts` plugin as a part of our template.

:::tip
`@layouts` plugin is independent of the template and it can be used in any vue project. It just contains bare minimum styles and various layouts.
:::

As `@layouts` should be independent and we will provide all the template related features via `@core` directory, Typing for themeConfig file is written in `@core` dir.

themeConfig can be defined via `defineConfig` function. This function accepts `userConfig` and returns `{ themeConfig, layoutConfig}`.

| config         | type              | desc                                                      |
| -------------- | ----------------- | --------------------------------------------------------- |
| `userConfig`   | `UserThemeConfig` | user theme config object                                  |
| `themeConfig`  | `ThemeConfig`     | Same as `userConfig` but its some properties are reactive |
| `layoutConfig` | `UserConfig`      | user layout config object for layout plugin               |

Please refer to below diagram from clear explanation:

<img :src="$withBase('/images/contributing/master-config-typings.drawio.png')" alt="master-config-typings.drawio" class="medium-zoom"></img>