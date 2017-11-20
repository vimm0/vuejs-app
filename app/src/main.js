// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//  import App from './App'
import router from './router'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  template: `<div id="app">
  <nav class="navbar navbar-expand-md navbar-default bg-default">
  <a class="navbar-brand" href="#">Web Shikshalaya</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li>
      <router-link to="/">Home</router-link>
      </li>
      <li class="ml-2">
      <router-link to="/services">Services</router-link>
      </li>
  </div>
 </nav>
<router-view></router-view>
</div>`
//  components: { App }
}).$mount('#app')
