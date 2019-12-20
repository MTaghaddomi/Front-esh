import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store.js";
import "bootstrap";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VModal);
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
