// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //this one is represented spirit of Vue
import App from './App' // this one is main entrance of Vue

// To understand why the default router 
import router from './router' 
// import VueRouter from 'vue-router'

Vue.config.productionTip = false

// 安裝vue-router插件
// Vue.use(VueRouter);
/* eslint-disable no-new */
// Nothing is more difficult than configuration, OMG
new Vue({
  el: '#app',
  router,
  // VueRouter,
  components: { App },
  template: '<App/>'
})
