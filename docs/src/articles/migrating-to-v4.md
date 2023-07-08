# Migrating to v4

## Plugins

Please refer to [Plugins](/guide/getting-started/plugins) guide for understanding how new plugin registration mechanism works.

Moreover, We moved all the plugins to `src/plugins` directory. Below is list of plugins there were not present in plugins directory before:

- Router (_was at `src/router`_)
- Pinia (_was in `src/main.ts`_)
- Iconify (_was at `src/@iconify`_)

## Axios

Replace axios import statement. You can do find & replace in your code editor.

```ts
import axios from '@axios' // [!code --]
import { axios } from '@axios' // [!code ++]
```
