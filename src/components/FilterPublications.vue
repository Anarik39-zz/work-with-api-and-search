<template>
  <v-autocomplete
    clearable
    solo
    dense
    :search-input.sync="value"
    :items="filterNames"
    label="Filter by author..."
  ></v-autocomplete>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterPublications",

  data() {
    return {
      value: null,
    };
  },

  computed: {
    ...mapGetters({ filterNames: "getUsersName" }),
  },
  watch: {
    value(val) {
      this.$emit("callback", val);
    },
  },
};
</script>
