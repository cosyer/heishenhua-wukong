<template>
  <div
    class="gs-b1-tab"
    @click="$emit('click')"
  >
    <div
      v-if="isPhone"
      class="gs-b1-tab-phone-container"
      :class="active?'active':''"
    >
      <div class="tab-text">
        <slot></slot>
      </div>
    </div>
    <div
      v-else
      class="gs-b1-tab-container"
    >
      <div class="tab-bg-l">
        <div
          class="tab-bg-l-img"
          :class="active?'active-bg-l':'default-bg-l'"
        >
        </div>
      </div>
      <div class="tab-bg-r">
        <div
          class="tab-bg-r-img"
          :class="active?'active-bg-r':'default-bg-r'"
        >
        </div>
      </div>
      <div class="tab-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    active: {
      default: false,
    },
  },
  data: function () {
    return {};
  },
  created: function () {},
  methods: {},
  computed: {
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
  },
};
</script>

<style lang="scss">
.gs-b1-tab {
  display: inline-block;
  width: 4.02rem;
  height: 0.45rem;
  cursor: pointer;
  transition: width 0.3s;
  user-select: none;

  @media only screen and (max-width: 900px) {
    // width: 0.28667rem;
    // height: 0.6667rem;
    width: 0.31333rem;
    height: 0.79333rem;
  }

  .gs-b1-tab-phone-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("/img/MobileWeb/tab_MbWeb_df.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    .tab-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #979592;
      writing-mode: vertical-rl;
      font-size: 0.10667rem;
      white-space: nowrap;
    }
  }

  .gs-b1-tab-phone-container.active {
    background-image: url("/img/MobileWeb/tab_MbWeb_ck.png");

    .tab-text {
      color: #ffffff;
    }
  }

  .gs-b1-tab-container {
    width: 100%;
    height: 100%;
    position: relative;

    .tab-bg-l {
      position: absolute;
      left: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
    }

    .tab-bg-l-img {
      position: absolute;
      left: 0;
      background-repeat: no-repeat;
      background-position: left center;
      background-size: contain;
      height: 100%;
      width: 200%;
    }

    .tab-bg-r {
      position: absolute;
      right: 0;
      height: 100%;
      width: 50%;
      overflow: hidden;
    }

    .tab-bg-r-img {
      position: absolute;
      right: 0;
      background-repeat: no-repeat;
      background-position: right center;
      background-size: contain;
      height: 100%;
      width: 200%;
    }

    .default-bg-l {
      background-image: url("/img/b1/tab_df_l.png");
    }

    .default-bg-r {
      background-image: url("/img/b1/tab_df_r.png");
    }

    .active-bg-l {
      background-image: url("/img/b1/tab_ck_l.png");
    }

    .active-bg-r {
      background-image: url("/img/b1/tab_ck_r.png");
    }

    .tab-text {
      color: #ffffff;
      font-size: 0.22rem;
      line-height: 0.45rem;
      letter-spacing: 0.022rem;
      text-indent: 0.022rem;

      // @media only screen and (max-width: 900px) {
      //   font-size: 0.10667rem;
      //   line-height: 0.32rem;
      //   letter-spacing: 0.011rem;
      //   text-indent: 0.011rem;
      // }
    }

    &:hover {
      .default-bg-l {
        background-image: url("/img/b1/tab_hover_l.png");
      }

      .default-bg-r {
        background-image: url("/img/b1/tab_hover_r.png");
      }
    }
  }
}
</style>