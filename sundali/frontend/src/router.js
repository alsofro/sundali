import Vue from 'vue';
import Router from 'vue-router';
import MapView from './views/MapView.vue';
import AdminView from './views/AdminView.vue';
import NotificationView from './views/NotificationView.vue';
import StatisticView from './views/StatisticView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapView,
    },
    {
      path: '/',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/',
      name: 'notification',
      component: NotificationView,
    },
    {
      path: '/',
      name: 'statistic',
      component: StatisticView,
    },
  ],
});
