export default {
    get: jest.fn(()=> Promise.resolve({data:{}})),
    test: jest.fn(()=>{return "hello"})
}