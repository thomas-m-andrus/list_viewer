import Vue from "vue";

const state = {
    loading:{
        employees:false,
        employeeDetail:false
    },
    employees:[],
    pagination:{
        rowsPerPage:10,
        rowsPerPageItems:[10]
    },
    filters:{
        first_name:null,
        last_name:null
    },
    sort:{
        prop:null,
        direction:null
    },
    employeeDetail:{}
}
const getters = {
    getPagination(state){
        return state.pagination;
    },
    getFilters(state){
        return state.filters;
    },
    getEmployees(state){
        return state.employees;
    },
    getEmployeeDetail(state){
        return state.employeeDetail;
    },
    getLoading(state){
        return state.loading;
    },
    getSpecificLoad:state=>prop=>{
        return state.loading[prop];
    },
    getSort(state){
        return state.sort;
    }
}
const actions = {
    async fetchEmployees(context){
        let _HTTP = "http://localhost:3000/employees?"
        _HTTP += `_page=${context.state.pagination.page}`
        _HTTP += `&_limit=${context.state.pagination.rowsPerPage}`
        let filters = context.state.filters
        for(let f in filters){
            if(filters[f]){
                _HTTP += `&${f}=${filters[f]}`
            }
        }

        if(context.state.sort.prop!==null){
            _HTTP += `&_sort=${context.state.sort.prop}&_order=${context.state.sort.direction}`
        }
        context.commit("updateLoading","employees");
        await Vue.axios
            .get(
                _HTTP
            )
            .then(r => {
                context.commit("updateLoading","employees");
                let pageData = {
                    totalItems:parseInt(r.headers["x-total-count"]),
                }
                context.commit("updateEmployees",r.data)
                context.commit("updatePaginationElement",pageData)
            })
    },
    async fetchEmployeeDetail(context,employeeId){
        let _HTTP = "http://localhost:3000/employees?id=" + employeeId
        await Vue.axios
        .get(
            _HTTP
        )
        .then(r =>{
            context.commit("updateEmployeeDetail",r.data[0])
        })
    }
}
const mutations = {
    updateEmployees(state, employees) {
        state.employees = employees;
    },
    updateEmployeeDetail(state, employee){
        state.employeeDetail = employee;
    },
    updatePaginationElement(state,payload){
        for(var el in payload){
            state.pagination[el] = payload[el];
        }
    },
    updatePagination(state,payload){
        state.pagination = payload
    },
    updateFilterElement(state,payload){
        for(var el in payload){
            state.filter[el] = payload[el];
        }
    },
    updateLoading(state,prop){
        state.loading[prop] = !state.loading[prop];
    },
    updateSort(state,payload){
        state.sort = payload
    }
}
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}