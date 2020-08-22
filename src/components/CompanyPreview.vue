<template>
  <div class="gs-company-preview">
    <!-- <div v-if="showFullScreen" class="show-control full-screen">
      <div
        class="show-ctl-left"
        v-if="showActive2 > 0"
        @click.stop="showCtlLeft"
      >
        <img src="/img/b1/btn_art_turnpage.png" draggable="false" />
      </div>
      <div
        class="show-ctl-right"
        v-if="showActive2 < resLength - 1"
        @click.stop="showCtlRight"
      >
        <img src="/img/b1/btn_art_turnpage.png" draggable="false" />
      </div>
    </div> -->
    <div
      class="show-thumbnail"
      ref="showThumbnail"
      @mousedown="mousedown"
    >
      <div
        v-for="(i, i2) in loopShowData"
        :key="i2"
        class="show-thumbnail-item"
        :style="{width: imgWidth + 'px', height: imgHeight + 'px', 'background-image': 'url('+i+')'}"
        @click="fullScreen(i2)"
      >
      </div>
    </div>
    <ImagePopup
      :src="currentImg"
      :visible.sync="showFullScreen"
    />
  </div>
</template>

<script>
import ImagePopup from "./ImagePopup.vue";

export default {
  components: {
    ImagePopup,
  },
  props: {
    showData: {
      default: () => {
        return [
          "/img/company/img_1.png",
          "/img/company/img_2.png",
          "/img/company/img_3.png",
          "/img/company/img_4.png",
          "/img/company/img_5.png",
          "/img/company/img_6.png",
          "/img/company/img_7.png",
        ];
      },
    },
  },
  data: function () {
    return {
      showActive: 0,
      showFullScreen: false,
      currentImg: "",
      scrollTimer: undefined,
      interval: 30,
      offset: 1,
      dragStartX: 0,
      isDrag: false,
      dragLock: false,
      dragTimer: undefined,
      dragInterval: 33,
      isClick: true,
    };
  },
  mounted: function () {
    this.scrollTimer = setTimeout(this.autoScroll, this.interval);
  },
  beforeDestroy: function () {
    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }
  },
  methods: {
    // showCtlLeft: function() {
    //   if (this.showActive2 > 0) {
    //     this.showActive2--;
    //   }
    //   if (this.showFullScreen) {
    //     this.currentImg = this.showData[this.showActive].items[this.showActive2].img;
    //   }
    // },
    // showCtlRight: function() {
    //   if (this.showActive2 < this.resLength - 1) {
    //     this.showActive2++;
    //   }
    //   if (this.showFullScreen) {
    //     this.currentImg = this.showData[this.showActive].items[this.showActive2].img;
    //   }
    // },
    fullScreen: function (i) {
      if (!this.isPhone && !this.isClick) {
        return;
      }
      this.showActive = i;
      this.currentImg = this.loopShowData[i];
      this.showFullScreen = true;
    },
    autoScroll: function () {
      let sl = this.$refs.showThumbnail.scrollLeft;
      if (sl / this.imgWidth >= this.resLength) {
        this.$refs.showThumbnail.scrollLeft = 0;
      } else {
        this.$refs.showThumbnail.scrollLeft += this.offset;
      }
      this.scrollTimer = setTimeout(this.autoScroll, this.interval);
    },
    mousedown: function (e) {
      if (!this.isPhone) {
        this.dragStartX = e.clientX;
        this.isDrag = true;
        this.isClick = true;
      }
    },
    mousemove: function (e) {
      if (this.dragLock) {
        return;
      }
      this.isClick = false;
      this.dragLock = true;
      this.dragTimer = setTimeout(() => this.dragOffset(e), this.dragInterval);
    },
    mouseup: function (e) {
      this.isDrag = false;
      clearTimeout(this.dragTimer);
      this.dragOffset(e);
    },
    dragOffset: function (e) {
      let offsetX = e.clientX - this.dragStartX;
      this.$refs.showThumbnail.scrollLeft -= offsetX;
      this.dragStartX = e.clientX;
      this.dragLock = false;
    },
  },
  computed: {
    resLength: function () {
      return this.showData.length;
    },
    loopShowData: function () {
      let cpNum = Math.ceil(this.clientWidth / this.imgWidth);
      let t = [];
      for (let i = 0; i < this.showData.length; i++) {
        t.push(this.showData[i]);
      }
      for (let i = 0; i < cpNum; i++) {
        t.push(this.showData[i]);
      }
      return t;
    },
    clientWidth: function () {
      return this.$store.state.base.clientWidth;
    },
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
    imgWidth: function () {
      if (this.isPhone) {
        return 375;
      }
      return 1490;
    },
    imgHeight: function () {
      if (this.isPhone) {
        return 225;
      }
      return 892;
    },
  },
  watch: {
    isDrag: function () {
      if (this.isDrag) {
        document.addEventListener("mousemove", this.mousemove);
        document.addEventListener("mouseup", this.mouseup);
      } else {
        document.removeEventListener("mousemove", this.mousemove);
        document.removeEventListener("mouseup", this.mouseup);
      }
    },
  },
};
</script>

<style lang="scss">
.gs-company-preview {
  width: 100%;
  user-select: none;

  .show-tab {
    text-align: end;
    margin-right: 0.1rem;

    .show-tab-item-container {
      display: inline-block;
    }

    .show-tab-item {
      margin: 0.04rem;
    }

    .show-tab-item.active {
    }
  }

  .show-control {
    opacity: 1;
    z-index: 34;
    position: relative;
    transition: opacity 0.2s;

    .show-ctl-left {
      position: fixed;
      font-size: 0.4rem;
      font-weight: 600;
      left: 0.2rem;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
    }

    .show-ctl-right {
      position: fixed;
      font-size: 0.4rem;
      font-weight: 600;
      right: 0.2rem;
      top: 50%;
      transform: rotateY(180deg) translate(0, -50%);
      cursor: pointer;
    }
  }

  .show-thumbnail {
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    .show-thumbnail-item {
      position: relative;
      cursor: pointer;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>