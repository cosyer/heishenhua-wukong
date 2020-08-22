<template>
  <div class="gs-res-preview">
    <div class="show-tab">
      <B1Tab
        v-for="(t, i) in showData"
        :key="i"
        class="show-tab-item"
        :class="showActive==i?'active':''"
        :active="showActive==i"
        @click="showTabClick(i)"
      >
        {{ t.title }}
      </B1Tab>
    </div>
    <div
      class="show-screen"
      @click="fullScreen(showData[showActive].items[showActive2])"
      :style="'background-image: url(' + showData[showActive].items[showActive2].img + ');'"
    >
      <div
        v-if="showData[showActive].items[showActive2].video"
        class="play-button"
      >
      </div>
      <div
        class="show-control"
        :class="showFullScreen?'full-screen':''"
      >
        <div
          class="show-ctl-left"
          v-if="showActive2 > 0"
          @click.stop="showCtlLeft"
        >
          <div class="show-ctl-button"></div>
          <!-- <img src="/img/b1/btn_art_turnpage.png" draggable="false" /> -->
        </div>
        <div
          class="show-ctl-right"
          v-if="showActive2 < resLength - 1"
          @click.stop="showCtlRight"
        >
          <div class="show-ctl-button"></div>
          <!-- <img src="/img/b1/btn_art_turnpage.png" draggable="false" /> -->
        </div>
      </div>
    </div>
    <div
      class="show-thumbnail"
      ref="showThumbnail"
      @mousedown="mousedown"
    >
      <div
        v-for="(i, i2) in showData[showActive].items"
        :key="i2"
        class="show-thumbnail-item"
        :style="{width: itemWith + 'px', 'background-image': 'url(' + (showData[showActive].items[i2].thumbnail?showData[showActive].items[i2].thumbnail:showData[showActive].items[i2].img) + ')'}"
        :class="showActive2==i2?'active':''"
        @click="showActive2 = i2"
      >
        <div class="item-active"></div>
      </div>
    </div>
    <ImagePopup
      v-if="!currentVideo"
      :src="currentImg"
      :visible.sync="showFullScreen"
    />
    <VideoPopup
      v-if="currentVideo"
      :src="currentVideo"
      :visible.sync="showFullScreen"
    />
  </div>
</template>

<script>
import B1Tab from "./B1Tab.vue";
import ImagePopup from "./ImagePopup.vue";
import VideoPopup from "./VideoPopup.vue";

