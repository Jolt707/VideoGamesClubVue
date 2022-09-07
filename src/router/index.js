import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue"),
  },
  {
    path: "/comp",
    name: "Competition",
    component: () => import(/* webpackChunkName: "comp" */ "../views/Comp.vue"),
  },
  {
    path: "/compinfo",
    name: "Competition Info",
    component: () =>
      import(/* webpackChunkName: "compinfo" */ "../views/CompInfo.vue"),
  },
  {
    path: "/members",
    name: "Members",
    component: () =>
      import(/* webpackChunkName: "members" */ "../views/Members.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
