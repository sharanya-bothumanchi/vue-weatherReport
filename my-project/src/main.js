// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';


import App from './App';
import router from './router';

import store from './storage/storage';

const moment = require('moment');

Vue.use(Vuex);
Vue.use(Router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view></router-view>',
  components: { App },
});

Vue.filter('dateFormat', (value) => {
  return moment(value).format('DD-MMM-YYYY');
});
