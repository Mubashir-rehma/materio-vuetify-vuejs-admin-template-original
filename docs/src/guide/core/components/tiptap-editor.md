# Tiptap Editor

>File: src/@core/components/TiptapEditor.vue
---
We use [Tiptap](https://tiptap.dev/) for rich text editors.We have developed a TiptapEditor component, which extends EditorContent component of Tiptap.This component is utilized to show rich text editors.
Below is code snippet of component usage:

::: code-group

```vue [TS]
    <TiptapEditor v-model="content" />
```
