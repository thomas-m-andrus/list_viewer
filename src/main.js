import Vue from 'vue';
import './plugins/vuetify'
import VueRouter from 'vue-router';
import App from './components/App';
import store from "./store/index";
import axios from "axios";



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.axios = Vue.prototype.$http = axios.create({})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
