<template>
  <VRow>
    <!-- SECTION VSelect -->
    <!-- variants -->
    <VCol cols="12">
      <VCard title="varinats">
        <VCardText>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 variants with density -->
    <VCol cols="12">
      <VCard title="density">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Outlined</h2>

              <VSelect
                density="default"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="comfortable"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Solo</h2>

              <VSelect
                density="default"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="comfortable"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="solo"
                class="my-3"
                placeholder="select city"
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Plain</h2>

              <VSelect
                density="default"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="comfortable"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="plain"
                class="my-3"
                placeholder="select city"
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Underlined</h2>

              <VSelect
                density="default"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="comfortable"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="underlined"
                class="my-3"
                placeholder="select city"
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Filled</h2>

              <VSelect
                density="default"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="comfortable"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="filled"
                class="my-3"
                placeholder="select city"
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 multiple -->
    <VCol cols="12">
      <VCard title="multiple">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Outlined</h2>

              <VSelect
                density="default"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="comfortable"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Solo</h2>

              <VSelect
                density="default"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="comfortable"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="solo"
                class="my-3"
                placeholder="select city"
                multiple
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Plain</h2>

              <VSelect
                density="default"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="comfortable"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="plain"
                class="my-3"
                placeholder="select city"
                multiple
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Underlined</h2>

              <VSelect
                density="default"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="comfortable"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="underlined"
                class="my-3"
                placeholder="select city"
                multiple
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Filled</h2>

              <VSelect
                density="default"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="comfortable"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="filled"
                class="my-3"
                placeholder="select city"
                multiple
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 clearble -->
    <VCol cols="12">
      <VCard title="clearable">
        <VCardText>
          <p>Persistent-clear prop is also available and applied in last 2 example</p>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            clearable
            multiple
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            clearable
            multiple
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            clearable
            multiple
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            clearable
            multiple
            persistent-clear
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            clearable
            multiple
            persistent-clear
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 chips -->
    <VCol cols="12">
      <VCard title="Chips">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Outlined</h2>

              <VSelect
                density="default"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="comfortable"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Solo</h2>

              <VSelect
                density="default"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="comfortable"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="solo"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Plain</h2>

              <VSelect
                density="default"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="comfortable"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                chips
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="plain"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Underlined</h2>

              <VSelect
                density="default"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="comfortable"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="underlined"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Filled</h2>

              <VSelect
                density="default"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="comfortable"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="filled"
                class="my-3"
                placeholder="select city"
                multiple
                chips
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 closable chips -->
    <VCol cols="12">
      <VCard title="Closable Chips">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Outlined</h2>

              <VSelect
                density="default"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="comfortable"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Solo</h2>

              <VSelect
                density="default"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="comfortable"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="solo"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Plain</h2>

              <VSelect
                density="default"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="comfortable"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                closable-chips
                chips
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="plain"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Underlined</h2>

              <VSelect
                density="default"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="comfortable"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="underlined"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Filled</h2>

              <VSelect
                density="default"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="comfortable"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="filled"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 closable chips clearable -->
    <VCol cols="12">
      <VCard title="Closable Chips with clearable ">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Outlined</h2>

              <VSelect
                density="default"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="comfortable"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Solo</h2>

              <VSelect
                density="default"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="comfortable"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="solo"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Plain</h2>

              <VSelect
                density="default"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="comfortable"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                closable-chips
                chips
                clearable
                multiple
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="plain"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Underlined</h2>

              <VSelect
                density="default"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="comfortable"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="underlined"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
            </VCardText>
          </VCol>

          <VCol
            cols="12"
            md="6"
          >
            <VCardText>
              <h2>Filled</h2>

              <VSelect
                density="default"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="comfortable"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
              <VSelect
                density="compact"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                variant="filled"
                class="my-3"
                placeholder="select city"
                multiple
                closable-chips
                chips
                clearable
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>

    <!-- 👉 Counters -->
    <VCol cols="12">
      <VCard title="counter">
        <VCardText>
          <p class="mb-5">
            Persistent-counter prop also available and applied in last example
          </p>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            counter
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            counter
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            counter
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            counter
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            counter
            persistent-counter
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Direction -->
    <VCol cols="12">
      <VCard title="Direction">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <h3>Direction is horizontal</h3>
              <VSelect
                label="Select City"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="horizontal"
              />
              <VSelect
                label="Select City"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="horizontal"
              />
              <VSelect
                label="Select City"
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="horizontal"
              />
              <VSelect
                label="Select City"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="horizontal"
              />
              <VSelect
                label="Select City"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="horizontal"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <h3>Direction is vertical</h3>
              <VSelect
                label="Select City"
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="vertical"
              />
              <VSelect
                label="Select City"
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="vertical"
              />
              <VSelect
                label="Select City"
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="vertical"
              />
              <VSelect
                label="Select City"
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="vertical"
              />
              <VSelect
                label="Select City"
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                direction="vertical"
                multiple
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 disabled -->
    <VCol cols="12">
      <VCard title="Disabled selects">
        <VCardText>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            disabled
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            disabled
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            disabled
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            disabled
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            disabled
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 hint -->
    <VCol cols="12">
      <VCard title="hint">
        <VCardText>
          <p>Persistent-hint prop also available and used in last example</p>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            persistent-hint
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 loading -->
    <VCol cols="12">
      <VCard title="loading">
        <VCardText>
          <VSelect
            label="Select City"
            variant="solo"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            loading
            color="success"
          />
          <VSelect
            label="Select City"
            variant="filled"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            loading
          />
          <VSelect
            label="Select City"
            variant="outlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            loading
            color="error"
          />
          <VSelect
            label="Select City"
            variant="plain"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            loading
            color="info"
          />
          <VSelect
            label="Select City"
            variant="underlined"
            :items="['Mumbai', 'Delhi', 'Ahmedabad']"
            class="my-3"
            hint="please select your city"
            loading
            color="warning"
          />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 placeholder -->
    <VCol cols="12">
      <VCard title="placeholder">
        <VCardText>
          <p>persistent-placeholder prop is also available and applied in last example</p>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="please select your city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="please select your city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="please select your city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="please select your city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                placeholder="please select your city"
                persistent-placeholder
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 prepend-icon -->
    <VCol cols="12">
      <VCard title="prepend icon">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-icon="mdi-account-check"
                label="select city"

                persistent-placeholder
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 prepend-inner-icon  -->
    <VCol cols="12">
      <VCard title="prepend inner icon">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-inner-icon="mdi-account-check"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-inner-icon="mdi-account-check"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-inner-icon="mdi-account-check"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-inner-icon="mdi-account-check"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                prepend-inner-icon="mdi-account-check"
                persistent-placeholder
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 append-icon  -->
    <VCol cols="12">
      <VCard title="append inner icon">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-icon="mdi-account-check"
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                label="select city"
                append-icon="mdi-account-check"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 append-inner-icon  -->
    <VCol cols="12">
      <VCard title="append inner icon">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-inner-icon="mdi-chevron-down"
                placeholder="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-inner-icon="mdi-chevron-down"
                placeholder="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-inner-icon="mdi-chevron-down"
                placeholder="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-inner-icon="mdi-chevron-down"
                placeholder="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                append-inner-icon="mdi-chevron-down"
                placeholder="select city"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 single line  -->
    <VCol cols="12">
      <VCard title="single line">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="solo"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                single-line
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="filled"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                single-line
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="outlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                single-line
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="plain"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                single-line
                label="select city"
              />
            </VCol>

            <VCol
              cols="12"
              sm="6"
            >
              <VSelect
                variant="underlined"
                :items="['Mumbai', 'Delhi', 'Ahmedabad']"
                class="my-3"
                single-line
                label="select city"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VCol>

    <!-- !SECTION -->

    <!-- 👉 autocomplete  -->

    <!-- 👉 autocomplete varaints  -->
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

    <!-- 👉 combo box -->

    <!-- 👉 combo box variants -->
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
