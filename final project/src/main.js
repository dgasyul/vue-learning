import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from './routes'
import * as store from './store/store'


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-final-7da67.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
