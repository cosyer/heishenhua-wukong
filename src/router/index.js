import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import NewsDetail from "../views/NewsDetail.vue";
import NewsEdit from "../views/NewsEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/news/", component: News },
  { path: "/news/detail", component: NewsDetail },
  { path: "/news/edit", component: NewsEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
