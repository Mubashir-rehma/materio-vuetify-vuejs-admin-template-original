# VS Code setup

## Recommended Extensions

Open extensions and search for `@recommended`

<img :src="$withBase('/images/guide/vscode-recommended-extensions.png')" alt="vscode-recommended-extensions.png" class="medium-zoom">

Install and enable all the recommended extensions. Read more about workspace recommended extensions in VS Code official [docs](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions).

## Comment Anchors Extension

### Settings

We use [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors) extension for quick navigation within a file. We have provided our own extension settings for providing anchors in the file. You can refer to these settings in `.vscode/settings.json` file.

### Snippet

We also provided the snippet for adding the comment anchors. You can find this snippets in `.vscode/comment-anchors.code-snippets` file.

We use "👉" for adding anchors to the code. You can get this emoji by writing `cm-` (press `ctrl`/`cmd` + `space` if popup doesn't open) and choosing `cm-hand-emoji` snippet.

<img :src="$withBase('/images/guide/vscode-comment-anchors-snippets.png')" alt="vscode-comment-anchors-snippets" class="medium-zoom">

## Secondary Sidebar 🦸

Secondary sidebar is game changer for code navigation when combined with this extension. Press `ctrl`/`cmd` + `shift` + `p` and search for secondary sidebar.

<img :src="$withBase('/images/guide/vscode-enable-secondary-sidebar.png')" alt="vscode-enable-secondary-sidebar" class="medium-zoom">

After this you will get the new sidebar on the right. Now drag the comment anchors extension panel from left sidebar to right sidebar.

With above changes now you code editor will look like below. Notice, main sidebar on left and secondary sidebar with comment anchors on right for in file code navigation.

<img :src="$withBase('/images/guide/vscode-secondary-sidebar-preview.png')" alt="vscode-recommended-extensions.png" class="medium-zoom">

Once, you have the file with the comments anchor setup you will get the list of anchors in secondary sidebar that is placed on right.

<img :src="$withBase('/images/guide/vscode-comment-anchor-demo.gif')" alt="vscode-recommended-extensions.png" class="medium-zoom">

## Snippets

We also provide useful snippets for boosting your productivity. You can find them in `.vscode/` directory. Files ending with `.code-snippets` are snippets.
