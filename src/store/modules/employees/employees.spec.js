
import employees from "./employees";
import axios from "axios";
import Vue from "vue";
import {RAW_EmployeesList,INITIAL_Store} from "./../../../../tests/unit/employees-fake-data"
const mutations = employees.mutations;
const actions = employees.actions;

describe("Testing Mutations",()=>{
    let state = null;
    beforeEach(()=>{
        state = {
            employees:"old_val",
            employeeDetail:"old_val",
            pagination:{
                el1:"old_val",
                el2:"old_val",
                el3:"old_val"
            },
            filters:{
                first_name:"old_val",
                last_name:"old_val"
            },
            loading:{
                employees:false,
                employeeDetail:false
            }
        }
    })
    it("updateEmployees - should update the state of the employees property",()=>{
        mutations.updateEmployees(state,"new_val");
        expect(state.employees).toBe("new_val");
    })
    it("updateEmployeeDetail - should update the employeeDetail prop",()=>{
        mutations.updateEmployeeDetail(state,"new_val");
        expect(state.employeeDetail).toBe("new_val");
    })
    it("updatePaginationElement - should only update common props among the input, should not delete anything",()=>{
        let payload = {
            el1:"new_val",
            el4:"new_val"
        }
        mutations.updatePaginationElement(state,payload);
        let expected = {
            el1:"new_val",
            el2:"old_val",
            el3:"old_val",
            el4:"new_val"
        }
        expect(state.pagination).toEqual(expected)
    })
    it("updatePagination - expect pagination just to equal 'new_val'",()=>{
        mutations.updatePagination(state,"new_val");
        expect(state.pagination).toEqual("new_val");
    })
    it("updateFilterElement - filter should have updated and new values but none deleted",()=>{
        let payload = {
            first_name:"new_val",
            new_Element: "new_val"
        }
        mutations.updateFilterElement(state, payload)
        let expected = {
            first_name:"new_val",
            last_name:"old_val",
            new_Element:"new_val"
        }
        expect(state.filters).toEqual(expected);
    })
    it("updateFilters - should replace the object with new value", ()=>{
        mutations.updateFilters(state,"new_val");
        expect(state.filters).toBe("new_val");
    })
    it("updateLoading - should only modify and add loading statuses to props", () => {
        mutations.updateLoading(state,"employees");
        let expected = {
            employees:true,
            employeeDetail:false,
        }
        expect(state.loading).toEqual(expected);
    })
    it("updateSort - change value to input", ()=>{
        mutations.updateSort(state, "new_val");
        expect(state.sort).toEqual("new_val");
    })
})
describe("testing actions", async ()=>{
    it("fetchEmployees - makes axios call and alters store updating employees, pagination, and loading",async ()=>{
        axios.get.mockImplementationOnce(()=>
            Promise.resolve(RAW_EmployeesList)
        );
        const init_context = {
            state:INITIAL_Store,
            commit:jest.fn()
        };
        console.log(axios.test());
        await actions.fetchEmployees(init_context);
        console.log(result);
        
    })
})