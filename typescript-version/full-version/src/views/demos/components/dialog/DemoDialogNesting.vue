<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
</script>

<template>
  <v-btn @click="isDialogVisible = true">
    Open Dialog
  </v-btn>

  <!-- Dialog -->
  <v-dialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <v-card title="Dialog">
      <v-card-text>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </v-btn>
        <v-btn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Dialog 2 -->
  <v-dialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm"
  >
    <v-card title="Dialog 2">
      <v-card-text>I'm a nested dialog.</v-card-text>
      <v-card-actions>
        <v-btn @click="isDialogTwoShow = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
