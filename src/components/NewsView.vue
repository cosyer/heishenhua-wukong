<template>
  <div class="gs-news-view">
    <div class="gs-news-view-top-img">
      <img
        :src="data.img"
        width="100%"
      />
    </div>
    <div class="gs-news-view-container">
      <div class="detail-title">
        {{ data.title }}
      </div>
      <div class="detail-time">
        {{ data.time }}
      </div>
      <div class="detail-text">
        <div
          v-for="(_, i) in data.text"
          :key="i"
        >
          <div
            class="detail-block"
            v-if="data.text[i].ntype == 'text'"
          >
            <div class="text-fix">{{ data.text[i].data }}</div>
          </div>
          <div
            class="detail-block"
            v-else-if="data.text[i].ntype == 'img'"
          >
            <img
              :src="data.text[i].data"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    data: {
      default: function () {
        return [];
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
.gs-news-view {
  width: 100%;
  text-align: center;

  .gs-news-view-top-img {
    width: 100%;
  }

  .gs-news-view-container {
    display: inline-block;
    max-width: 6.77rem;
    padding: 0.2rem;
    letter-spacing: 0.02rem;
    text-align: left;
    // font-weight: 400;
    // text-shadow: 1px 1px 1px #3c3c3c4d;
  }

  .detail-title {
    font-size: 0.3rem;
    font-weight: 600;
    padding-bottom: 0.2rem;
  }

  .detail-time {
    color: #656565;
    font-size: 0.15rem;
    padding-bottom: 0.2rem;
  }

  .detail-text {
    // color: #ffffffe6;
    font-size: 0.15rem;
    line-height: 0.25rem;
    padding-bottom: 0.2rem;

    .text-fix {
      white-space: pre-wrap;
    }
  }

  .detail-block {
    padding: 0.1rem 0;
  }
}
</style>