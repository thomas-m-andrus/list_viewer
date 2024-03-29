import Vue from 'vue';
import ListComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('ListComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof ListComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof ListComponent.data).toBe('function')
    // const defaultData = ListComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(ListComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(ListComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
  //my tests
  describe("UI behavior", ()=>{
    it("Arrow next to category should be connected to function sortList", ()=>{

    })
    it("Filter symbol should be connected to function filterList", ()=>{

    })
    it("Entries should be connected to function showDetails",()=>{

    })
    it("Page arrow buttons should be connected to turnPage function",()=>{

    })
  })
})