import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { store } from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "@/views/Users/Users.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "@/views/Auth/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "@/views/About.vue"),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  console.log("before matched: ", store.getters["auth/isLoggIn"]);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["auth/isLoggIn"]) {
      next({
        name: "login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
