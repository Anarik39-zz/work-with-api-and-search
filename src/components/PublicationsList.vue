<template>
  <v-row>
    <v-col sm="6" md="4" cols="12" v-for="item in list" :key="item.id">
      <v-card :key="item.id" outlined class="d-flex flex-column" height="100%">
        <v-card-title class="text-break blue--text text-h5 mb-1"> {{ item.title }}</v-card-title>
        <v-card-text class="text-justify black--text">{{ item.body }}</v-card-text>
        <v-card-subtitle class="mt-auto">{{ item.name }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PublicationsList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
