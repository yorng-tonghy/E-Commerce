import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Detail_Product from "../views/Detail_Product";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
    },
    {
      path:"/detail",
      component: () => import("../views/Detail_Product.vue"),
    },
    {
      path:"/login",
      component:()=> import("../views/Login.vue"),
    },
    {
      path:"/landing",
      component:()=> import("../views/LandingPage.vue"),
    }
  ],
});

export default router;
