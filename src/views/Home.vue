<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>Routes</h4>
      </v-card-title>
      <v-card-actions>
        <v-list
          dense
          width="100%"
        >
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="{ name: item.name }"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
}
</script>
