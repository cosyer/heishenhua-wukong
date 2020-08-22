<template>
  <div class="gs-qa-item">
    <div class="qa-icon">
    </div>
    <div class="qa-question">
      <div class="qa-text">{{ data.question }}</div>
    </div>
    <div class="qa-answer">
      <div class="qa-text">{{ data.answer }}</div>
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
    return {
      itemWidth: 0,
    };
  },
  mounted: function () {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
.gs-qa-item {
  width: 100%;
  position: relative;

  .qa-icon {
    background-image: url("/img/b1/bar_qa.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 0.48rem;
    height: 0.49rem;

    @media only screen and (max-width: 900px) {
      width: 0.3rem;
      height: 0.3rem;
    }
  }

  .qa-question {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.22rem;
    color: #8e8e8e;
    height: 0.49rem;
    padding-left: 0.6rem;
    width: 100%;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
      height: 0.3rem;
      padding-left: 0.35rem;
      font-size: 0.10667rem;
    }
  }

  .qa-answer {
    // position: absolute;
    // bottom: 2.63158%;
    // left: 0;
    position: relative;
    width: 100%;
    font-size: 0.22rem;
    color: #ffffff;
    text-align: center;
    height: 1.14rem;
    background: #dadada12;
    border: 0.01rem solid #dadada66;

    @media only screen and (max-width: 900px) {
      height: 0.96rem;
      font-size: 0.10667rem;
    }

    .qa-text {
      padding: 0 0.3rem;
      box-sizing: border-box;

      @media only screen and (max-width: 900px) {
        padding: 0 0.1rem;
        line-height: 140%;
        letter-spacing: 0.005333rem;
        text-indent: 0.005333rem;
      }
    }
  }

  .qa-text {
    text-align: left;
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    @media only screen and (max-width: 900px) {
    }
  }
}
</style>
