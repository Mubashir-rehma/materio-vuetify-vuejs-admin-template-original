<template>
  <VRow>
    <!-- 👉 textfield  -->

    <!-- 👉 textfield variants  -->
    <VCol cols="12">
      <VCard title="textfield variants">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField label="city" />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="plain"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="filled"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                :items="['Delhi', 'Mumbai', 'Ahemedabad', 'Bangalore', 'Jaipur']"
                variant="underlined"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield density  -->
    <VCol cols="12">
      <VCard title="textfield density">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                density="default"
                class="my-5"
              />
              <VTextField
                label="city"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                variant="plain"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="underlined"
                class="my-5"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="underlined"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="underlined"
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield placeholder  -->
    <VCol cols="12">
      <VCard title="textfield placeholder">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <p>last example has persistent-placeholder prop</p>
              <VTextField
                label="city"
                density="default"
                class="my-5"
                placeholder="Enter city"
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                placeholder="Enter city"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                variant="plain"
                placeholder="Enter city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield clearable  -->
    <VCol cols="12">
      <VCard title="textfield clearable">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <p>last example has persistent-placeholder and persistent-clear prop</p>
              <VTextField
                label="city"
                density="default"
                class="my-5"
                placeholder="Enter city"
                clearable
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                clearable
                placeholder="Enter city"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                clearable
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                clearable
                variant="plain"
                placeholder="Enter city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                placeholder="Enter city"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="comfortable"
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="compact"
                clearable
                persistent-clear
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield prepend inner icon -->
    <VCol cols="12">
      <VCard title="textfield prepend inner">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                density="default"
                class="my-5"
                placeholder="Enter city"
                prepend-inner-icon="mdi-city"
                clearable
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                prepend-inner-icon="mdi-city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                clearable
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                clearable
                prepend-inner-icon="mdi-city"
                variant="plain"
                placeholder="Enter city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                placeholder="Enter city"
                prepend-inner-icon="mdi-city"
                density="default"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="comfortable"
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                prepend-inner-icon="mdi-city"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="compact"
                clearable
                persistent-clear
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield appned inner icon -->
    <VCol cols="12">
      <VCard title="textfield append inner">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                density="default"
                class="my-5"
                placeholder="Enter city"
                append-inner-icon="mdi-city"
                clearable
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                append-inner-icon="mdi-city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                clearable
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                clearable
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                clearable
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                clearable
                append-inner-icon="mdi-city"
                variant="plain"
                placeholder="Enter city"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                placeholder="Enter city"
                append-inner-icon="mdi-city"
                density="default"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                clearable
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="comfortable"
                clearable
                persistent-clear
              />
              <VTextField
                label="city"
                class="my-5"
                append-inner-icon="mdi-city"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="compact"
                clearable
                dirty
                persistent-clear
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield loading  -->
    <VCol cols="12">
      <VCard title="textfield loading">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                density="default"
                class="my-5"
                loading
                placeholder="Enter city"
              />
              <VTextField
                label="city"
                class="my-5"
                loading
                placeholder="Enter city"
                density="comfortable"
              />
              <VTextField
                label="city"
                density="compact"
                loading
                placeholder="Enter city"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                loading
                placeholder="Enter city"
                density="default"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                loading
                density="comfortable"
              />
              <VTextField
                label="city"
                variant="solo"
                class="my-5"
                placeholder="Enter city"
                loading
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                placeholder="Enter city"
                loading
                density="default"
              />
              <VTextField
                label="city"
                class="my-5"
                variant="plain"
                placeholder="Enter city"
                density="comfortable"
                loading
              />
              <VTextField
                label="city"
                class="my-5"
                density="compact"
                variant="plain"
                placeholder="Enter city"
                loading
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="default"
                loading
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="comfortable"
                loading
              />
              <VTextField
                label="city"
                variant="filled"
                class="my-5"
                placeholder="Enter city"
                density="compact"
                loading
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="city"
                placeholder="Enter city"
                variant="underlined"
                class="my-5"
                density="default"
                persistent-placeholder
                loading
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                loading
                density="comfortable"
              />
              <VTextField
                label="city"
                class="my-5"
                placeholder="Enter city"
                persistent-placeholder
                variant="underlined"
                density="compact"
                loading
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 textfield density  -->
    <VCol cols="12">
      <VCard title="textfield prefix">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="amount"
                prefix="$"
                density="default"
                class="my-5"
              />
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="amount"
                prefix="$"
                density="compact"
                class="my-5"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="amount"
                prefix="$"
                variant="solo"
                class="my-5"
                density="default"
              />
              <VTextField
                label="amount"
                prefix="$"
                variant="solo"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="amount"
                prefix="$"
                variant="solo"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                variant="plain"
                density="default"
              />
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                variant="plain"
                density="comfortable"
              />
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                density="compact"
                variant="plain"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="amount"
                prefix="$"
                variant="filled"
                class="my-5"
                density="default"
              />
              <VTextField
                label="amount"
                prefix="$"
                variant="filled"
                class="my-5"
                density="comfortable"
              />
              <VTextField
                label="amount"
                prefix="$"
                variant="filled"
                class="my-5"
                density="compact"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                label="amount"
                prefix="$"
                variant="underlined"
                class="my-5"
                density="default"
              />
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                variant="underlined"
                density="comfortable"
              />
              <VTextField
                label="amount"
                prefix="$"
                class="my-5"
                variant="underlined"
                density="compact"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
