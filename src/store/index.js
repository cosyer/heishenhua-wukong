import Vue from "vue";
import Vuex from "vuex";
import base from "./base.js";
import custom from "./custom.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    base: base,
    custom: custom,
  },
});
