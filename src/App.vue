<template>
  <div id="app" :class="appClass">
    <div id="gs-container" ref="gsContainer">
      <TopBar/>
      <router-view v-if="routerLoad" class="gs-main"/>
      <BottomBar/>
    </div>
    <div v-if="phoneDisable" class="gs-phone-disable">
      <div class="disable-text">
        推荐使用电脑端浏览，体验更佳<br>
        如用手机浏览，请竖屏体验
      </div>
    </div>
  </div>
</template>

<script>
import BottomBar from "./components/base/BottomBar.vue";
import TopBar from "./components/base/TopBar.vue";
import scroll from "./scroll";

export default {
  components: {
    BottomBar,
    TopBar
  },
  data: function () {
    return {
      resizeLock: false,
      // lastTouchY: -1,
      // maxScrollOffset: 300,
      // maxScroll: 20,
      // minScroll: 1,
      // gsScroll: false,
      // scrollJudgeInterval: 10,
      // scrollScale: 20,
      // maxScrollOffset: 50,
      // maxScroll: 30,
      // minScroll: 1,
      // gsScroll: false,
      // scrollJudgeInterval: 10,
      // scrollScale: 30,
      phoneDisable: false,
      isphone: false,
    };
  },
  created: function () {
  },
  mounted: function () {
    this.$store.commit("setScrollElement", this.$refs.gsContainer);
    this.onResizeRegister();
    this.setIsPhone();
    this.setIsWechat();
    this.setClientWidth();
    this.setClientHeight();
    this.onScrollRegister();
  },
  methods: {
    onResizeRegister: function () {
      window.onresize = () => {
        this.onResize();
      }
    },
    onResize: function () {
      if (this.resizeLock) {
        return;
      }
      this.resizeLock = true;
      setTimeout(
          () => {
            this.resizeLock = false;
            this.$store.commit("setResize");
          },
          33
      );
    },

    onScrollRegister: function () {
      this.$refs.gsContainer.addEventListener("scroll", this.onScroll, false);
      // if (!this.isphone) {
      scroll.scrollRegister(this.$refs.gsContainer);
      // }
    },
    onScroll: function () {
      this.$store.commit("setIsScrollDown", (this.$refs.gsContainer.scrollTop >= this.oldScrollTop));
      this.$store.commit("setScrollTop", this.$refs.gsContainer.scrollTop);
      this.$store.commit("setWindowScroll");
    },
    setIsPhone: function () {
      this.isphone = (document.documentElement.clientWidth <= 900);
      this.$store.commit("setIsPhone", this.isphone);
      this.phoneDisable = ((this.isphone) && (document.documentElement.clientWidth > document.documentElement.clientHeight));
    },
    setIsWechat: function () {
      let ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.$store.commit("setIsWechat", true);
      }
    },
    setClientWidth: function () {
      this.$store.commit("setClientWidth", document.documentElement.clientWidth);
      let scale = 1;
      if (document.documentElement.clientWidth < 900) {
        scale = document.documentElement.clientWidth / 375;
        // } else if (document.documentElement.clientWidth < 1920) {
      } else {
        scale = document.documentElement.clientWidth / 1920;
      }
      this.$store.commit("setRootFontSizeRate", scale * 100);
      document.documentElement.style.setProperty("font-size", (625 * scale) + "%");
    },
    setClientHeight: function () {
      this.$store.commit("setClientHeight", document.documentElement.clientHeight);
    },
  },
  computed: {
    appClass: function () {
      if (/macintosh|mac os x/i.test(navigator.userAgent)) {
        // mac os system
        return "";
      }
      return "not-mac-os";
    },
    routerLoad: function () {
      let l = this.$store.state.base.routerLoad;
      if (!l) {
        this.$nextTick(() => this.$store.commit("setRouterLoad", true));
      }
      return l;
    },
    // gsScrollLock: function() {
    //   return this.$store.state.base.gsScrollLock;
    // },
    // scrollOffset: function() {
    //   return this.$store.state.base.gsScrollOffset;
    // },
    oldScrollTop: function () {
      return this.$store.state.base.scrollTop;
    }
  },
  watch: {
    "$store.state.base.resize": function () {
      this.setIsPhone();
      this.setClientWidth();
      this.setClientHeight();
    },
    // gsScrollLock: function() {
    //   if (this.gsScrollLock && !this.gsScroll) {
    //     this.gsScroll = true;
    //   }
    // },
    // "$store.state.base.gsScrollSpeed": function(newVal) {
    //   if (newVal == 4) {
    //     this.maxScrollOffset = 100;
    //     this.maxScroll = 30;
    //     this.scrollScale = 30;
    //   } else {
    //     this.maxScrollOffset = 300;
    //     this.maxScroll = 20;
    //     this.scrollScale = 20;
    //   }
    // },
  }
};
</script>

<style lang="scss">
html {
  font-size: 625%;
  height: 100%;
}

body {
  font-size: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.not-mac-os {
  ::-webkit-scrollbar {
    width: 0.06rem;
    height: 0.06rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.03rem;
    // background: rgba(0,0,0,0.06);
    // -webkit-box-shadow: inset 0 0 0.5rem rgba(0,0,0,0.08);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.03rem;
    background: rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: inset 0 0 0.1rem rgba(0, 0, 0, 0.2);
  }
}

:root {
  --max-width: 1260px;
  --main-margin-box: 6.25vw;
  --main-padding: 10.9375vw;
  --main-margin: var(--main-margin-box);
}

#app {
  font-family: BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
  "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC",
  "WenQuanYi Micro Hei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.16rem;
  height: 100%;

  a {
    text-decoration: none;
  }

  hr {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border: 0;
    border-top: 1px solid #eee;
  }

  pre {
    overflow: auto;
    margin: 0.1rem;
    padding: 0.1rem;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }

  #gs-container {
    height: 100%;
    position: relative;
    // display: flex;
    // flex-direction: column;
    // overflow: auto;
    overflow: hidden;
    background: black;

    .gs-main {
      // flex: 1;
    }
  }

  @media only screen and (max-width: 900px) {
    #gs-container {
      overflow-y: auto;
    }
  }

  .text-primary {
    color: #409eff;
  }

  .text-success {
    color: #36b394;
  }

  .text-warning {
    color: #e6a23c;
  }

  .text-danger {
    color: #f56c6c;
  }

  .text-info {
    color: #909399;
  }

  .text-black {
    color: #000000;
  }

  .text-center {
    text-align: center;
  }

  .float-right {
    float: right;
  }

  // .play-button {
  //   width: 0;
  //   height: 0;
  //   border: 0.3rem solid transparent;
  //   border-left: calc(0.3rem * 1.732) solid white;
  //   margin-left: 0.3rem;
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);

  //   @media only screen and (max-width: 900px) {
  //     border: 0.15rem solid transparent;
  //     border-left: calc(0.15rem * 1.732) solid white;
  //     margin-left: 0.15rem;
  //   }
  // }

  .play-button {
    width: 1.2rem;
    height: 1.2rem;
    background-image: url("/img/b1/btn_play.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 900px) {
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  .el-input.is-disabled .el-input__inner,
  .el-checkbox__input.is-disabled + span.el-checkbox__label,
  .el-radio__input.is-disabled + span.el-radio__label,
  .el-textarea.is-disabled .el- textarea__inner {
    color: #7d7d7d;
  }
}

.gs-message-box {
  box-shadow: 0.02rem 0.02rem 0.05rem 0 rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow: auto;
}

.el-message-box {
  max-width: 80vw;
  width: auto;
}

@import "app.css";
</style>
