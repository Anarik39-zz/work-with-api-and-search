<template>
  <v-autocomplete
    @change="callback(value)"
    :items="filterNames"
    v-model="value"
    solo
    dense
    label="Filter by author..."
  >
  </v-autocomplete>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterPublications",

  props: {
    callback: Function,
  },

  data() {
    return {
      value: null,
    };
  },

  computed: {
    ...mapGetters({ filterNames: "getUsersName" }),
  },
};
</script>
