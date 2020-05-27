import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Connection from "@/views/Connection.vue";
import Game from "@/views/Game.vue";

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Connection
  },
  {
    path: '/game/:gameId',
    name: 'Game',
    component: Game,
    props: true,
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router
