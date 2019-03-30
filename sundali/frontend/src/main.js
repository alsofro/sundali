import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import App from './App.vue';
import router from './router';
import store from './store';

const options = {
  apiKey: 'ALVln1wBAAAAz-xOLwMAHBoJJCBAnuKBkZmgiA4axtmypDAAAAAAAAAAAAB1HrGqHXWM-PWoKKMYRBPvEpSU5g==',
  lang: 'ru_RU',
  version: '2.1',
};
Vue.use(YmapPlugin, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
