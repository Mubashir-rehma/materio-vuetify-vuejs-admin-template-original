<template>
  <div>
    <VCard
      title="Location Name"
      class="mb-6"
    >
      <VCardText>
        <VTextField
          label="Location Name"
          placeholder="Empire Hub"
        />
        <div class="my-4">
          <VCheckbox label="Fulfil online orders from this location" />
        </div>
        <VAlert
          color="info"
          closable
          variant="tonal"
        >
          <template #prepend>
            <VAvatar
              size="28"
              icon="mdi-information-outline"
              variant="elevated"
              color="info"
              rounded
            />
          </template>
          This is your default location. To change whether you fulfill online orders from this location, select another default location first.
        </VAlert>
      </VCardText>
    </VCard>

    <VCard title="Address">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <VSelect
              label="Country/religion"
              :items="['United States', 'UK', 'Canada']"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="Address"
              placeholder="123 , New Street"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="Apartment, suite, etc."
              placeholder="Empire Heights"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="Phone"
              placeholder="+1 (234) 456-7890"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="City"
              placeholder="New York"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="State"
              placeholder="NY"
            />
          </VCol>

          <VCol
            cols="12"
            md="4"
          >
            <VTextField
              label="PIN code"
              placeholder="123 , New Street"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
