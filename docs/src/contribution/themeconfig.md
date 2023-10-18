# themeConfig

We provide a themeConfig file for users to customize the look and feel of the template. The themeConfig file is located in the root of the template folder with the name of `themeConfig.ts`.

## Typing themeConfig

### tl;dr

- `userConfig`: user theme config object.
- `themeConfig`: same as `UserConfig`.
- `layoutConfig`: user layout config object for layout plugin.
- `UserThemeConfig`: Type for `userConfig`,`themeConfig`.
- `UserLayoutConfig`: Type for `layoutConfig`.

<br>

---

<br>

We have a bit complex types for themeConfig file because we have `@layouts` plugin as a part of our template.

:::tip
`@layouts` plugin is independent of the template and it can be used in any vue project. It just contains bare minimum styles and various layouts.
:::

As `@layouts` should be independent and we will provide all the template related features via `@core` directory, Typing for themeConfig file is written in `@core` dir.

themeConfig can be defined via `defineThemeConfig` function. This function accepts `userConfig` and returns `{ themeConfig, layoutConfig}`.

| config         | type              | desc                                                      |
| -------------- | ----------------- | --------------------------------------------------------- |
| `userConfig`   | `UserThemeConfig` | user theme config object                                  |
| `themeConfig`  | `UserThemeConfig` | Same as `userConfig`                                      |
| `layoutConfig` | `LayoutConfig`    | user layout config object for layout plugin               |
