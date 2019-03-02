import Vue from "vue";
import Vuex from "vuex";

import emloyees from "./modules/employees/employees"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        emloyees
    }
});