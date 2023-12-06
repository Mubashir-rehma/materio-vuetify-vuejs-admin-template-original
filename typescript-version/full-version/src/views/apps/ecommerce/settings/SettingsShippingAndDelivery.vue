<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'

const domesticTableData = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$9' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: '-', price: '-' },
]

const InternationalTableData = [
  { rate: 'Weight', condition: '5Kg-10Kg', price: '$9' },
  { rate: 'VAT', condition: '12%', price: '$25' },
  { rate: 'Duty', condition: 'Japan', price: '$49' },
]
</script>

<template>
  <VCard class="mb-6">
    <VCardItem
      title="Shipping Zone"
      subtitle="Choose where you ship and how much you charge for shipping at checkout."
    >
      <template #append>
        <VBtn variant="text">
          Create Zone
        </VBtn>
      </template>
    </VCardItem>

    <VCardText>
      <div class="mb-6">
        <div class="d-flex flex-wrap align-center mb-4">
          <VAvatar
            :image="avatar1"
            size="34"
            class="me-4"
          />
          <div>
            <div class="text-high-emphasis">
              Domestic
            </div>
            <div>United state of America</div>
          </div>
          <VSpacer />
          <div>
            <IconBtn>
              <VIcon icon="ri-pencil-line" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="ri-delete-bin-line" />
            </IconBtn>
          </div>
        </div>

        <VTable class="mb-4">
          <thead>
            <tr>
              <th>RATE NAME</th>
              <th>CONDITION</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in domesticTableData"
              :key="index"
            >
              <td>{{ data.rate }}</td>
              <td>{{ data.condition }}</td>
              <td>{{ data.price }}</td>
              <td>
                <IconBtn>
                  <VIcon icon="ri-more-2-line" />
                </IconBtn>
              </td>
            </tr>
          </tbody>
        </VTable>

        <VBtn variant="outlined">
          Add rate
        </VBtn>
      </div>

      <div>
        <div class="d-flex flex-wrap align-center mb-4">
          <VAvatar
            :image="avatar1"
            size="34"
            class="me-4"
          />
          <div>
            <div class="text-high-emphasis">
              International
            </div>
            <div>United state of America</div>
          </div>
          <VSpacer />
          <div>
            <IconBtn>
              <VIcon icon="ri-pencil-line" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="ri-delete-bin-line" />
            </IconBtn>
          </div>
        </div>

        <VTable class="mb-4">
          <thead>
            <tr>
              <th>RATE NAME</th>
              <th>CONDITION</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(data, index) in InternationalTableData"
              :key="index"
            >
              <td>{{ data.rate }}</td>
              <td>{{ data.condition }}</td>
              <td>{{ data.price }}</td>
              <td>
                <IconBtn>
                  <VIcon icon="ri-more-2-line" />
                </IconBtn>
              </td>
            </tr>
          </tbody>
        </VTable>

        <VBtn variant="outlined">
          Add rate
        </VBtn>
      </div>
    </VCardText>
  </VCard>

  <div class="d-flex justify-end gap-x-4">
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Discard
    </VBtn>
    <VBtn>Save</VBtn>
  </div>
</template>
