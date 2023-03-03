import { RouteRecordRaw } from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Home from "../views/home.vue";
import Modif from "../views/modif.vue";
import NavBar from "../views/navbar.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/:id",
    component: NavBar,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "modif",
        component: Modif,
      },
    ],
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
