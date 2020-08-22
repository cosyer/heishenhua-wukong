<template>
  <div class="gs-news-detail">
    <div class="gs-news-detail-container">
      <NewsView
          :data="newsData"
      />
    </div>
  </div>
</template>

<script>
import gsData from "../gsData";
import NewsView from "../components/NewsView.vue";

export default {
  components: {
    NewsView
  },
  data: function() {
    return {
      id: 0,
      newsData: {},
    };
  },
  created: function() {
    this.id = parseInt(this.getUrlParam("id"));
    if (this.id) {
      this.fetchNewsData();
    }
  },
  methods: {
    fetchNewsData: function() {
      this.newsData = gsData.newsSelect(this.id);
    },
    getUrlParam: function(k) {
      var result = new RegExp(k + "=([^&]*)", "i").exec(window.location.search);
      return (result && decodeURIComponent(result[1])) || "";
    }
  },
  computed: {
  }
};
</script>

<style lang="scss">
.gs-news-detail {
  width: 100%;
  text-align: center;

  .gs-news-detail-container {
    display: inline-block;
  }
}
</style>