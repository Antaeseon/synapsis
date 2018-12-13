// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

Vue.use(BootstrapVue)
Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
