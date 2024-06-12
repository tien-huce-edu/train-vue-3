import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";
import HelloWorld from "./pages/HomePage.vue";
import Login from "./pages/login/Login.vue";
import "./style.css";

const routes = [
  {
    index: 1,
    path: "/login",
    component: Login,
  },

  { path: "/", component: HelloWorld },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