export default {
  components: {
    B1Tab,
    ImagePopup,
    VideoPopup,
  },
  props: {
    showData: {
      default: () => {
        return [];
      },
    },
  },
  data: function () {
    return {
      showSwitch: true,
      showActive: 0,
      showActive2: 0,
      thumbnailClientWidth: 0,
      isDrag: false,
      dragLock: false,
      dragTimer: undefined,
      dragInterval: 33,
      dragStartX: 0,
      showFullScreen: false,
      currentImg: "",
      currentVideo: "",
    };
  },
  created: function () {},
  methods: {
    showTabClick: function (idx) {
      if (this.showActive != idx) {
        this.showActive2 = 0;
        this.showActive = idx;
      }
    },
    showCtlLeft: function () {
      if (this.showActive2 > 0) {
        this.showActive2--;
      }
      if (this.showFullScreen) {
        this.currentImg = this.showData[this.showActive].items[
          this.showActive2
        ].img;
        this.currentVideo = this.showData[this.showActive].items[
          this.showActive2
        ].video;
      }
    },
    showCtlRight: function () {
      if (this.showActive2 < this.resLength - 1) {
        this.showActive2++;
      }
      if (this.showFullScreen) {
        this.currentImg = this.showData[this.showActive].items[
          this.showActive2
        ].img;
        this.currentVideo = this.showData[this.showActive].items[
          this.showActive2
        ].video;
      }
    },
    getClientWidth: function () {
      this.thumbnailClientWidth = this.$refs.showThumbnail.clientWidth;
    },
    scrollJudge: function () {
      this.getClientWidth();
      // let sl = this.$refs.showThumbnail.scrollLeft;
      // let showLeftIdx = Math.ceil(sl / this.itemWith);
      // let showRightIdx = Math.floor((sl + this.thumbnailClientWidth) / this.itemWith) - 1;
      // if (this.showActive2 < showLeftIdx) {
      //   this.thumbnailScrollTo(this.showActive2 * this.itemWith);
      // } else if (this.showActive2 > showRightIdx) {
      //   this.thumbnailScrollTo((this.showActive2 + 1) * this.itemWith - this.thumbnailClientWidth);
      // }
      this.thumbnailScrollTo(
        this.showActive2 * this.itemWith -
          this.thumbnailClientWidth / 2 +
          this.itemWith / 2
      );
    },
    thumbnailScrollTo: function (scrollLeft, time = 100) {
      // this.$refs.showThumbnail.scrollLeft = offset;
      let frame = 10;
      let sl = this.$refs.showThumbnail.scrollLeft;
      let interval = time / frame;
      let offset = (scrollLeft - sl) / frame;
      this.thumbnailScrollToSmooth(sl, offset, 0, frame, interval);
    },
    thumbnailScrollToSmooth: function (
      startScrollLeft,
      offset,
      idx,
      max,
      interval
    ) {
      if (idx < max) {
        this.$refs.showThumbnail.scrollLeft =
          startScrollLeft + offset * (idx + 1);
        setTimeout(() => {
          this.thumbnailScrollToSmooth(
            startScrollLeft,
            offset,
            idx + 1,
            max,
            interval
          );
        }, interval);
      }
    },
    mousedown: function (e) {
      this.dragStartX = e.clientX;
      this.isDrag = true;
    },
    mousemove: function (e) {
      if (this.dragLock) {
        return;
      }
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
    fullScreen: function (data) {
      this.currentImg = data.img;
      this.currentVideo = data.video;
      this.showFullScreen = true;
    },
  },
  computed: {
    resLength: function () {
      return this.showData[this.showActive].items.length;
    },
    rootFontSizeRate: function () {
      return this.$store.state.base.rootFontSizeRate;
    },
    itemWith: function () {
      return 2.76 * this.rootFontSizeRate;
    },
  },
  watch: {
    showActive2: function () {
      this.scrollJudge();
    },
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
.gs-res-preview {
  width: 100%;
  user-select: none;

  .show-tab {
    text-align: center;
    margin-bottom: 0.15rem;

    .show-tab-item {
      width: calc(22.8% - 0.02rem);
      margin: 0 0.01rem;
    }

    .show-tab-item.active {
      width: calc(31.6% - 0.02rem);
      margin: 0 0.01rem;
    }
  }

  .show-screen {
    cursor: pointer;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 12.6rem;
    height: 5.8rem;
    // background-color: black;
    // box-shadow: #505050 0rem 0rem 0.05rem 0px;

    img {
      width: 100%;
    }

    &:hover {
      .show-control {
        opacity: 1;
      }
    }
  }

  .show-control {
    opacity: 0;
    transition: opacity 0.2s;

    .show-ctl-left {
      position: absolute;
      font-size: 0.4rem;
      font-weight: 600;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
    }

    .show-ctl-right {
      position: absolute;
      font-size: 0.4rem;
      font-weight: 600;
      right: 0;
      top: 50%;
      transform: rotateY(180deg) translate(0, -50%);
      cursor: pointer;
    }

    .show-ctl-button {
      width: 1.2rem;
      height: 3.84rem;
      background-image: url("/img/b1/btn_art_turnpage.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  .show-control.full-screen {
    opacity: 1;
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100vw;
    // height: 100vh;
    z-index: 34;
    position: relative;

    .show-ctl-left {
      position: fixed;
    }

    .show-ctl-right {
      position: fixed;
    }
  }

  .show-thumbnail {
    padding-top: 0.15rem;
    position: relative;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    background-color: black;

    .show-thumbnail-item {
      position: relative;
      cursor: pointer;
      display: inline-block;
      transition: opacity 0.4s ease-in;
      // vertical-align: top;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      // width: 2.76rem;
      height: 1rem;

      .item-active {
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 100%;
        height: 0rem;
        background: white;
        transition: visibility 0.2s, height 0.2s;
      }

      img {
        width: 100%;
      }
    }

    .show-thumbnail-item.active {
      .item-active {
        height: 0.03rem;
        visibility: visible;
      }
    }
  }
}
</style>