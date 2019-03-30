import Vue from 'vue';
import Router from 'vue-router';
import MapView from './views/MapView.vue';
import AdminView from './views/AdminView.vue';
import NotificationView from './views/NotificationView.vue';
import StatisticView from './views/StatisticView.vue';
import TestView from './views/TestView.vue';

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
      path: '/admin',
      name: 'admin',
      component: AdminView,
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView,
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: StatisticView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
  ],
});
