import mutations from "./employees.js"

describe('mutations', () => {
    it("commitEmployeesList - should replace the employee list with the object passed to it", () => {
        const state = {
            employees: []
        }
        const employees = [{},{},{}]
        mutations.commitEmployeesList(state, {employees})
        expect(state.employees).toBe(employees)
        
    })
    it("commitPage - should replace the page number with the number passed", () => {
        const state = {
            page: -1
        }
        const page = 1
        mutations.commitPage(state,{page})
        expect(state.page).toBe(1)
    })
    it("incrementPage - should increase the page number by one", ()=>{
        const state = {
            page: 1
        }
        mutations.incrementPage(state,{})
        expect(state.page).toBe(2)
    })
    it("decreementPage - should decrease page number by one",() =>{
        const state = {
            page: 2
        }
        mutations.decreementPage(state,{})
        expect(state.page).toBe(1)
    })
    it("commitPageLimit - should replace the page limit with number passed", () => {
        const state = {
            pageLimit: null
        }
        const pageLimit = 5
        mutations.commitPageLimit(state,{pageLimit})
        expect(state.pageLimit).toBe(5)
    })
  })