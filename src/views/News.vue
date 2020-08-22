<template>
  <div class="gs-news">
    <div class="gs-news-container">
      <div class="gs-news-title">
        最新动态
      </div>
      <div
          v-for="(_, i) in newsData"
          :key="i"
          class="news-item-container"
          :class="itemClass(i)"
      >
        <NewsItem
            :data="newsData[i]"
            :ntype="1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from "../components/NewsItem.vue";
import gsData from "../gsData";

export default {
  components: {
    NewsItem
  },
  data: function() {
    return {
      newsData: [],
    };
  },
  created: function() {
    this.fetchNewsData();
  },
  methods: {
    fetchNewsData: function() {
      this.newsData = gsData.newsData;
    },
    itemClass: function(i) {
      if (this.isPhone) {
        return "";
      }
      if (i < 3) {
        return "fix-width";
      }
      return "show-border";
    }
  },
  computed: {
    isPhone: function() {
      return this.$store.state.base.isPhone;
    },
  }
};
</script>

<style>

</style>