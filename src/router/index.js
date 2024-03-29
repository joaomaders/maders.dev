import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
import Property from "@/views/Property.vue";

const routes = [
  {
    path: "/",
    name: "Início",
    component: Home,
  },
  {
    path: "/servicos",
    name: "Serviços",
    component: Services,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: About,
  },
  {
    path: "/property",
    name: "Property",
    component: Property,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;