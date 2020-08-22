export default {
  state: {
    routerLoad: true,
    isPhone: false,
    isWechat: false,
    resize: 1,
    isScrollDown: true,
    windowScroll: 1,
    scrollTop: 0,
    scrollElement: undefined,
    clientWidth: 0,
    clientHeight: 0,
    rootFontSizeRate: 100,
  },
  getters: {},
  mutations: {
    setRouterLoad(state, newRouterLoad) {
      state.routerLoad = newRouterLoad;
    },
    setIsPhone(state, newIsPhone) {
      if (state.isPhone != newIsPhone) {
        state.isPhone = newIsPhone;
      }
    },
    setIsWechat(state, newIsWechat) {
      if (state.isWechat != newIsWechat) {
        state.isWechat = newIsWechat;
      }
    },
    setResize(state) {
      state.resize++;
    },
    setClientWidth(state, newClientWidth) {
      state.clientWidth = newClientWidth;
    },
    setClientHeight(state, newClientHeight) {
      state.clientHeight = newClientHeight;
    },
    setRootFontSizeRate(state, newRate) {
      state.rootFontSizeRate = newRate;
    },
    setIsScrollDown(state, newIsScrollDown) {
      state.isScrollDown = newIsScrollDown;
    },
    setWindowScroll(state) {
      state.windowScroll++;
    },
    setScrollTop(state, newScrollTop) {
      state.scrollTop = newScrollTop;
    },
    setScrollElement(state, newScrollElement) {
      state.scrollElement = newScrollElement;
    },
  },
  actions: {},
  modules: {},
};
