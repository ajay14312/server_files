// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import Meta from 'vue-meta'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Vuex)
Vue.use(Meta)



Vue.config.productionTip = false
Vue.http.options.credentials = true;

Vue.http.interceptors.push((request, next) => {
  var accessToken = store.state.authToken;
  request.headers.set('x-access-token', accessToken);
  next()
})

Vue.http.options.root = __API__;
// console.log("this api ====================> ","http://localhost:4000");

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


