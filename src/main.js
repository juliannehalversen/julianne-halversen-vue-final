import Vue from 'vue'
import App from './App.vue'
import router from './router';
//import { routes } from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';

Vue.use(VueResource);
/*
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
*/
Vue.config.productionTip = false

/*
Vue.filter('to-uppercase', function() {
  return value.toUpperCase();
});
*/

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
