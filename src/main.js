import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import App from './views/App';
import store from "./store/index";
import axios from "axios";
import router from "./router/index";




Vue.config.productionTip = false

Vue.axios = Vue.prototype.$http = axios.create({})

Vue.use(Vuetify)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
