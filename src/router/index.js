import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FucultiesView from "../views/FacultiesView.vue";
import EcternalRelations from "../views/ExternalRelationsView.vue";
import ResearchView from "../views/Research.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/fuculties",
    name: "fuculties",
    component: FucultiesView,
  },
  {
    path: "/ecternal-relations",
    name: "ecternal-relations",
    component: EcternalRelations,
  },
  {
    path: "/research",
    name: "research",
    component: ResearchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
