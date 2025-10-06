import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue"),
  },
  {
    path: "/game-end",
    name: "GameEnd",
    component: () =>
      import(/* webpackChunkName: "game-end" */ "../views/GameEnd.vue"),
  },
  {
    path: "/start",
    name: "GameChoice",
    component: () =>
      import(/* webpackChunkName: "game-choice" */ "../views/GameChoice.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
