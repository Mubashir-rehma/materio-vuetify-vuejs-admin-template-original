# How to create datatable using simple table

Vuetify does not provide datatable yet in Vuetify 3 version. We have created a simple datatable which is use Vuetify's `v-table` component.

Here we understand how it worked.

## Fetch table data using API

```js
const searchQuery = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const invoices = ref<Invoice[]>([])
const totalPage = ref(1)
const totalInvoices = ref(0)

// 👉 Fetch Invoices
watchEffect(() => {
  invoiceListStore.fetchInvoices(
    {
      q: searchQuery.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
    },
  ).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
})
```

## Integrate your data inside table

```html
<!-- SECTION Table -->
  <VTable class="text-no-wrap invoice-list-table">
    <!-- 👉 Table head -->
    <thead>
      <tr>
        <!-- 👉 Check/Uncheck all checkbox -->
        <th
          scope="col"
          class="text-center"
        >
          <div style="width: 1rem;">
            <VCheckbox
              :model-value="selectAllInvoice"
              :indeterminate="(invoices.length !== selectedRows.length) && !!selectedRows.length"
              @click="selectUnselectAll"
            />
          </div>
        </th>

        <th scope="col"> #ID </th>

        <th scope="col"> Name </th>
      </tr>
    </thead>

    <!-- 👉 Table Body -->
    <tbody>
      <tr
        v-for="invoice in invoices"
        :key="invoice.id"
      >
        <!-- 👉 Individual checkbox -->
        <td>
          <div style="width: 1rem;">
            <VCheckbox
              :id="`check${invoice.id}`"
              :model-value="selectedRows.includes(`check${invoice.id}`)"
              @click="addRemoveIndividualCheckbox(`check${invoice.id}`)"
            />
          </div>
        </td>

        <!-- 👉 Id -->
        <td>
          <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
            #{{ invoice.id }}
          </RouterLink>
        </td>  
        
         <!-- 👉 Name -->
        <td>
         {{invoice.name}}
        </td>  
      </tr>
    </tbody>

    <!-- 👉 table footer  -->
    <tfoot v-show="!invoices.length">
      <tr>
        <td
          colspan="8"
          class="text-center text-body-1"
        >
          No data available
        </td>
      </tr>
    </tfoot>
  </VTable>
  <!-- !SECTION -->
```

## Pagination

We have used `v-pagination` component here.

```html
 <VPagination
  v-model="currentPage"
  size="small"
  :total-visible="1"
  :length="totalPage"
  @next="selectedRows = []"
  @prev="selectedRows = []"
/>
```

```js
const currentPage = ref(1)
const totalPage = ref(1)
const selectedRows = ref<string[]>([])


// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})
```

## Check/Uncheck All/Individual checkbox

Here is the method how we manage to check and uncheck checkbox in our some demos

```js
const selectAllInvoice = ref(false)
const invoices = ref<Invoice[]>([])
const selectedRows = ref<string[]>([])

// 👉 Add/Remove all checkbox ids in/from array
const selectUnselectAll = () => {
  selectAllInvoice.value = !selectAllInvoice.value
  if (selectAllInvoice.value) {
    invoices.value.forEach(invoice => {
      if (!selectedRows.value.includes(`check${invoice.id}`))
        selectedRows.value.push(`check${invoice.id}`)
    })
  }
  else {
    selectedRows.value = []
  }
}

// 👉 watch if checkbox array is empty all checkbox should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllInvoice.value = false
}, { deep: true })


// 👉 Add/Remove individual checkbox in/from array
const addRemoveIndividualCheckbox = (checkID: string) => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)

    selectedRows.value.splice(index, 1)
  }
  else {
    selectedRows.value.push(checkID)
    selectAllInvoice.value = true
  }
}
```

Please refer invoice list app for full source code.
Here is the file path: `full-version/src/pages/apps/invoice/list/index.vue`
