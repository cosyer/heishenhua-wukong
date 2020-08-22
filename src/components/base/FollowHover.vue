<template>
  <div class="gs-follow-hover">
    <div class="follow-qrcode-bg">
      <img src="/img/b1/bg_contact_qrcode.png" />
    </div>
    <div class="follow-qrcode">
      <img :src="data.qrcode" />
    </div>
    <div class="follow-info">
      <div class="follow-title">{{ data.title }}</div>
      <div class="follow-text">{{ data.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {
      default: () => {
        return {};
      },
    },
  },
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.gs-follow-hover {
  position: relative;

  img {
    width: 100%;
  }

  .nav-enter,
  .nav-leave-to {
    opacity: 0;
  }

  .follow-qrcode-bg {
    width: 5.42rem;
  }

  .follow-qrcode {
    position: absolute;
    left: 0.27rem;
    top: 0.27rem;
    width: 1.72rem;
  }

  .follow-info {
    position: absolute;
    top: 0.48rem;
    right: 0.28rem;
    width: 2.88rem;
    color: #000000;

    .follow-title {
      font-size: 0.28rem;
    }

    .follow-text {
      padding-top: 0.32rem;
      font-size: 0.18rem;
    }
  }
}
</style>