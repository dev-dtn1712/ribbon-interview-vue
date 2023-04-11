<template>
  <v-snackbar
    v-model="openSnackbar"
    timeout="2000"
    :color="snackVariant"
    variant="tonal"
    @input="onSnackbarInput"
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
    openSnackbar: {
      get() {
        return this.sendSnackMessage.show
      },
      set() {
        this.$store.dispatch('resetDonorMessageAction')
      },
    },
    snackVariant() {
      return this.sendSnackMessage.variant
    },
    snackMessage() {
      return this.sendSnackMessage.message
    },
  },
  methods: {
    onSnackbarInput(value) {
      this.$store.dispatch('resetDonorMessageAction')
    },
  },
}
</script>
