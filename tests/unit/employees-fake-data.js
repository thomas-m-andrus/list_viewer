import employees from "./employees.json";

export const RAW_EmployeesList = {
    data:employees,
    headers:{
        "x-total-count":50
    }
}

export const STORE_EmployeesList = employees;

export const Raw_EmployeeDetail = {
    data:[employees[0]]
}

export const STORE_EmployeeDetail = employees[0]

export const INITIAL_Pagination = {
    descending:false,
    page:1,
    rowsPerPage:10,
    rowsPerPageItems:[10],
    sortBy: undefined,
    totalItems:0
}
export const INITIAL_loading={
    employees:false,
    employeeDetail:false
}

export const INITIAL_filters = {
    first_name:null,
    last_name:null
}

export const INITIAL_Store = {
    loading:INITIAL_loading,
    employees:[],
    pagination:INITIAL_Pagination,
    filters:INITIAL_filters,
    sort:{
        prop:null,
        direction:null
    },
    employeeDetail:{}
}