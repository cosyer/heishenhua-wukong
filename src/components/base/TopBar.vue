<template>
  <div class="gs-topbar">
    <div class="gs-topbar-logo">
      <div
        class="gamesci-logo"
        @click="urlRedirect('http://www.gamesci.com.cn')"
      >
        <img src="/img/b1/img_logo_gs.png" />
      </div>
      <div
        class="b1-logo"
        @click="goToHome"
      >
        <img src="/img/b1/img_logo_bm.png" />
      </div>
    </div>
    <div
      v-if="!isPhone"
      class="gs-topbar-follow"
    >
      <div class="follow-text">
        关注<br>我们
      </div>
      <div
        class="follow-item follow-bilibili can-click"
        @click="urlRedirect(bilibiliInfo.url)"
      >
        <img
          class="follow-logo"
          src="/img/b1/btn_contact_bilibili.png"
        />
        <FollowHover
          class="follow-hover-box"
          :data="bilibiliInfo"
        />
      </div>
      <div
        class="follow-item follow-sinablog can-click"
        @click="urlRedirect(sinablogInfo.url)"
      >
        <img
          class="follow-logo"
          src="/img/b1/btn_contact_sinablog.png"
        />
        <FollowHover
          class="follow-hover-box"
          :data="sinablogInfo"
        />
      </div>
      <div
        class="follow-item follow-wechat"
        @click="urlRedirect(wechatInfo.url)"
      >
        <img
          class="follow-logo"
          src="/img/b1/btn_contact_wechat.png"
        />
        <FollowHover
          class="follow-hover-box"
          :data="wechatInfo"
        />
      </div>
    </div>

  </div>
</template>

<script>
import FollowHover from "./FollowHover.vue";
import gsData from "../../gsData";

export default {
  components: {
    FollowHover,
  },
  data: function () {
    return {
      bilibiliInfo: {
        url: gsData.bilibiliInfo.url,
        title: "我们的bilibili",
        text: "用微信扫一下左侧二维码，就能来我们bilibili获取第一手资讯喔。",
        qrcode: gsData.bilibiliInfo.qrcode,
      },
      sinablogInfo: {
        url: gsData.sinablogInfo.url,
        title: "我们的新浪微博",
        text: "用微信扫一下左侧二维码，就能来我们新浪微博获取第一手资讯喔。",
        qrcode: gsData.sinablogInfo.qrcode,
      },
      wechatInfo: {
        url: gsData.wechatInfo.url,
        title: "我们的微信公众号",
        text: "用微信扫一下左侧二维码，就能来我们公众号获取第一手资讯喔。",
        qrcode: gsData.wechatInfo.qrcode,
      },
    };
  },
  methods: {
    urlRedirect: function (url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    goToHome: function () {
      this.$router.push("/", () => {});
    },
  },
  computed: {
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
  },
};
</script>

<style scoped lang="scss">
.gs-topbar {
  font-family: "KaiTi", BlinkMacSystemFont, "Helvetica Neue", "PingFang SC",
    "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC",
    "WenQuanYi Micro Hei", Arial, sans-serif;

  position: fixed;
  top: 0;
  right: var(--main-margin);
  height: 100vh;
  z-index: 30;
  user-select: none;

  @media only screen and (max-width: 900px) {
    right: auto;
  }

  img {
    width: 100%;
  }

  .gs-topbar-logo {
    position: absolute;
    top: 0.7rem;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media only screen and (max-width: 900px) {
      top: 0.2rem;
      left: 0.2rem;
      right: auto;
      align-items: flex-start;
    }

    .gamesci-logo {
      width: 1.08rem;
      cursor: pointer;

      @media only screen and (max-width: 900px) {
        width: 0.61rem;
      }
    }

    .b1-logo {
      width: 0.34rem;
      cursor: pointer;
      padding-top: 0.41rem;
      padding-right: 0.1rem;
      // padding-right: 0.26rem;

      @media only screen and (max-width: 900px) {
        width: 0.215rem;
        padding-top: 0.205rem;
      }
    }
  }

  .gs-topbar-follow {
    position: absolute;
    bottom: 0.5rem;
    right: 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // padding-right: 0.32rem;

    .follow-item {
      margin-top: 0.17rem;
      position: relative;

      &:hover {
        .follow-logo {
          transform: scale(1.6);
        }

        .follow-hover-box {
          display: block;
        }
      }
    }

    .can-click {
      cursor: pointer;
    }

    .follow-logo {
      width: 100%;
    }

    .follow-hover-box {
      display: none;
      position: absolute;
      right: 0.4rem;
      bottom: -0.7rem;
    }

    .follow-text {
      color: white;
      font-size: 0.16rem;
      width: 0.39rem;
      margin-right: -0.05rem;
      text-align: right;
    }

    .follow-bilibili {
      width: 0.22rem;
    }

    .follow-sinablog {
      width: 0.22rem;
    }

    .follow-wechat {
      width: 0.22rem;
    }
  }
}
</style>
