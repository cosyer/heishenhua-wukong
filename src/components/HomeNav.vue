<template>
  <div class="gs-home-nav">
    <transition name="nav">
      <div
        v-if="navType==1"
        class="top-bar"
      >
        <div
          v-for="(item, i) in data"
          :key="i"
          class="top-bar-item"
          :class="item.id==navActive?'nav-active':''"
          @click="$emit('scrollTo', item.id)"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>
    <transition name="nav">
      <div
        v-if="navType==2"
        class="left-bar"
      >
        <div
          v-for="(item, i) in data"
          :key="i"
          class="left-bar-item"
          :class="item.id==navActive?'left-bar-active':'left-bar-inactive'"
          @click="$emit('scrollTo', item.id)"
        >
          <div class="select-point">
            <img src="/img/b1/nav_df.png" />
            <img
              v-if="item.id==navActive"
              class="select-point-active"
              src="/img/b1/nav_ck.png"
            />
            <img
              v-else
              class="select-img"
              src="/img/b1/nav_hover.png"
            />
          </div>
          <div class="select-text">{{ item.name }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
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
      navType: 1,
      scrollLock: false,
    };
  },
  mounted: function () {},
  methods: {
    checkNavType: function () {
      if (this.scrollTop > this.switchHeight) {
        if (this.navType != 2) {
          this.navType = 2;
        }
        return;
      }
      if (this.navType != 1) {
        this.navType = 1;
      }
    },
    onScroll: function () {
      if (this.scrollLock) {
        return;
      }
      this.scrollLock = true;
      setTimeout(() => {
        this.scrollLock = false;
        this.checkNavType();
      }, 100);
    },
  },
  computed: {
    isPhone: function () {
      return this.$store.state.base.isPhone;
    },
    switchHeight: function () {
      return this.$store.state.base.clientHeight * 0.5;
    },
    scrollTop: function () {
      return this.$store.state.base.scrollTop;
    },
  },
  watch: {
    "$store.state.base.windowScroll": function () {
      this.onScroll();
    },
  },
};
</script>

<style lang="scss">
.gs-home-nav {
  position: fixed;
  z-index: 30;
  color: #a5a5a5;
  font-weight: 600;
  font-size: 0.16rem;
  margin-left: var(--main-margin);
  user-select: none;

  .nav-enter-active,
  .nav-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .nav-enter,
  .nav-leave-to {
    opacity: 0;
    transform: translateX(-0.5rem);
  }

  .nav-active {
    color: white;
    font-size: 0.26rem;
  }

  .nav-show {
    animation: 1s linear 0s 1 normal none running gs-home-nav-animation;
  }

  .nav-hidden {
    animation: 1s linear 0s 1 reverse none running gs-home-nav-animation;
  }

  .top-bar {
    position: relative;
    top: 0.79rem;

    .top-bar-item {
      line-height: 0.36rem;
      cursor: pointer;
    }
  }

  .left-bar {
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: 0.2rem;

    .select-point {
      img {
        width: 0.42rem;
      }
    }

    .select-point-active {
      position: absolute;
      left: 0;
    }

    .select-img {
      position: absolute;
      left: 0;
      visibility: hidden;
    }

    .select-text {
      position: absolute;
      width: 2rem;
      visibility: hidden;
      left: 0.57rem;
    }

    .left-bar-active {
      opacity: 1;
      color: white;
      font-size: 0.26rem;
    }

    .left-bar-inactive {
      opacity: 0.4;
    }

    .left-bar-item {
      cursor: pointer;
      // display: flex;
      // align-items: center;
      // justify-content: center;

      .select-point {
        display: inline-block;
      }

      .select-text {
        display: inline-block;
        line-height: 0.85rem;
      }
    }

    .left-bar-item:hover {
      opacity: 1;

      .select-img {
        visibility: visible;
      }

      .select-text {
        visibility: visible;
      }
    }
  }

  @keyframes gs-home-nav-animation {
    0% {
      opacity: 0;
      transform: translateX(-0.5rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
