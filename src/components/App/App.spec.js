import Vue from 'vue';
import { shallowMount, mount} from '@vue/test-utils'
import AppComponent from './index.vue';


describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(AppComponent)

  it('renders the correct markup', () => {
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})

/*
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('AppComponent', () => {
  //const deepMount = mount(AppComponent)
  const lesserMount = shallowMount(AppComponent)
  it("renders the component", () => {
    const wrapper = shallowMount(AppComponent)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it("redirects to home if title is clicked", () => {
    console.log(lesserMount.vm)
    //expect(deepMount.vm.SPECIAL).toBe(0)
    //const button = deepMount.find("v-toolbar-title");
    //button.trigger('click');
    //expect(deepMount.vm.SPECIAL).toBe(1);
  })
})*/