<template>
  <div
    class="gs-image-popup"
    v-show="visible"
  >
    <div
      class="bg-cover"
      @click="closeFullScreen"
    ></div>
    <img
      :style="imgStyle"
      ref="popupImg"
      class="popup-img"
    />
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
      imgWidth: 0,
    };
  },
  mounted: function () {
    scroll.setMouseLock(this.visible);
    this.$refs.popupImg.onload = this.setWH;
    this.setSrc();
  },
  methods: {
    setSrc: function () {
      this.imgWidth = 0;
      this.$refs.popupImg.src = this.src;
      // if(this.$refs.popupImg.complete){
      //   this.setWH();
      //   return;
      // }
    },
    setWH: function () {
      let w = this.$refs.popupImg.width;
      let h = this.$refs.popupImg.height;
      if (h <= 0) {
        return;
      }
      let expectHeight = this.clientHeight - this.imgPadding.heightBlank * 2;
      let expectWidth = this.clientWidth - this.imgPadding.widthBlank * 2;
      let w2 = (expectHeight * w) / h;
      if (w2 <= expectWidth) {
        this.imgWidth = w2;
        return;
      }
      this.imgWidth = expectWidth;
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
    imgStyle: function () {
      if (this.imgWidth <= 0) {
        return { visibility: "hidden" };
      }
      return { visibility: "visible", width: this.imgWidth + "px" };
    },
    imgPadding: function () {
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
    },
  },
};
</script>

<style scoped lang="scss">
.gs-image-popup {
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

  .popup-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: #505050 0rem 0rem 0.9rem 0px;
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
