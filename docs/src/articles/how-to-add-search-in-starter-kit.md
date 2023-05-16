# How to add search in starter-kit

Search has been implemented in the full-version only. If you have started your project using the starter kit as per our suggestion, please follow the below steps to implement search functionality:

- Copy the `NavSearchBar.vue` component file from `full-version/src/layouts/components/NavSearchBar.vue` and paste the file in the same path in the `starter-kit` folder.
- Now include the `NavSearchBar` component in `DefaultLayoutWithVerticalNav.vue` and `DefaultLayoutWithHorizontalNav` file.

  ```vue
  # DefaultLayoutWithVerticalNav.vue | DefaultLayoutWithHorizontalNav.vue
  <template #navbar="{ toggleVerticalOverlayNavActive }">
    ....
    <NavSearchBar />
    ... 
  </template>
  ```

- Copy the `full-version/src/@fake-db/app-bar-search/index.ts` & AppBarSearchType type from the `full-version/src/@fake-db/types.d.ts` files and paste them into the same paths in the starter-kit folder.

And this is it. Enjoy searching in the template. 🎉🥳

## Customization

We have made our search component easy to customize as per your requirement without touching core components.

[search-gif](/images/code-examples/article/search.gif)

### Default Search suggestion

- We have provided `suggestions` prop to provide default search suggestion. You have to provide the suggestion array in below mentioned format.

  ```js
  [
    {
      title:string
      content: [
        icon:string,
        title:string
        url:string
      ]
    }

    ...
  ]
  ```

- If you want to modify the default suggestions completely then we suggest to use `suggestions slot`.

  ```vue
  <AppBarSearch>
    <template #suggestions>
       use this slot if you want to override default suggestions completely
    </template>
  </AppBarSearch>
  ```

  ![default-suggestion](/images/code-examples/article/default-suggestions.png)

### Search List

- We have provided `search-results` prop to render the search list. You have to follow below data formate to render list properly.

  ```js
  [
    { header : string, title : string },    -------> Optional
    {
      id: number
      url: { name:string, params?: object}
      icon: string
      title: string
      category: string
    }

    ...
  ]
  ```

- If you want to modify the search list completely then we suggest to use `searchResult slot`.

  ```vue
  <AppBarSearch :search-results="searchResult">
    <template #searchResult="{ item }">
      use this slot to change the search item
    </template>
  </AppBarSearch>
  ```

  ![search-list](/images/code-examples/article/search-list.png)

### No search data

- We have provided `no-data-suggestion` prop that render the some search suggestions. If you just want to modify the **no-data suggestion** then please follow the data formate.

  ```js
  [
    {
      icon: string
      title: string
      url:  { name: string; params?: object }
    }

    ...
  ]
  ```

- You can also modify the no-data section completely using the `noData slot`.

  ```vue
  <AppBarSearch>
    <template #noData>
      use this slot to change the view of no data section
    </template>s
  </AppBarSearch>
  ```

  ![no-search-data](/images/code-examples/article/no-search-data.png)
