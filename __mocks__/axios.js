export default {
    get: jest.fn(()=> Promise.resolve({data:{test:"this is dandy"}})),
}