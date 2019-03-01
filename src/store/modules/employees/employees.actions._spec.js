import __mock__employees from "../__mocks__/employees";
jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({data:__mock__employees}))
}))

import actions from "./employees.js"

describe('actions', () => {
    it("fetchEmployees - should return employee data based on sort and pagination and update state", async () => {
        
    })
})