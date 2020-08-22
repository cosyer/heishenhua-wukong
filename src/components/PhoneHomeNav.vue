<template>
  <div class="gs-phone-home-nav">
    <div
      class="box-contant"
      :class="showBox?'show':''"
    >
      <div
        class="bg-cover"
        @click="showBoxCtl"
      ></div>
      <div class="nav-box">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="nav-item"
          :class="navItemClass(item, i)"
          @click="navClick(item.id)"
        >
          {{ item.name }}
        </div>
        <div class="follow-box">
          <div class="follow-item">关注我们</div>
          <div class="follow-icon-container">
            <div
              v-for="(item, i) in followInfo"
              :key="i"
              class="follow-icon"
              :class="item.id + '-icon'"
              @click="followClick(i)"
            >
            </div>
          </div>
        </div>
        <div
          v-show="showWechatQRCode"
          class="wechat-qrcode-box"
        >
          <img
            class="wechat-qrcode"
            :src="wechatInfo.qrcode"
          />
          <div class="qrcode-text">
            <template v-if="isWechat">
              <span>长按二维码，即可进入“黑神话之悟空”公众号</span>
            </template>
            <template v-else>
              <span>长按保存二维码到本地，使用微信识别进行分享</span>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div
      class="box-btn"
      :class="showBox?'show':''"
      @click="showBoxCtl"
    >
    </div>
  </div>
</template>

<script>
import gsData from "../gsData";

export default {
  components: {},
  props: {
    data: {
      default: () => {
        return [];
      },
    },
    navActive: {
      default: "",
    },
  },
  data: function () {
    return {
      showBox: false,
      followInfo: [
        {
          id: "wechat",
          url: gsData.wechatInfo.url,
          qrcode: gsData.wechatInfo.qrcode,
        },
        {
          id: "sinablog",
          url: gsData.sinablogInfo.url,
          qrcode: gsData.sinablogInfo.qrcode,
        },
        {
          id: "bilibili",
          url: gsData.bilibiliInfo.url,
          qrcode: gsData.bilibiliInfo.qrcode,
        },
      ],
      showWechatQRCode: false,
    };
  },
  mounted: function () {},
  methods: {
    navClick: function (id) {
      this.showBox = false;
      this.$emit("scrollTo", id);
    },
    navItemClass: function (item, i) {
      let c = "nav-item-bg-" + (i % 2);
      if (item.id == this.navActive) {
        c += " active";
      }
      return c;
    },
    followClick: function (i) {
      if (this.followInfo[i].id != "wechat") {
        window.open(this.followInfo[i].url, "_blank");
      } else {
        this.showWechatQRCode = !this.showWechatQRCode;
      }
    },
    showBoxCtl: function () {
      if (this.showBox) {
        this.showWechatQRCode = false;
        this.showBox = false;
      } else {
        this.showBox = true;
      }
    },
  },
  computed: {
    wechatInfo: function () {
      return gsData.wechatInfo;
    },
    isWechat: function () {
      return this.$store.state.base.isWechat;
    },
  },
  watch: {},
};
</script>

<style lang="scss">
.gs-phone-home-nav {
  position: fixed;
  bottom: 0.3rem;
  right: 0.2rem;
  z-index: 30;
  user-select: none;

  .box-contant {
    left: 0;
    bottom: 0;
    position: fixed;
    width: 100vw;
    overflow: hidden;
    height: 0;
    visibility: hidden;
    transition: height 0.3s, visibility 0.3s;
  }

  .box-contant.show {
    height: 100vh;
    visibility: visible;
  }

  .bg-cover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000e6;
  }

  .box-btn {
    position: relative;
    width: 0.3rem;
    height: 0.3rem;
    cursor: pointer;
    background-image: url("/img/MobileWeb/btn_MbWeb_menu.png");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .box-btn.show {
    background-image: url("/img/news/btn_esc.png");
  }

  .nav-box {
    position: absolute;
    bottom: 0.5rem;
    right: 0;
    white-space: nowrap;
    font-size: 0.12667rem;
    color: #a5a5a5;
    line-height: 0.4rem;
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;

    .nav-item {
      text-align: right;
      padding-right: 0.1rem;
    }

    .nav-item.active {
      color: #ffffff;
    }

    .nav-item-bg-0 {
      background-color: #110f10;
    }

    .nav-item-bg-1 {
      background-color: #181617;
    }
  }

  .follow-box {
    padding-top: 0.2rem;
    padding-bottom: 0.3rem;
    text-align: center;
    width: 100%;

    .follow-item {
      background-color: #1e0e0a;
      line-height: initial;
    }

    .follow-icon-container {
      background-color: #080808;
      line-height: initial;
      padding: 0.1rem 0;
    }

    .follow-icon {
      display: inline-block;
      width: 0.44rem;
      height: 0.44rem;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0 0.1rem;
      cursor: pointer;
    }

    .wechat-icon {
      background-image: url("/img/MobileWeb/btn_MbWeb_follow_wechat.png");
    }
    .sinablog-icon {
      background-image: url("/img/MobileWeb/btn_MbWeb_follow_sinablog.png");
    }
    .bilibili-icon {
      background-image: url("/img/MobileWeb/btn_MbWeb_follow_bilibili.png");
    }
  }

  .wechat-qrcode-box {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/img/MobileWeb/bg_MbWeb_contact_qrcode.png");
    width: 2.05rem;
    height: 2.92rem;
    position: absolute;
    bottom: 1.18rem;
    white-space: initial;
    line-height: initial;
    font-size: 0.16rem;

    .wechat-qrcode {
      padding: 0.2rem;
      padding-bottom: 0.1rem;
      box-sizing: border-box;
    }

    .qrcode-text {
      color: #000000;
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
  }
}
</style>
