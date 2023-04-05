<template>
  <v-snackbar
    v-model="openSnack"
    timeout="2000"
    :color="snackVariant"
    variant="tonal"
  >
    {{ snackMessage }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Snackbar',
  computed: {
    ...mapGetters({
      sendSnackMessage: 'sendSnackMessage',
    }),
    openSnack() {
      return this.sendSnackMessage.show
    },
    snackVariant() {
      return this.sendSnackMessage.variant
    },
    snackMessage() {
      return this.sendSnackMessage.message
    },
  },
}
</script>
