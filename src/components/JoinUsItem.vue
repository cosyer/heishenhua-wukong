<template>
  <div
    class="gs-join-us-item"
    @click="urlRedirect(data.url)"
  >
    <div class="gs-join-us-item-container">
      <div class="join-us-type-text">
        {{ data.jtype?data.jtype:"&nbsp;" }}
      </div>
      <div class="join-us-name-text">
        {{ data.name }}
      </div>
      <div class="join-us-location-text">
        {{ data.location }}
      </div>
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
  mounted: function () {},
  methods: {
    urlRedirect: function (url) {
      window.open(url, "_blank");
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.gs-join-us-item {
  width: 2.1rem;
  height: 2.6544rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url("/img/b1/btn_recruit_df.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  color: #ffffff;

  @media only screen and (max-width: 900px) {
    // width: 100%;
    // height: 1.5rem;
    // background-size: 100% 100%;
    // margin: 0.05rem 0rem;
    // box-sizing: border-box;
    background-image: url("/img/MobileWeb/btn_recruit_df.png");
    width: 1.05rem;
    height: 1.25rem;
    margin: 0.01rem;
  }

  &:hover {
    background-image: url("/img/b1/btn_recruit_hover.png");

    @media only screen and (max-width: 900px) {
      background-image: url("/img/MobileWeb/btn_recruit_df.png");
    }
  }

  .gs-join-us-item-container {
    text-align: center;
    width: 2.22rem;
  }

  .join-us-type-text {
    font-size: 0.24rem;
    height: 0.27rem;

    @media only screen and (max-width: 900px) {
      font-size: 0.10667rem;
      height: 0.11rem;
    }
  }

  .join-us-name-text {
    font-size: 0.24rem;

    @media only screen and (max-width: 900px) {
      font-size: 0.10667rem;
    }
  }

  .join-us-location-text {
    font-size: 0.2rem;
    padding-top: 0.25rem;

    @media only screen and (max-width: 900px) {
      font-size: 0.10667rem;
      padding-top: 0.12rem;
    }
  }
}
</style>
