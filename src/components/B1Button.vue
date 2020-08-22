<template>
  <div
    class="gs-b1-button"
    :class="'gs-b1-button-' + type"
    @click="$emit('click')"
  >
    <div class="gs-b1-button-container">
      <div class="gs-b1-button-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      default: "black",
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
.gs-b1-button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  width: 1.8rem;
  height: 0.45rem;

  @media only screen and (max-width: 900px) {
    width: 1.11333rem;
    height: 0.28rem;
  }

  .gs-b1-button-container {
    width: 100%;
    height: 100%;
    font-size: 0.22rem;
    // line-height: 0.45rem;
    letter-spacing: 0.022rem;
    text-indent: 0.022rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
      font-size: 0.11667rem;
      letter-spacing: 0.011667rem;
      text-indent: 0.011667rem;
    }
  }
}

.gs-b1-button-black {
  .gs-b1-button-container {
    background-image: url("/img/b1/btn_df.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #ffffff;

    @media only screen and (max-width: 900px) {
      background-image: url("/img/MobileWeb/btn_MbWeb_df.png");

      &:hover {
        background-image: url("/img/MobileWeb/btn_MbWeb_df.png");
      }
    }

    &:hover {
      background-image: center center no-repeat url("/img/b1/btn_hover.png");
    }
  }
}

.gs-b1-button-white {
  .gs-b1-button-container {
    background-image: url("/img/news/btn_pb_df.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #431717;

    &:hover {
      background-image: url("/img/news/btn_pb_hover.png");
    }
  }
}
</style>