<template>
  <div
    class="gs-news-item"
    ref="newsItem"
  >
    <div
      :class="itemClass"
      @click="newsDetail"
    >
      <img
        class="news-item-img"
        :src="data.img"
      />
      <div class="news-item-info">
        <div class="news-item-time">
          {{ data.time }}
        </div>
        <div class="news-item-title">
          {{ data.title }}
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
      default: () => {
        return {};
      },
    },
    ntype: {
      default: 0,
    },
  },
  data: function () {
    return {
      itemWidth: 0,
    };
  },
  mounted: function () {
    this.fetchItemWidth();
  },
  methods: {
    fetchItemWidth: function () {
      this.itemWidth = this.$refs.newsItem.clientWidth;
    },
    newsDetail: function () {
      // this.$router.push("/news/detail?id=" + this.data.id);
      // window.open("/news/detail?id=" + this.data.id, "_blank");
    },
  },
  computed: {
    itemClass: function () {
      if (this.itemWidth <= 900) {
        return "news-item-small";
      }
      if (this.ntype > 0) {
        return "news-item-normal2";
      }
      return "news-item-normal";
    },
  },
  watch: {
    "$store.state.base.resize": function () {
      this.fetchItemWidth();
    },
  },
};
</script>

<style scoped lang="scss">
.gs-news-item {
  width: 100%;
  cursor: pointer;
  display: inline-block;
  position: relative;

  .news-item-img {
    width: 100%;
  }

  .news-item-small {
    .news-item-info {
      padding: 0.18rem 0.22rem;
    }

    .news-item-title {
      font-size: 0.26rem !important;
    }
  }

  .news-item-normal {
  }

  .news-item-info {
    position: absolute;
    bottom: 0;
    background: #00000066;
    color: #dedede;
    width: 100%;
    padding: 0.28rem 0.32rem;
    box-sizing: border-box;

    .news-item-time {
      font-family: Arial;
      font-size: 0.2rem;
    }

    .news-item-title {
      font-size: 0.34rem;
    }
  }
}
</style>
