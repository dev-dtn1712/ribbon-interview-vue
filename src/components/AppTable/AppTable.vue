<template>
  <div>
    <v-text-field v-model="search" label="Search" dense outlined />
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :loading="loading"
      class="custom-header"
    >
      <template v-slot:item.total_donations="{ item }">
        {{ formatCurrency(item.total_donations) }}
      </template>
      <template v-slot:item.first_donation="{ item }">
        {{ formatDate(item.first_donation) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ['headers', 'items', 'loading'],
  data() {
    return {
      search: '',
      sortBy: 'full_name',
      sortDesc: false,
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((donor) =>
        Object.values(donor).some(
          (fieldValue) =>
            fieldValue &&
            fieldValue
              .toString()
              .toLowerCase()
              .includes(this.search.toLowerCase())
        )
      )
    },
  },
  methods: {
    formatCurrency(amount) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      return formatter.format(amount)
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString(undefined, options)
    },
  },
}
</script>
<style lang="scss">
@import './styles.scss';
</style>
