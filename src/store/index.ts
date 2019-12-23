import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: false,
      user: {}
    }
  },
  mutations: {
    logout(state) {
      state.auth.isLoggedIn = false;
      state.auth.user = {};
    },
    login(state, { username }) {
      state.auth.isLoggedIn = true;
      state.auth.user = { username };
    }
  },
  actions: {},
  modules: {}
});
