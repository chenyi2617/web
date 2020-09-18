import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL = 'http://127.0.1:5050/';
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
