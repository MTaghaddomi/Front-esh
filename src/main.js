import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
import store from './store.js'
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000'
Vue.use(VueRouter);
const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
