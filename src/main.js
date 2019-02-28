import Vue from 'vue';
import './plugins/vuetify'
import App from './components/App';
import store from "./store/index";
import axios from "axios";
import router from "./router/index";




Vue.config.productionTip = false

Vue.axios = Vue.prototype.$http = axios.create({})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
