<template>
  <!-- 👉 combo box -->

  <!-- 👉 combo box variants -->
  <VRow>
    <VCol cols="12">
      <VCard title="combobox variants">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox density -->
    <VCol cols="12">
      <VCard title="combobox density">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
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
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
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
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox placeholder  -->
    <VCol cols="12">
      <VCard title="combobox placeholder">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <p>last example has persistent placeholder</p>
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                placeholder="select city"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                density="comfortable"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="solo"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                placeholder="select city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="plain"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="plain"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                class="my-5"
                density="comfortable"
                persistent-placeholder
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                class="my-5"
                density="compact"
                persistent-placeholder
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox multiple  -->
    <VCol cols="12">
      <VCard title="combobox Multiple">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                multiple
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                multiple
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VCombobox
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
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                density="compact"
                multiple
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox input chips  -->
    <VCol cols="12">
      <VCard title="combobox chips">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                chips
                multiple
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                multiple
                chips
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                multiple
                chips
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                density="compact"
                multiple
                chips
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="compact"
                chips
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox closable chips  -->
    <VCol cols="12">
      <VCard title="combobox closable chips">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                chips
                closable-chips
                multiple
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                multiple
                chips
                closable-chips
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                multiple
                chips
                closable-chips
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                closable-chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                closable-chips
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                closable-chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                closable-chips
                chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                density="compact"
                multiple
                closable-chips
                chips
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                closable-chips
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                closable-chips
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="compact"
                chips
                closable-chips
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox closable chips with clearable  -->
    <VCol cols="12">
      <VCard title="combobox closable chips with clearable">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                chips
                closable-chips
                multiple
                clearable
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                multiple
                chips
                closable-chips
                clearable
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                multiple
                chips
                closable-chips
                clearable
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                multiple
                chips
                clearable
                closable-chips
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                multiple
                closable-chips
                chips
                clearable
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                density="compact"
                multiple
                clearable
                closable-chips
                chips
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                chips
                closable-chips
                clearable
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                multiple
                density="compact"
                chips
                clearable
                closable-chips
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox selection slot chips  -->
    <VCol cols="12">
      <VCard title="combobox selection with slot chips">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="comfortable"
                class="my-5"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="filled"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="filled"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="comfortable"
                class="my-5"
                variant="filled"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                varaint="solo"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="solo"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="comfortable"
                class="my-5"
                variant="solo"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="plain"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="plain"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="comfortable"
                class="my-5"
                variant="plain"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="underlined"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="default"
                class="my-5"
                variant="underlined"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>

              <VCombobox
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                label="city"
                multiple
                density="comfortable"
                class="my-5"
                variant="underlined"
              >
                <template #selection="data">
                  <VChip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :model-value="data.selected"
                    :disabled="data.disabled"
                    size="small"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    <template #prepend>
                      <VAvatar
                        class="bg-primary text-uppercase"
                        start
                      >
                        {{ data.item.title.slice(0, 1) }}
                      </VAvatar>
                    </template>
                    {{ data.item.title }}
                  </VChip>
                </template>
              </VCombobox>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox with prepend inner icons  -->
    <VCol cols="12">
      <VCard title="combobox prepend innner icons">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                prepend-inner-icon="mdi-city"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                prepend-inner-icon="mdi-city"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                prepend-inner-icon="mdi-city"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                prepend-inner-icon="mdi-city"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                prepend-inner-icon="mdi-city"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-inner-icon="mdi-city"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                prepend-inner-icon="mdi-city"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                prepend-inner-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="compact"
                prepend-inner-icon="mdi-city"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox with prepend icons  -->
    <VCol cols="12">
      <VCard title="combobox prepend icons">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                class="my-5"
                prepend-icon="mdi-city"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="comfortable"
                prepend-icon="mdi-city"
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="compact"
                prepend-icon="mdi-city"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="solo"
                class="my-5"
                prepend-icon="mdi-city"
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                class="my-5"
                prepend-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                prepend-icon="mdi-city"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                prepend-icon="mdi-city"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-icon="mdi-city"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                class="my-5"
                prepend-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
                prepend-icon="mdi-city"
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                prepend-icon="mdi-city"
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                prepend-icon="mdi-city"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
                class="my-5"
                density="compact"
                prepend-icon="mdi-city"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 combobox loading  -->
    <VCol cols="12">
      <VCard title="combobox loading">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                density="default"
                placeholder="select city"
                loading
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                density="comfortable"
                loading
                class="my-5"
              />

              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                loading
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="solo"
                loading
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                loading
                variant="solo"
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                loading
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                placeholder="select city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="plain"
                loading
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="plain"
                loading
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="plain"
                loading
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                loading
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                loading
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="filled"
                loading
                density="compact"
                class="my-5"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                loading
                class="my-5"
                density="default"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                loading
                class="my-5"
                density="comfortable"
              />
              <VCombobox
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                placeholder="select city"
                variant="underlined"
                loading
                class="my-5"
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
