# Migrating to v4

## Plugin Registration

Please refer to [Plugins](/guide/getting-started/plugins) guide for migration.

## Axios

Replace axios import statement. You can do find & replace in your code editor.

```ts
import axios from '@axios' // [!code --]
import { axios } from '@axios' // [!code ++]
```
