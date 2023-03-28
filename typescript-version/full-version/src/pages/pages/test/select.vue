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
  </VRow>
</template>
