<template>
  <div class="gs-bottombar">
    <div class="gs-bottombar-container">
      <div class="bottom-text">
        <div>Copyright © Game Science Interactive Technology Co., Ltd. All Rights Reserved <br v-if="isPhone">游科互动科技有限公司
        </div>
        <div>
          备案号：
          <a
            class="link-text"
            href="http://beian.miit.gov.cn"
            target="_blank"
          >
            浙ICP备20024998号
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    urlRedirect: function (url) {
      window.open(url, "_blank");
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
.gs-bottombar {
  color: #686868;
  text-align: center;
  width: 100%;
  // margin-top: -0.8rem;
  // z-index: 30;
  background: black;
  padding: 0.3rem 0;

  .gs-bottombar-container {
  }

  .bottom-text {
    font-size: 0.14rem;
    line-height: 170%;
    letter-spacing: 0.014rem;
    text-indent: 0.014rem;

    @media only screen and (max-width: 900px) {
      font-size: 0.0667rem;
      line-height: 180%;
      letter-spacing: 0;
      text-indent: 0;
    }

    .link-text {
      color: #686868;
    }
  }
}
</style>
