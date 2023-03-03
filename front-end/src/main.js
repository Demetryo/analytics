import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import { routes } from "../routes/routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

const app = createApp(App);

app.use(router);

app.mount("#app");

createApp(App).mount('#app')
