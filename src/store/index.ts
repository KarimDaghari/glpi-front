import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: false,
      user: {}
    },
    computers: [
      {
        name: "XPS 15",
        entity: "root entity",
        status: "En attente",
        maker: "DELL",
        serial: "f1qj5uNhMK",
        model: "XPS",
        os: "Windows",
        place: "1",
        lastModified: "2019-12-23",
        cpu: "i7-1056U"
      },
      {
        name: "XPS 13",
        entity: "root entity",
        status: "En attente",
        maker: "DELL",
        serial: "f1qj5uNhMK",
        model: "XPS",
        os: "Ubuntu",
        place: "2",
        lastModified: "2019-12-22",
        cpu: "i7-1056U"
      },
      {
        name: "MacBook Pro",
        entity: "root entity",
        status: "En attente",
        maker: "APPLE",
        serial: "f1qj5uNhMK",
        model: "15",
        os: "OSX",
        place: "5",
        lastModified: "2019-12-22",
        cpu: "i9"
      },
      {
        name: "MacBook Pro",
        entity: "root entity",
        status: "En attente",
        maker: "APPLE",
        serial: "f1qj5uNhMK",
        model: "13",
        os: "OSX",
        place: "6",
        lastModified: "2019-12-22",
        cpu: "i5"
      },
      {
        name: "MacBook Air",
        entity: "root entity",
        status: "En attente",
        maker: "APPLE",
        serial: "f1qj5uNhMK",
        model: "2019",
        os: "OSX",
        place: "3",
        lastModified: "2019-12-22",
        cpu: "i5"
      },
      {
        name: "iMac Pro",
        entity: "root entity",
        status: "En attente",
        maker: "APPLE",
        serial: "f1qj5uNhMK",
        model: "2019",
        os: "OSX",
        place: "2",
        lastModified: "2019-12-22",
        cpu: "i9"
      }
    ]
  },
  mutations: {
    logout(state) {
      state.auth.isLoggedIn = false;
      state.auth.user = {};
    },
    login(state, { username }) {
      state.auth.isLoggedIn = true;
      state.auth.user = { username };
    },
    addComupter(state, { computer }) {
      state.computers.push(computer);
    },
    deleteComputer(state, { data }) {
      state.computers = data;
    }
  },
  actions: {},
  modules: {}
});
