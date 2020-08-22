<template>
  <div
    v-show="visible"
    class="gs-follow-us-popup"
  >
    <div
      class="grey-bg"
      @click="$emit('update:visible', false)"
    ></div>
    <div class="gs-follow-us-popup-container">
      <div class="follow-us-popup-box">
        <div class="box-bg">
        </div>
        <div class="box-border box-border-top">
        </div>
        <div class="box-border box-border-bottom">
        </div>
        <div class="box-title">
          <div class="box-main-title">
            关注我们
          </div>
          <div class="box-sub-title">
            随时掌握第一手消息
          </div>
        </div>
        <div class="box-content">
          <div
            v-if="followSuccess"
            class="box-success"
          >
            <div>预约成功！</div>
            <div>感谢您的关注!</div>
          </div>
          <div
            v-if="!followSuccess"
            class="box-form"
          >
            <input
              :class="formData.phone&&!phoneMatch?'not-match':''"
              v-model="formData.phone"
              placeholder="请输入您的手机号"
            />
            <input
              :class="formData.mail&&!mailMatch?'not-match':''"
              v-model="formData.mail"
              placeholder="或输入您的邮箱"
            />
            <div
              v-if="errorMsg"
              class="error-msg text-danger"
            >
              {{ errorMsg }}
            </div>
            <B1Button
              :style="{visibility: dataCheck?'visible':'hidden'}"
              class="box-form-btn"
              type="white"
              @click="followSubmit"
            >
              确认
            </B1Button>
          </div>
          <div class="box-qrcode">
            <div
              v-for="(item, i) in followData"
              :key="i"
              class="qrcode-item"
            >
              <div
                class="qrcode-img"
                :class="item.url?'can-click':''"
                @click="urlRedirect(item.url)"
              >
                <img :src="item.qrcode" />
              </div>
              <div class="qrcode-title">
                {{ item.title }}
              </div>
              <div class="qrcode-subtitle">
                {{ item.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="follow-us-close-btn"
        @click="$emit('update:visible', false)"
      >
        <img src="/img/news/btn_esc.png" />
      </div>
    </div>
  </div>
</template>

<script>
import B1Button from "./B1Button.vue";
import gsData from "../gsData";
import scroll from "../scroll";
import webc from "../webc";

export default {
  components: {
    B1Button,
  },
  props: {
    visible: {
      default: false,
    },
  },
  mounted: function () {
    scroll.setMouseLock(this.visible);
  },
  data: function () {
    return {
      followSuccess: false,
      errorMsg: "",
      formData: {
        phone: "",
        mail: "",
        token: "",
      },
      apiUrl: "http://b1api.gamesci.com.cn:9812/followus/follow",
      followData: [
        {
          url: gsData.wechatInfo.url,
          title: "微信公众号",
          subtitle: "黑神话之悟空",
          qrcode: gsData.wechatInfo.qrcode,
        },
        {
          url: gsData.sinablogInfo.url,
          title: "官方微博",
          subtitle: "黑神话之悟空",
          qrcode: gsData.sinablogInfo.qrcode,
        },
        {
          url: gsData.bilibiliInfo.url,
          title: "官方bilibili",
          subtitle: "黑神话之悟空",
          qrcode: gsData.bilibiliInfo.qrcode,
        },
      ],
    };
  },
  created: function () {},
  methods: {
    urlRedirect: function (url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    setToken: function () {
      this.formData.token = webc.genEncryptToken(
        this.formData.phone + this.formData.mail
      );
    },
    followSubmit: function () {
      this.errorMsg = "";
      if (!this.dataCheck) {
        this.errorMsg = "参数错误，请重新输入";
        return;
      }
      this.setToken();
      webc.http("post", this.apiUrl, this.formData, this.followSubmitCallback);
    },
    followSubmitCallback: function (rc) {
      if (rc != 0) {
        this.errorMsg = "提交失败，请稍后再试";
      } else {
        this.followSuccess = true;
      }
    },
  },
  computed: {
    phoneMatch: function () {
      if (this.formData.phone.match("^1[3-9]\\d{9}$")) {
        return true;
      }
      return false;
    },
    mailMatch: function () {
      if (this.formData.mail.match("^[\\w\\.-]+@[\\w-]+(\\.[\\w-]+)+$")) {
        return true;
      }
      return false;
    },
    dataCheck: function () {
      if (this.formData.phone && !this.phoneMatch) {
        return false;
      } else if (this.formData.mail && !this.mailMatch) {
        return false;
      }
      let p = this.formData.phone && this.phoneMatch;
      let m = this.formData.mail && this.mailMatch;
      return p || m;
    },
  },
  watch: {
    visible: function () {
      scroll.setMouseLock(this.visible);
    },
  },
};
</script>

<style lang="scss">
.gs-follow-us-popup {
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  .grey-bg {
    width: 100%;
    height: 100%;
    background: #000000b3;
  }

  .gs-follow-us-popup-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .follow-us-popup-box {
    width: 10.56rem;
    height: 7.44rem;
    background: #cdcdcd;
    position: relative;

    @media only screen and (max-width: 900px) {
      width: 90vw;
      height: 3.7rem;
    }

    .box-bg {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: left top no-repeat url("/img/news/img_bg_news.png");
      background-size: contain;
    }

    .box-border {
      position: absolute;
      width: 100%;
      height: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .box-border-top {
      top: 0;
      background: left top no-repeat url("/img/news/box_pb_texture_t.png");
      background-size: contain;
    }

    .box-border-bottom {
      bottom: 0;
      background: left bottom no-repeat url("/img/news/box_pb_texture_u.png");
      background-size: contain;
    }

    .box-title {
      color: #431717;
      height: 1.44rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 900px) {
        height: 0.72rem;
      }

      .box-main-title {
        font-size: 0.4rem;
        letter-spacing: 0.02rem;
        text-indent: 0.02rem;

        @media only screen and (max-width: 900px) {
          font-size: 0.2rem;
          letter-spacing: 0.01rem;
          text-indent: 0.01rem;
        }
      }

      .box-sub-title {
        font-size: 0.3rem;
        letter-spacing: 0.015rem;
        text-indent: 0.015rem;

        @media only screen and (max-width: 900px) {
          font-size: 0.15rem;
          letter-spacing: 0.0075rem;
          text-indent: 0.0075rem;
        }
      }
    }

    .box-content {
      position: relative;
      background: #00000004;
      box-shadow: inset 0 0 0.4rem #00000029;
      padding: 0.3rem;
      margin: 0 0.07rem;
      margin-bottom: 0.27rem;
      text-align: center;

      @media only screen and (max-width: 900px) {
        padding: 0.1rem;
      }

      .box-success {
        font-size: 0.3rem;
        color: #431717;
        padding: 0.9rem 0;

        @media only screen and (max-width: 900px) {
          font-size: 0.16rem;
          padding: 0.45rem 0;
        }
      }

      input {
        outline: none;
        background-color: #e3e3e3;
        background-image: none;
        border: 0.01rem solid #8d8d8d;
        box-shadow: inset 0 0.05rem 0.05rem #0000001a;
        box-sizing: content-box;
        color: #000000;
        outline: 0;
        padding: 0 0.15rem;
        box-sizing: border-box;
        transition: border-color 0.2s;
        width: 100%;
        font-size: 0.3rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;

        @media only screen and (max-width: 900px) {
          font-size: 0.15rem;
          height: 0.3rem;
          line-height: 0.3rem;
        }
      }

      input::placeholder {
        font-size: 0.2rem;
        color: #bababa;

        @media only screen and (max-width: 900px) {
          font-size: 0.1rem;
        }
      }

      .box-form {
        width: 4.94rem;
        display: inline-block;
        position: relative;

        @media only screen and (max-width: 900px) {
          width: 95%;
        }

        input + input {
          margin-top: 0.07rem;
        }

        .error-msg {
          position: absolute;
          width: 100%;
          text-align: center;
          font-size: 0.2rem;
          @media only screen and (max-width: 900px) {
            font-size: 0.12rem;
          }
        }

        .box-form-btn {
          margin-top: 0.29rem;
          margin-bottom: 0.5rem;
          box-shadow: 0 0.07rem 0.2rem #00000033;

          @media only screen and (max-width: 900px) {
            margin-top: 0.145rem;
            margin-bottom: 0.25rem;
            box-shadow: 0 0.035rem 0.1rem #00000033;
          }
        }
      }

      .box-qrcode {
        display: flex;
        align-items: center;
        justify-content: center;

        .can-click {
          cursor: pointer;
        }

        .qrcode-item {
          width: 1.98rem;
          height: 2.64rem;
          margin: 0 0.17rem;
          border: 0.01rem solid #8d8d8d;
          box-sizing: border-box;
          background: #d4d4d4;

          @media only screen and (max-width: 900px) {
            width: 33.3%;
            height: 1.32rem;
            margin: 0 0.085rem;
          }

          .qrcode-img {
            margin: 0 0.34rem;
            margin-top: 0.29rem;

            @media only screen and (max-width: 900px) {
              margin: 0 0.085rem;
              margin-top: 0.0725rem;
            }
          }

          .qrcode-title {
            padding-top: 0.14rem;
            font-size: 0.24rem;
            color: #000000;

            @media only screen and (max-width: 900px) {
              padding-top: 0.07rem;
              font-size: 0.12rem;
            }
          }

          .qrcode-subtitle {
            padding-top: 0.08rem;
            font-size: 0.16rem;
            color: #815900;

            @media only screen and (max-width: 900px) {
              padding-top: 0.04rem;
              font-size: 0.08rem;
            }
          }
        }
      }
    }
  }

  .follow-us-close-btn {
    position: absolute;
    right: -0.4rem;
    top: 0.1rem;
    cursor: pointer;

    @media only screen and (max-width: 900px) {
      right: 0rem;
      top: -0.3rem;
      width: 0.3rem;
    }

    img {
      width: 100%;
    }
  }

  .not-match {
    border: 0.02rem solid #ff8d8d !important;
  }
}
</style>
