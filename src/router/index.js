import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import GameEnd from "../views/GameEnd.vue";
import GameChoice from "../views/GameChoice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Game",
    component: Game,
  },
  {
    path: "/",
    name: "GameEnd",
    component: GameEnd,
  },
  {
    path: "/start",
    name: "GameChoice",
    component: GameChoice,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
