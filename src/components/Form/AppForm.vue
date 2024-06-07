<template>
  <v-form
    v-model="valid"
    validate-on="submit"
    @submit.prevent="submit"
  >
    <v-textarea
      v-model="form.message"
      :rules="messageRules"
      label="Message"
      @change="updateFormField('message', $event)"
    ></v-textarea>
    <v-autocomplete
      label="Search for email"
      v-model="form.email"
      :items="items"
      :loading="loading"
      item-text="email"
      item-value="id"
      return-object
      @change="updateFormField('email', $event)"
    >
    </v-autocomplete>
    <v-text-field
      v-model="form.donor_id"
      label="Donor Id"
      readonly
    ></v-text-field>
    <v-btn
      type="submit"
      block
      class="mt-2"
      :disabled="!valid || sendingMessageLoading || !form.donor_id"
    >
      Send
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'items',
    'loading',
  ],
  name: "App",
  data() {
    return {
      valid: false,
      form: {
        message: "",
        email: "",
        donor_id: "",
      },
      emailRules: [
        (value) => !!value || "Email is required.",
      ],
      messageRules: [
        (value) => !!value || 'Message is required',
        (value) => (value && value.length >= 15) || 'Message must be at least 15 characters',
      ],
    };
  },
  methods: {
    async submit() {
      const formData = new FormData();
      formData.append("email", this.form.email);
      formData.append("donor_id", this.form.donor_id);
      formData.append("message", this.form.message);
      await this.$store.dispatch('sendDonorMessageAction', { formData });
      this.form.message = '';
      this.form.email = '';
      this.form.donor_id = '';
    },
    updateFormField(field, event) {
      this.form[field] = event;
      if (field === 'email') {
        this.form['donor_id'] = event.id;
      }
    }
  },
  computed: {
    ...mapGetters({
      sendingMessageLoading: 'sendingMessageLoading'
    }),
  },
};
</script>
