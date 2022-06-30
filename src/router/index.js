import { createWebHistory, createRouter } from "vue-router";
import TremView from "@/views/TremView.vue"
import HomeView from "@/views/HomeView.vue";
import AvioesView from "@/views/AvioesView.vue";
import OnibusView from "@/views/OnibusView.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/trens",
    name: "Trens",
    component: TremView,
  },
  {
    path: "/avioes",
    name: "Aviões",
    component: AvioesView,
  },
  {
    path: "/onibus",
    name: "Ônibus",
    component: OnibusView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;