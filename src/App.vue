<template>
  <v-app>
    <v-container>
      <header class="header">
        <filter-publications @callback="getValueFilter" />
      </header>
      <v-main>
        <publications-list :list="currentPublications" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import FilterPublications from "./components/FilterPublications.vue";
import PublicationsList from "./components/PublicationsList.vue";

export default {
  components: { PublicationsList, FilterPublications },
  name: "App",

  data: () => ({
    valueFilter: null,
  }),

  computed: {
    ...mapGetters({ usersPublications: "getUsersPublications" }),
    ...mapGetters({ publicationsList: "getItemsPublications" }),

    currentPublications() {
      if (!this.valueFilter) {
        return this.publicationsList;
      } else {
        let users = this.usersPublications
          .filter((user) => user.name.toLowerCase().search(this.valueFilter.toLowerCase()) != -1)
          .map((user) => user.id);
        return this.publicationsList.filter((el) => users.includes(el.userId));
      }
    },
  },

  methods: {
    getValueFilter(value) {
      this.valueFilter = value;
    },
  },

  async mounted() {
    await this.$store.dispatch("fetchDataUsers");
    await this.$store.dispatch("fetchDataPublications");
  },
};
</script>

<style scoped lang="scss">
.header {
  max-width: 550px;
  margin: 0 auto;
}
</style>
