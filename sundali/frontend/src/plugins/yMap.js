import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const options = {
  apiKey: 'ALVln1wBAAAAz-xOLwMAHBoJJCBAnuKBkZmgiA4axtmypDAAAAAAAAAAAAB1HrGqHXWM-PWoKKMYRBPvEpSU5g==',
  lang: 'ru_RU',
  version: '2.1',
};

Vue.use(YmapPlugin, options);
