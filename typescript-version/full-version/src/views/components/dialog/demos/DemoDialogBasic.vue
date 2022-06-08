<script lang="ts" setup>
const isDialogVisible = ref(false)
</script>

<template>
  <v-dialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <v-btn v-bind="props">
        Click Me
      </v-btn>
    </template>

    <!-- Dialog Content -->
    <v-card>
      <v-card-title>
        Privacy Policy
      </v-card-title>

      <v-card-text>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn @click="isDialogVisible = false">
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
