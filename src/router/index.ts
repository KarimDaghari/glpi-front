import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "@/store";

Vue.use(VueRouter);

const authGuard = (to: any, from: any, next: Function) => {
  if (!store.state.auth.isLoggedIn) {
    next({ path: "/login", replace: true });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/computers",
    name: "computers",
    component: () =>
      import(/* webpackChunkName: "computers" */ "../views/Computers.vue"),
    beforeEnter: authGuard
  },
  {
    path: "/add",
    name: "add",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue"),
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
