<template>
  <div class="gs-news-edit">
    <div class="gs-news-edit-editor">
      <div class="gs-form-item">
        <div class="form-label">标题</div>
        <input v-model="newsData.title" />
      </div>
      <div class="gs-form-item">
        <div class="form-label">时间</div>
        <input v-model="newsData.time" />
      </div>
      <div class="gs-form-item">
        <div class="form-label">封面图片</div>
        <input v-model="newsData.img" />
        <img
          :src="newsData.img"
          width="300"
        />
      </div>
      <div class="gs-form-item">
        <div class="form-label">简介</div>
        <textarea
          v-model="newsData.summary"
          rows="3"
        />
        </div>
      <hr>
      <div>
        <div class="editor-text-title">
          正文
          <div class="editor-control" @click="addData('img', -1)">+图片</div>
          <div class="editor-control" @click="addData('text', -1)">+文字</div>
        </div>
        <div
            v-for="(_, i) in newsData.text"
            :key="i"
            class="editor-text-item"
        >
          <div class="editor-control" @click="addData('img', i)">+图片</div>
          <div class="editor-control" @click="addData('text', i)">+文字</div>
          <div class="editor-control" @click="deleteData(i)">x删除</div>
          <div v-if="newsData.text[i].ntype == 'text'">
            <div class="gs-form-item">
              <div class="form-label">文字</div>
              <textarea v-model="newsData.text[i].data" rows="3" />
            </div>
          </div>
          <div v-else-if="newsData.text[i].ntype == 'img'">
            <div class="gs-form-item">
              <div class="form-label">图片链接</div>
              <input v-model="newsData.text[i].data" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gs-news-edit-view">
      <NewsView
          :data="newsData"
      />
    </div>
    <div class="gs-news-edit-global-control">
      <div v-if="exportMsg" class="global-control-msg">
        {{ exportMsg }}
      </div>
      <div class="global-control-button" @click="dataExport">
        导 出
      </div>
    </div>
  </div>
</template>

<script>
import gsData from "../gsData";
import NewsView from "../components/NewsView.vue";

export default {
  components: {
    NewsView,
  },
  data: function () {
    return {
      id: 0,
      newsData: {
        id: 0,
        img: "",
        time: "",
        title: "",
        summary: "",
        text: [],
      },
      exportMsg: "",
    };
  },
  created: function () {
    this.id = parseInt(this.getUrlParam("id"));
    if (this.id) {
      this.fetchNewsData();
    }
  },
  methods: {
    fetchNewsData: function () {
      this.newsData = gsData.newsSelect(this.id);
    },
    getUrlParam: function (k) {
      var result = new RegExp(k + "=([^&]*)", "i").exec(window.location.search);
      return (result && decodeURIComponent(result[1])) || "";
    },
    newData: function (ntype) {
      if (ntype == "text") {
        return {
          ntype: "text",
          data: "",
        };
      }
      if (ntype == "img") {
        return {
          ntype: "img",
          data: "",
        };
      }

      return {};
    },
    addData: function (ntype, idx) {
      let d = this.newData(ntype);
      this.newsData.text.splice(idx + 1, 0, d);
    },
    deleteData: function (idx) {
      this.newsData.text.splice(idx, 1);
    },
    dataExport: function () {
      this.copyToClipboard(JSON.stringify(this.newsData) + ",");
      this.exportMsg = "导出成功，数据已复制到剪切板";
      setTimeout(() => {
        this.exportMsg = "";
      }, 3000);
    },
    copyToClipboard: function (cptext) {
      let el = document.createElement("textarea");
      document.body.appendChild(el);
      el.innerText = cptext;
      el.innerHTML = cptext;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      return true;
    },
  },
  computed: {},
};
</script>

<style>
</style>