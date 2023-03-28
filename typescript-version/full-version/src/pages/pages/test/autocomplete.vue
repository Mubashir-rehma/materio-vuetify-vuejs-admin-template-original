<template>
  <!-- 👉 autocomplete  -->

  <!-- 👉 autocomplete varaints  -->
  <VRow>
    <VCol cols="12">
      <VCard title="autocomplete ">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete density -->
    <VCol cols="12">
      <VCard title="autocomplete density">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                density="compact"
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete placeholder  -->
    <VCol cols="12">
      <VCard title="autocomplete placeholder">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                placeholder="Enter city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                placeholder="Enter city"
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
              />
              <VAutocomplete
                placeholder="Enter city"
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                placeholder="Enter city"
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                density="default"
              />
              <VAutocomplete
                placeholder="Enter city"
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="plain"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="filled"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="outlined"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="outlined"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                class="my-5"
                variant="outlined"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="Enter city"
                variant="underlined"
                density="compact"
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete Multiple -->
    <VCol cols="12">
      <VCard title="autocomplete Multiple">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                multiple
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete with clearable -->
    <VCol cols="12">
      <VCard title="autocomplete clearable">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                clearable
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                multiple
                clearable
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                multiple
                clearable
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                clearable
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                clearable
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                clearable
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                clearable
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                clearable
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                clearable
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                multiple
                class="my-5"
                clearable
                density="comfortable"
                no-data-text="can't fetch city names"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                density="compact"
                multiple
                clearable
                persistent-clear
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete with closable chips -->
    <VCol cols="12">
      <VCard title="autocomplete with closable chips">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                chips
                density="default"
                multiple
                closable-chips
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                chips
                density="comfortable"
                closable-chips
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                chips
                multiple
                class="my-5"
                density="compact"
                closable-chips
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                chips
                multiple
                density="default"
                closable-chips
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                density="comfortable"
                closable-chips
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                closable-chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                closable-chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                multiple
                closable-chips
                chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                chips
                multiple
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                closable-chips
                density="compact"
                multiple
                chips
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Autocomplete closable chips with clearable -->
    <VCol cols="12">
      <VCard title="autocomplete closable chip with  clearble">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                chips
                density="default"
                multiple
                closable-chips
                clearable
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                chips
                density="comfortable"
                closable-chips
                clearable
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                chips
                multiple
                class="my-5"
                density="compact"
                clearable
                closable-chips
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                chips
                multiple
                density="default"
                clearable
                closable-chips
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                density="comfortable"
                clearable
                closable-chips
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                clearable
                closable-chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                clearable
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                clearable
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                clearable
                closable-chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                clearable
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                clearable
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                multiple
                clearable
                closable-chips
                chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                chips
                multiple
                clearable
                closable-chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                clearable
                closable-chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                clearable
                closable-chips
                density="compact"
                multiple
                chips
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete with chips -->
    <VCol cols="12">
      <VCard title="autocomplete with chips">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                chips
                density="default"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                chips
                density="comfortable"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                chips
                multiple
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                chips
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                chips
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                chips
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="outlined"
                multiple
                chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                chips
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                density="compact"
                multiple
                chips
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete prepend inner icons -->
    <VCol cols="12">
      <VCard title="autocomplete prepend inner icons">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                prepend-inner-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
                prepend-inner-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                multiple
                class="my-5"
                density="compact"
                prepend-inner-icon="mdi-city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                prepend-inner-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-inner-icon="mdi-city"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-inner-icon="mdi-city"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-inner-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-inner-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-inner-icon="mdi-city"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                prepend-inner-icon="mdi-city"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                prepend-inner-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                prepend-inner-icon="mdi-city"
                variant="outlined"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                prepend-inner-icon="mdi-city"
                variant="underlined"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                prepend-inner-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                prepend-inner-icon="mdi-city"
                variant="underlined"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete prepend icons -->
    <VCol cols="12">
      <VCard title="autocomplete prepend icons">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                prepend-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
                prepend-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                multiple
                class="my-5"
                density="compact"
                prepend-icon="mdi-city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                prepend-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-icon="mdi-city"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-icon="mdi-city"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-icon="mdi-city"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                prepend-icon="mdi-city"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                prepend-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                prepend-icon="mdi-city"
                variant="outlined"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                prepend-icon="mdi-city"
                variant="underlined"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                prepend-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                prepend-icon="mdi-city"
                variant="underlined"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete append icons -->
    <VCol cols="12">
      <VCard title="autocomplete append icons">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                append-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
                append-icon="mdi-city"
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                multiple
                class="my-5"
                density="compact"
                append-icon="mdi-city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                append-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                append-icon="mdi-city"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                append-icon="mdi-city"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                append-icon="mdi-city"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                append-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                append-icon="mdi-city"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                append-icon="mdi-city"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                append-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                append-icon="mdi-city"
                variant="outlined"
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                append-icon="mdi-city"
                variant="underlined"
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                append-icon="mdi-city"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                append-icon="mdi-city"
                variant="underlined"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 autocomplete loading  -->
    <VCol cols="12">
      <VCard title="Autocomplete loading">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
                append-icon="mdi-city"
                loading
                multiple
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="solo"
                density="comfortable"
                append-icon="mdi-city"
                multiple
                loading
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                multiple
                class="my-5"
                density="compact"
                loading
                append-icon="mdi-city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                variant="plain"
                append-icon="mdi-city"
                multiple
                density="default"
                loading
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                append-icon="mdi-city"
                multiple
                loading
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                append-icon="mdi-city"
                multiple
                loading
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                append-icon="mdi-city"
                multiple
                loading
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                append-icon="mdi-city"
                class="my-5"
                multiple
                loading
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                append-icon="mdi-city"
                class="my-5"
                multiple
                loading
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                append-icon="mdi-city"
                class="my-5"
                loading
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="outlined"
                append-icon="mdi-city"
                class="my-5"
                loading
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                class="my-5"
                append-icon="mdi-city"
                variant="outlined"
                loading
                multiple
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                append-icon="mdi-city"
                variant="underlined"
                loading
                class="my-5"
                multiple
                density="default"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                append-icon="mdi-city"
                class="my-5"
                loading
                multiple
                density="comfortable"
              />
              <VAutocomplete
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                append-icon="mdi-city"
                variant="underlined"
                density="compact"
                loading
                multiple
                class="my-5"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
