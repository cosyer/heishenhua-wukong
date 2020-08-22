export default {
  state: {
    globalData: {},
  },
  getters: {},
  mutations: {
    setGlobalData(state, data) {
      state.globalData[data.k] = data.v;
    },
  },
  actions: {},
  modules: {},
};
