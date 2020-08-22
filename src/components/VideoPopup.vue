<template>
  <div
    class="gs-video-popup"
    v-show="visible"
  >
    <div
      class="bg-cover"
      @click="closeFullScreen"
    ></div>
    <video
      ref="popupVideo"
      class="popup-video"
      :style="videoStyle"
      :controls="true"
      preload="auto"
      autoplay="autoplay"
    >
      <source
        src="http://heishenhua.com/video/b1/example1.mp4"
        type="video/mp4"
      >
      您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
    </video>
    <img
      src="/img/news/btn_esc.png"
      class="close-btn"
      @click="closeFullScreen"
    />
  </div>
</template>

<script>
import scroll from "../scroll";
export default {
  props: {
    src: {
      default: "",
    },
    visible: {
      default: false,
    },
  },
  data: function () {
    return {
      videoWidth: 0,
    };
  },
  mounted: function () {
    scroll.setMouseLock(this.visible);
    this.$refs.popupVideo.addEventListener("canplay", () => {
      this.setWH();
    });
    this.setSrc();
  },
  methods: {
    setSrc: function () {
      this.videoWidth = 0;
      this.$refs.popupVideo.src = this.src;
    },
    setWH: function () {
      let w = this.$refs.popupVideo.videoWidth;
      let h = this.$refs.popupVideo.videoHeight;
      if (h <= 0) {
        return;
      }
      let expectHeight = this.clientHeight - this.videoPadding.heightBlank * 2;
      let expectWidth = this.clientWidth - this.videoPadding.widthBlank * 2;
      let w2 = (expectHeight * w) / h;
      if (w2 <= expectWidth) {
        this.videoWidth = w2;
        return;
      }
      this.videoWidth = expectWidth;
    },
    closeFullScreen: function () {
      this.$emit("update:visible", false);
    },
  },
  computed: {
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
    clientWidth: function () {
      return this.$store.state.base.clientWidth;
    },
    clientHeight: function () {
      return this.$store.state.base.clientHeight;
    },
    videoStyle: function () {
      if (this.videoWidth <= 0) {
        return { visibility: "hidden" };
      }
      return { visibility: "visible", width: this.videoWidth + "px" };
    },
    videoPadding: function () {
      if (this.isPhone) {
        return { heightBlank: 10, widthBlank: 10 };
      }
      return { heightBlank: 25, widthBlank: 50 };
    },
  },
  watch: {
    "$store.state.base.resize": function () {
      this.setWH();
    },
    src: function () {
      this.setSrc();
    },
    visible: function () {
      scroll.setMouseLock(this.visible);
      if (this.visible) {
        this.setSrc();
      } else {
        this.$refs.popupVideo.src = "";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.gs-video-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 33;

  .bg-cover {
    width: 100%;
    height: 100%;
    background: #000000e6;
  }

  .popup-video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: #505050 0rem 0rem 0.9rem 0px;
    outline: none;
  }

  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 0.3rem;
    cursor: pointer;
  }
}
</style>
