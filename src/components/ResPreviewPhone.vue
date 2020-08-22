<template>
  <div class="gs-res-preview-phone">
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
      v-if="showFullScreen"
      class="show-control full-screen"
    >
      <div
        class="show-ctl-left show-ctl-btn"
        v-if="showActive2 > 0"
        @click.stop="showCtlLeft"
      >
        <!-- <img src="/img/b1/btn_art_turnpage.png" draggable="false" /> -->
      </div>
      <div
        class="show-ctl-right show-ctl-btn"
        v-if="showActive2 < resLength - 1"
        @click.stop="showCtlRight"
      >
        <!-- <img src="/img/b1/btn_art_turnpage.png" draggable="false" /> -->
      </div>
    </div>
    <div
      class="show-thumbnail"
      ref="showThumbnail"
    >
      <div
        v-for="(i, i2) in showData[showActive].items"
        :key="i2"
        class="show-thumbnail-item"
        :style="'background-image: url('+ (showData[showActive].items[i2].phoneThumbnail?showData[showActive].items[i2].phoneThumbnail:showData[showActive].items[i2].img) +');'"
        @click="fullScreen(i2)"
      >
        <div
          v-if="showData[showActive].items[i2].video"
          class="play-button"
        ></div>
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
      showActive: 0,
      showActive2: 0,
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
        if (this.showData[this.showActive].items[this.showActive2].phoneImg) {
          this.currentImg = this.showData[this.showActive].items[
            this.showActive2
          ].phoneImg;
        } else {
          this.currentImg = this.showData[this.showActive].items[
            this.showActive2
          ].img;
        }
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
        if (this.showData[this.showActive].items[this.showActive2].phoneImg) {
          this.currentImg = this.showData[this.showActive].items[
            this.showActive2
          ].phoneImg;
        } else {
          this.currentImg = this.showData[this.showActive].items[
            this.showActive2
          ].img;
        }
        this.currentVideo = this.showData[this.showActive].items[
          this.showActive2
        ].video;
      }
    },
    fullScreen: function (i) {
      this.showActive2 = i;
      if (this.showData[this.showActive].items[i].phoneImg) {
        this.currentImg = this.showData[this.showActive].items[i].phoneImg;
      } else {
        this.currentImg = this.showData[this.showActive].items[i].img;
      }
      this.currentVideo = this.showData[this.showActive].items[i].video;
      this.showFullScreen = true;
    },
  },
  computed: {
    resLength: function () {
      return this.showData[this.showActive].items.length;
    },
    clientWidth: function () {
      return this.$store.state.base.clientWidth;
    },
  },
  watch: {},
};
</script>

<style lang="scss">
.gs-res-preview-phone {
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

    .show-ctl-btn {
      // width: 1.2rem;
      // height: 1.88rem;
      width: 0.16rem;
      height: 0.32rem;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-image: url("/img/MobileWeb/btn_MbWeb_art_turnpage.png");
    }

    .show-ctl-left {
      position: fixed;
      font-size: 0.4rem;
      left: 0rem;
      top: 50%;
      transform: translate(0, -50%);
    }

    .show-ctl-right {
      position: fixed;
      font-size: 0.4rem;
      right: 0rem;
      top: 50%;
      transform: rotateY(180deg) translate(0, -50%);
    }
  }

  .show-thumbnail {
    padding: 0 0.05rem;
    padding-left: 0.6rem;
    box-sizing: border-box;
    position: relative;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    .show-thumbnail-item {
      position: relative;
      cursor: pointer;
      display: inline-block;
      width: 1.14rem;
      height: 3.14rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin: 0.05rem;
    }
  }
}
</style>