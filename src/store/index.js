import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemsPublications: [],
    usersPublications: [],
  },
  mutations: {
    setItemsPublications(state, payload) {
      state.itemsPublications = payload;
    },
    setUsersPublications(state, payload) {
      state.usersPublications = payload;
    },
  },
  getters: {
    getItemsPublications: (state) => {
      return state.itemsPublications.map((item) => {
        const user = state.usersPublications.find((user) => user.id === item.userId);
        item.name = user.name;
        item.body = item.body.charAt(0).toUpperCase() + item.body.slice(1);
        item.title = item.title.charAt(0).toUpperCase() + item.title.slice(1);
        return item;
      });
    },
    getUsersPublications: (state) => state.usersPublications,
    getUsersName: (state) => {
      var names = [];
      for (let user of state.usersPublications) {
        names.push(user.name);
      }
      return names;
    },
  },
  actions: {
    fetchDataPublications({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((resp) => {
          commit("setItemsPublications", resp.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    fetchDataUsers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
          commit("setUsersPublications", resp.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
});
